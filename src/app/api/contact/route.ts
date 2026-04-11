import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

export const runtime = 'nodejs'; // ensures stable behavior for fetch/env

// ✅ Proper Schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

// ⚠️ NOTE ABOUT RATE LIMITING:
// This Map rate limiter is ONLY OK for local dev.
// On Vercel/Serverless it will reset often.
// Use Redis/Upstash for real rate limiting.
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  if (cfConnectingIP) return cfConnectingIP;

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    const resetTime = now + RATE_LIMIT_WINDOW;
    rateLimitStore.set(clientIP, { count: 1, resetTime });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetTime };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: clientData.resetTime };
  }

  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
    resetTime: clientData.resetTime,
  };
}

// ✅ Escape Markdown to avoid Telegram parse breaking due to user input
function escapeMarkdown(text: string) {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<{ ok: boolean; error?: any }> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken) {
    return { ok: false, error: 'TELEGRAM_BOT_TOKEN not configured' };
  }

  if (!telegramChatId) {
    return { ok: false, error: 'TELEGRAM_CHAT_ID not configured' };
  }

  const time = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // ✅ Escape all user inputs
  const safeName = escapeMarkdown(data.name.trim());
  const safeEmail = escapeMarkdown(data.email.trim());
  const safePhone = escapeMarkdown(data.phone.trim());
  const safeMessage = escapeMarkdown(data.message.trim());

  const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${safeName}
📧 *Email:* ${safeEmail}
📱 *Phone:* ${safePhone}

💬 *Message:*
${safeMessage}

⏰ *Submitted:* ${escapeMarkdown(time.toISOString())}
📍 *Timezone:* ${escapeMarkdown(timezone)}
  `.trim();

  const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: telegramMessage,
        parse_mode: 'MarkdownV2', // ✅ safer than basic Markdown
        disable_web_page_preview: true,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      return { ok: false, error: result || 'Telegram API failed' };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
}

// ✅ CORS helper (optional if needed)
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
          retryAfterSeconds: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            ...corsHeaders(),
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const telegram = await sendToTelegram(validatedData);

    if (!telegram.ok) {
      console.error('Telegram failed:', telegram.error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to send message to Telegram.',
          debug: telegram.error, // ⚠️ remove in production if you want
        },
        {
          status: 500,
          headers: {
            ...corsHeaders(),
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          },
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      {
        status: 200,
        headers: {
          ...corsHeaders(),
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
        },
      }
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400, headers: corsHeaders() }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// ✅ OPTIONS for browser preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders() });
}

// ✅ GET should not be used here
export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405, headers: corsHeaders() }
  );
}
