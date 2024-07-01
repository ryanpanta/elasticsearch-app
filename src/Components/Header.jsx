import React from "react";
import Buscai from "../assets/buscai.svg?react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logotipo}>
                    <Link to="/">
                        <Buscai />
                    </Link>
                </div>
                <nav className={styles.navMenu}>
                    <ul>
                        <li>
                            <Link to='/project'>Projeto</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
