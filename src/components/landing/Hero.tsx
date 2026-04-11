import { heroConfig, socialLinks } from '@/config/Hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Container from '../common/Container';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const { name, title, avatar } = heroConfig;

  return (
    <Container className="mx-auto md:max-w-5xl">
      {/* Image */}
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="hero"
          width={100}
          height={100}
          className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-rehman text-3xl font-bold">{name}</h1>
          <p className="text-md text-neutral-400"> {title}</p>
        </div>
      </div>
      <div className="mx-2 mt-4">
        <p className="text-neutral-500">
          I turn the ideas into fast, functional web apps
        </p>
      </div>

      {/* Social Links */}
      <div className="mx-2 mt-4 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}
