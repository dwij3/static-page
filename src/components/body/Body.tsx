// libs
import  { ReactElement } from "react"; 
import styles from './body.module.css';

// components
import { Card } from "./components/card"; 


const DATA = [
    {
        id: '1',
        title: 'Documentation',
        description: 'Find in-depth information about Next.js features and API.',
        href: 'https://nextjs.org/docs',
    },
    {
        id: '2',
        title: 'Learn',
        description: 'Learn about Next.js in an interactive course with quizzes!',
        href: 'https://nextjs.org/learn',
    },
    {
        id: '3',
        title: 'Examples',
        description: 'Learn about Next.js in an interactive course with quizzes!',
        href: 'https://github.com/vercel/next.js/tree/canary/examples',
    },
    {
        id:'4',
        title: 'Deploy',
        description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    }
]


export const Body = ():ReactElement => {
    return (
        <div className={styles.body}>
            {
                DATA.map((data) => <Card key={data.id} title={data.title} description={data.description} href={data.href}/>)
            }
        </div>
    )

}