import reactLogo from '@/public/skills_svg/react.svg';
import nextLogo from '@/public/skills_svg/nextjs-logo.svg';
import angularLogo from '@/public/skills_svg/angular-svgrepo-com.svg'
import jsLogo from '@/public/skills_svg/javascript-svgrepo-com.svg'
import tsLogo from '@/public/skills_svg/typescript-official-svgrepo-com.svg'
import tailwindLogo from '@/public/skills_svg/tailwind-svgrepo-com.svg'
import viteLogo from '@/public/skills_svg/vite-svgrepo-com.svg'
import unitTestingLogo from '@/public/skills_svg/unit-testing-logo.png';
import jestLogo from '@/public/skills_svg/jest-svgrepo-com.svg'

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
        image: nextLogo
    },

    {
        name: 'Vite', 
        image: viteLogo
    },

    {
        name: 'Angular', 
        image: angularLogo
    },

    {
        name: 'Javascript', 
        image: jsLogo
    },

    {
        name: 'Typescript', 
        image: tsLogo
    },

    {
        name: 'Tailwind', 
        image: tailwindLogo
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
        image: jestLogo
    },

    {
        name: 'Express',
        image: jestLogo
    },

    {
        name: 'Nest JS',
        image: jestLogo
    },

    {
        name: 'Prisma',
        image: jestLogo
    },

    {
        name: 'Mongoose',
        image: jestLogo
    },

    {
        name: 'PostgreSQL',
        image: jestLogo
    },

    {
        name: 'MySQL',
        image: jestLogo
    },

    {
        name: 'MongoDB',
        image: jestLogo
    },
]

export const devOpsSkills: SkillDataProp[] = [
    {
        name: 'Vercel',
        image: jestLogo
    },
    {
        name: 'Github Actions',
        image: jestLogo
    },
];