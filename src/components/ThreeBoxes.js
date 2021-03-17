import React from 'react';
import styles from './Box.module.css';

const ThreeBoxes = () => {
    return (
        <div>
            <h1>Here are three boxes</h1>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>

        </div>
    );
};


export default ThreeBoxes;