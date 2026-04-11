import { Separator } from '@/components/ui/separator';
import { footerConfig } from '@/config/Footer';
import { socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';

import Container from './Container';

const footerLinks = [
  { href: '/', page: 'Home' },
  { href: '/work-experience', page: 'Work' },
  { href: '/resume', page: 'Resume' },
  { href: '/projects', page: 'Projects' },
  { href: '/contact', page: 'Contact' },
];

export default function Footer() {
  return (
    <>
      <Separator />

      <Container className="py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* NAVIGATE */}
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground ">
              Navigate
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-secondary hover:text-primary transition-colors hover:underline underline-offset-4 transition-transform duration-1000"
                >
                  {link.page}
                </a>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </p>

            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-wrap h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  <span className="size-5">{link.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 border-t" />

        <div className="flex flex-col gap-4 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            {footerConfig.text} <b>{footerConfig.developer}</b> &copy;{' '}
            {new Date().getFullYear()} {footerConfig.copyright}
          </p>

          <p>Hello Visitor Have A Good Day</p>
        </div>
      </Container>
    </>
  );
}
