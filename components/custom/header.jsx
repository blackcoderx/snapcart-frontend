
import styles from "../styles/header.module.css"
import Navbar from "@/components/custom/navbar";
import React from "react";

export default function Header() {
    return (
        <header className="flex justify-around items-center py-4 px-12 bg-white">
            <div>
                <h1 className={styles.header}>SnapCart</h1>
            </div>
            <Navbar className="flex justify-center"/>
        </header>
    )

}