"use client";

import styles from "./styles/home.module.css";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <div className={styles.bg}>
            <Navbar />
            <div className={styles.home}></div>
        </div>
    );
}
