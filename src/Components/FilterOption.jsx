import React from "react";
import styles from "./FilterOption.module.css";
import { CalendarDays } from "lucide-react";

function FilterOption({ icon: Icon, titulo, descricao }) {
    return (
        <div className={styles.filtroItem}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.filtroInfo}>
                <p className={styles.filtroNome}>{titulo}</p>
                <p>{descricao}</p>
            </div>
        </div>
    );
}

export default FilterOption;
