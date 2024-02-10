// libs
import { ReactElement } from "react"; 
import styles from './footer.module.css';

export const Footer = ():ReactElement => {
    return <div className={styles.footer}><p className={styles.text}>Powered by Vercel</p></div>
}