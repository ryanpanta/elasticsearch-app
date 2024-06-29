import React from "react";
import styles from "./Footer.module.css";
import Buscai from "../assets/buscai.svg?react";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Buscai/>
                <p>Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
