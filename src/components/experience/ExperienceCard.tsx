import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={
        experience.defaultOpenValueId === 'jaguarsolutions' ? ['item'] : []
      }
    >
      <AccordionItem value="item" className="border-none">
        <div className="flex flex-col gap-5">
          {/* HEADER */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            {/* LEFT */}
            <div className="flex gap-3">
              <Image
                src={experience.image}
                alt={experience.company}
                width={100}
                height={100}
                className="size-12 shrink-0 rounded-md"
              />

              <div className="flex flex-col gap-1">
                {/* Company */}
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className={cn(
                      'text-base font-semibold sm:text-lg',
                      experience.isBlur ? 'blur-[5px]' : 'blur-none',
                    )}
                  >
                    {experience.company}
                  </h3>

                  {experience.isCurrent && (
                    <div className="flex items-center gap-1 rounded-md border border-green-300 bg-green-500/10 px-2 py-[2px] text-[10px] sm:text-xs">
                      <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                      Working
                    </div>
                  )}
                </div>

                {/* Position */}
                <p className="text-muted-foreground text-sm">
                  {experience.position}
                </p>

                {/* SOCIAL + MORE */}
                <div className="mt-1 flex items-center gap-3">
                  {experience.website && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.website}
                          target="_blank"
                          className="size-4.5 text-neutral-500"
                        >
                          <Website />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Website</TooltipContent>
                    </Tooltip>
                  )}

                  {experience.x && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.x}
                          target="_blank"
                          className="size-4.5 text-neutral-500"
                        >
                          <X />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>X</TooltipContent>
                    </Tooltip>
                  )}

                  {experience.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.linkedin}
                          target="_blank"
                          className="size-4.5 text-neutral-500"
                        >
                          <LinkedIn />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>LinkedIn</TooltipContent>
                    </Tooltip>
                  )}

                  {experience.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.github}
                          target="_blank"
                          className="size-4.5 text-neutral-500"
                        >
                          <Github />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>GitHub</TooltipContent>
                    </Tooltip>
                  )}

                  {/* TOGGLE BUTTON */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <AccordionTrigger className="p-0"></AccordionTrigger>
                    </TooltipTrigger>
                    <TooltipContent>more</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-muted-foreground flex flex-col text-sm md:text-right">
              <p>
                {experience.startDate} -{' '}
                {experience.isCurrent ? 'Present' : experience.endDate}
              </p>
              <p>{experience.location}</p>
            </div>
          </div>

          {/* EXPANDABLE CONTENT */}
          <AccordionContent className="mt-4 flex flex-col gap-4">
            {/* Technologies */}
            <div>
              <h4 className="mb-2 text-sm font-semibold">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology, i) => (
                  <Skill key={i} name={technology.name} href={technology.href}>
                    {technology.icon}
                  </Skill>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="text-muted-foreground flex flex-col gap-1 text-sm md:text-base">
              {experience.description.map((desc, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: `• ${parseDescription(desc)}`,
                  }}
                />
              ))}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
