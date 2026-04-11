import AWS from '@/components/technologies/AWS';
import Axios from '@/components/technologies/Axios';
import ExpressJs from '@/components/technologies/ExpressJs';
import Fumadocs from '@/components/technologies/Fumadocs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import Motion from '@/components/technologies/Motion';
import Multer from '@/components/technologies/Multer';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import NPM from '@/components/technologies/Npm';
import PostCSS from '@/components/technologies/PostCSS';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import Swagger from '@/components/technologies/Swagger';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Gearshift Rentals',
    description:
      'Gearshift Rentals is a car rental service offering affordable self-drive cars with flexible booking, clean vehicles, and easy pickup and drop options.',
    image: '/project/gearshift-rentals.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://gearshift-rentals.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'Axios', icon: <Axios key="axios" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MySQL', icon: <MySQL key="mysql" /> },
      { name: 'Shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      {
        name: 'Github',
        icon: <Github className="text-black dark:text-white" key="github" />,
      },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'NPM', icon: <NPM key="npm" /> },
    ],
    github: 'https://github.com/rehman2711/gearshift-rentals-next-js',
    live: 'https://gearshift-rentals.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/gearshift-rentals',
    isWorking: true,
  },
  {
    title: 'Gearshift Rentals API',
    description:
      'A RESTful API built with Express.js, providing secure and structured endpoints for handling CRUD operations and backend integration.',
    image: '/project/gearshift-api.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://gearshift-api-latest.onrender.com/',
    technologies: [
      { name: 'NPM', icon: <NPM key="npm" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Multer', icon: <Multer key="multer" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Swagger', icon: <Swagger key="swagger" /> },
    ],
    github: 'https://github.com/rehman2711/gearshift-api-with-db-express-js',
    live: 'https://gearshift-api-latest.onrender.com/',
    details: true,
    projectDetailsPageSlug: '/projects/gearshift-api',
    isWorking: true,
  },
  {
    title: 'Display UI',
    description:
      'Display UI is a Next.js component library that provides reusable, modern, and responsive UI components to build web interfaces faster and consistently.',
    image: '/project/display-ui.png',
    // create the video later by using https://imagekit.io/ this website
    // video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://display-ui.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'Fumadocs', icon: <Fumadocs key="fumadocs" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'PostCSS', icon: <PostCSS key="postcss" /> },
    ],
    github: 'https://github.com/rehman2711/display-ui',
    live: 'https://display-ui.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/display-ui',
    isWorking: true,
  },
];
