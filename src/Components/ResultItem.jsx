import React from "react";
import { CalendarDays, Clock4 } from "lucide-react";
import stylesFilter from "./FilterOption.module.css";
import styles from "./ResultItem.module.css";
function ResultItem() {
    return (
        <div className={styles.resultItem}>
            <h2 className={styles.titulo}>Fourier na computação quântica</h2>
            <p className={styles.descricao}>
                A fourier na computação é muito importante para a fourier na
                computação é muito importante para A fourier na computação é
                muito importante para A fourier na computação é muito importante
                para{" "}
            </p>
            <a className={styles.lerMais} href="#">
                Ler Mais
            </a>
            <div className={styles.filtros}>
                <div className={styles.iconContainer}>
                    <div className={stylesFilter.icon}>
                        <Clock4 />
                    </div>
                    <span>9 min</span>
                </div>
                <div className={styles.iconContainer}>
                    <div className={stylesFilter.icon}>
                        <CalendarDays />
                    </div>
                    <span>2008</span>
                </div>
            </div>
        </div>
    );
}

export default ResultItem;
