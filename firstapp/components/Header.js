import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";

import React from 'react'

const Header = () => {
    return (
        <header className={styles.header}>
        <div >
         <Navbar/>
        </div>

        <div className={styles.text_box}>
            <h1 className={styles.heading_primary}>
                <span className={styles.heading_primary_main}>
                Welcome to the world of ReactJS
                </span>
                <span className={styles.saurabhtext}>Love with JavaScript</span>
            </h1>
            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animation}`}>
                SaurabhGoyal Technical Blog
            </a>
        </div>
      </header>
    )
};

export default Header;