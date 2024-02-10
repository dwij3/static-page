// libs
import { ReactElement } from "react"; 
import styles from './card.module.css';

type Props = {
    title: string;
    description: string;
    href: string
}

export const Card = ({title , description , href}: Props):ReactElement => {
    return(
        <a href={href} className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </a>
    )
}