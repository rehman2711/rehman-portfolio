import Github from '@/components/technologies//Github';
import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NPM from '@/components/technologies/Npm';
import Postman from '@/components/technologies/Postman';
import Shadcn from '@/components/technologies/Shadcn';
// import NestJs from '@/components/technologies/NestJs';
import Swagger from '@/components/technologies/Swagger';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  defaultOpenValueId: string;
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    defaultOpenValueId: 'jaguarsolutions',
    company: 'Jaguar Solutions Pvt. Ltd.',
    position: 'Frontend Developer',
    location: 'Pimple Saudagar, India (On-Site)',
    image: '/company/jaguar-solutions.png',
    description: [
      'Designed and developed responsive, reusable UI components in Next.js, ensuring clean architecture, scalability, and consistent user experience across devices.',

      'Integrated frontend modules with backend REST APIs by implementing secure API calls, handling authentication tokens, managing request/response flows, and displaying dynamic data efficiently.',

      'Collaborated closely with designers, backend developers, and QA teams to translate requirements into high-quality features, fix UI/UX issues quickly, and deliver production-ready releases on time.',

      'Used modern development workflows and tools such as Git, GitHub, Postman, and browser devtools to debug issues, manage code reviews, track tasks, and maintain a stable codebase.',

      'Built modern UI screens rapidly using component libraries like ShadCN UI and Material UI (MUI), while customizing themes, variants, and layout systems to match project design standards.',
    ],
    startDate: 'July 2025',
    endDate: 'January 2026',
    website: 'https://www.jaguarsolutions.in/',
    x: 'https://x.com/jaguarsolutions',
    linkedin: 'https://www.linkedin.com/company/jaguar-solutions-pune/',
    github: 'https://github.com/jaguarsolutions',
    technologies: [
      {
        name: 'NextJS',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Swagger',
        href: 'https://swagger.io/',
        icon: <Swagger />,
      },
      {
        name: 'Shadcn UI',
        href: 'https://ui.shadcn.com/',
        icon: <Shadcn />,
      },
      {
        name: 'GitHub',
        href: 'https://github.com/',
        icon: <Github />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'NPM',
        href: 'https://www.npmjs.com/',
        icon: <NPM />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
    ],
    isCurrent: false,
    isBlur: false,
  },
  // {
  //   defaultOpenValueId: 'ironmansolutions',
  //   company: 'Iron Man Solutions Pvt. Ltd.',
  //   position: 'BackEnd Developer',
  //   location: 'Pimple Saudagar, India (On-Site)',
  //   image: '/company/jaguar-solutions.png',
  //   description: [
  //     'Designed and developed responsive, reusable UI components in Next.js, ensuring clean architecture, scalability, and consistent user experience across devices.',

  //     'Integrated frontend modules with backend REST APIs by implementing secure API calls, handling authentication tokens, managing request/response flows, and displaying dynamic data efficiently.',

  //     'Collaborated closely with designers, backend developers, and QA teams to translate requirements into high-quality features, fix UI/UX issues quickly, and deliver production-ready releases on time.',

  //     'Used modern development workflows and tools such as Git, GitHub, Postman, and browser devtools to debug issues, manage code reviews, track tasks, and maintain a stable codebase.',

  //     'Built modern UI screens rapidly using component libraries like ShadCN UI and Material UI (MUI), while customizing themes, variants, and layout systems to match project design standards.',
  //   ],
  //   startDate: 'July 2025',
  //   endDate: 'January 2026',
  //   website: 'https://www.jaguarsolutions.in/',
  //   x: 'https://x.com/jaguarsolutions',
  //   linkedin: 'https://www.linkedin.com/company/jaguar-solutions-pune/',
  //   github: 'https://github.com/jaguarsolutions',
  //   technologies: [
  //     {
  //       name: 'NextJS',
  //       href: 'https://nextjs.org/',
  //       icon: <NextJs />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://www.typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Tailwind CSS',
  //       href: 'https://tailwindcss.com/',
  //       icon: <TailwindCss />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://www.postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'Swagger',
  //       href: 'https://swagger.io/',
  //       icon: <Swagger />,
  //     },
  //     {
  //       name: 'Shadcn UI',
  //       href: 'https://ui.shadcn.com/',
  //       icon: <Shadcn />,
  //     },
  //     {
  //       name: 'GitHub',
  //       href: 'https://github.com/',
  //       icon: <Github />,
  //     },
  //     {
  //       name: 'AWS',
  //       href: 'https://aws.amazon.com/',
  //       icon: <AWS />,
  //     },
  //     {
  //       name: 'NPM',
  //       href: 'https://www.npmjs.com/',
  //       icon: <NPM />,
  //     },
  //     {
  //       name: 'Vercel',
  //       href: 'https://vercel.com/',
  //       icon: <Vercel />,
  //     },
  //   ],
  //   isCurrent: false,
  //   isBlur: false,
  // },
];
