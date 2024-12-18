import reactLogo from '@/public/skills_svg/react.svg';
import nextLogo from '@/public/skills_svg/nextjs-logo.svg';
import angularLogo from '@/public/skills_svg/angular-svgrepo-com.svg'
import jsLogo from '@/public/skills_svg/javascript-svgrepo-com.svg'
import tsLogo from '@/public/skills_svg/typescript-official-svgrepo-com.svg'
import tailwindLogo from '@/public/skills_svg/tailwind-svgrepo-com.svg'
import viteLogo from '@/public/skills_svg/vite-svgrepo-com.svg'
import unitTestingLogo from '@/public/skills_svg/unit-testing-logo.png';
import jestLogo from '@/public/skills_svg/jest-svgrepo-com.svg';
import vercelLogo from '@/public/skills_svg/devops/vercel-icon-svgrepo-com.svg';
import nodeJSLogo from '@/public/skills_svg/backend/node-js-svgrepo-com.svg';
import expressLogo from '@/public/skills_svg/backend/express-svgrepo-com.svg';
import nestJSLogo from '@/public/skills_svg/devops/vercel-fill-svgrepo-com.svg';
import prismaLogo from  '@/public/skills_svg/backend/prisma-svgrepo-com.svg';
import mongooseLogo from  '@/public/skills_svg/backend/mongodb-svgrepo-com.svg';
import postgreLogo from  '@/public/skills_svg/backend/postgresql-svgrepo-com.svg';
import mysqlLogo from  '@/public/skills_svg/backend/mysql-logo-svgrepo-com.svg';
import mongodbLogo from  '@/public/skills_svg/backend/mongodb-svgrepo-com (1).svg';
import githubLogo from '@/public/skills_svg/devops/github-142-svgrepo-com.svg';

export type SkillDataProp = {
    name: string,
    image: string,
    content?: React.ReactNode
}

export const frontEndSkill : SkillDataProp[] = [
    {
        name: 'React', 
        image: reactLogo,
        content: 
        <p>
            I&apos;ve been using react almost in 6 months.
            <br></br>
            React has been my biggest motivation to keep making website, it&apos;s fun and really powerfull.
            <br></br>
            <span className='block text-center text-base'>I 💓 React</span>
        </p>
    },

    {
        name: 'Next JS', 
        image: nextLogo,
        content: 
        <p>
            NextJS is really helping me creating powerfull and fast react project. 
            <br></br>
            <br></br>
            It has lot of great feature, like SSR and server side function which make it a dealbreaker in terms of Fullstack Development.
        </p>
    },

    {
        name: 'Vite', 
        image: viteLogo,
        content: 
        <p>
            Vite is a great choice in terms of creating react project.
            You can build react project in a sec with very fast compiler to speed up the development process.
            <br></br>
            <br></br>
            Vite is one of my favourite framework to work with React.
        </p>
    },

    {
        name: 'Angular', 
        image: angularLogo,
        content:
        <p>
            Angular is my first javascript framework, I learn a lot of development process with angular, especially in my last work. I've been using angular about 4 years from now.
            <br></br>
            <br></br>
            Angular has great feature to offer like components and services to make your web project more organized and reusable.
        </p>
    },

    {
        name: 'Javascript', 
        image: jsLogo,
        content: 
        <p>
            Umm, what should i say?
            <br></br>
            <br></br>
            The best programming language of all time. 🔥
        </p>
    },

    {
        name: 'Typescript', 
        image: tsLogo,
        content:
        <p>
            It&apos;s hard to work with typescript sometimes -_- but the more you invest your time in it the more feature it has to offer for you.
            <br></br>
            <br></br>
            The most benefit using typescript in a development process is that you SURE that your code is typesafety and you get rid of the unwanted result of your app
        </p>
    },

    {
        name: 'Tailwind', 
        image: tailwindLogo,
        content:
        <p>
            Who doesn&apos;t love tailwind?
        </p>
    },
];

export const uTestingSkils: SkillDataProp[] = [
    {
        name: 'Jest',
        image: jestLogo
    },

    {
        name: 'Vitest',
        image: viteLogo
    },

    {
        name: 'testing-library',
        image: unitTestingLogo
    }
]

export const backendSkills: SkillDataProp[] = [
    {
        name: 'Node.JS',
        image: nodeJSLogo
    },

    {
        name: 'Express',
        image: expressLogo
    },

    {
        name: 'Nest JS',
        image: nestJSLogo
    },

    {
        name: 'Prisma',
        image: prismaLogo
    },

    {
        name: 'Mongoose',
        image: mongooseLogo
    },

    {
        name: 'PostgreSQL',
        image: postgreLogo
    },

    {
        name: 'MySQL',
        image: mysqlLogo
    },

    {
        name: 'MongoDB',
        image: mongodbLogo
    },
]

export const devOpsSkills: SkillDataProp[] = [
    {
        name: 'Vercel',
        image: vercelLogo
    },
    {
        name: 'Github Actions',
        image: githubLogo
    },
];