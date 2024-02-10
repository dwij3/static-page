// libs
import { ReactElement } from "react"; 
import styles from './header.module.css';

// components
import { Title } from "./components/Title"; 
import { SubTitlte } from "./components/SubTitle"; 

export const Header = ( ):ReactElement => {

    return(
        <div className={styles.header}>
            <Title />
            <SubTitlte />
        </div>
    )
}