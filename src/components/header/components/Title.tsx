// libs
import {  ReactElement } from 'react';
import styles from '../header.module.css';

export const Title = ():ReactElement => {
    return <h1 className={styles.title}>Welcome to <a href='https://nextjs.org/'>Next.js</a> on Docker!</h1>
}

