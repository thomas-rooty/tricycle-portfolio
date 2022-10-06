import React from "react";
import styles from "../../../styles/rocket.module.css";

const initTrip = () => {
    // Add a shaking screen effect that lasts for 4 seconds, then remove it
    const body = document.querySelector('body');
    body.classList.add(styles.shake);
    body.style.animationIterationCount = 'infinite';
    setTimeout(() => {
        body.classList.remove(styles.shake);
        body.style.animationIterationCount = '1';
    }, 4000);
}

export default initTrip;