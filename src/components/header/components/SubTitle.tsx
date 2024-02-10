// libs
import { ReactElement } from 'react';
import styles from '../header.module.css'

export const SubTitlte = ():ReactElement => {
    return (
        <div className={styles.subTitle}>
            <p>Get started by editing{' '}
            <span className={styles.tag}><code>pages/index.ts</code></span>
            </p>
        </div>
    )
}