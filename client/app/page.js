"use client";

import styles from "./styles/home.module.css";
import Navbar from "../components/navbar";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        axios.get("http://localhost:5000").then((res) => {
            console.log(res.data);
        });
    });
    return (
        <div className={styles.bg}>
            <Navbar />
            <div className={styles.home}></div>
        </div>
    );
}
