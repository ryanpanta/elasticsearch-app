import React from "react";
import { CalendarDays, Clock4 } from "lucide-react";
import stylesFilter from "./FilterOption.module.css";
import styles from "./ResultItem.module.css";
function ResultItem({data}) {
    
    return (
        <div className={styles.resultItem}>
            <h2 className={styles.titulo}>{data.title}</h2>
            <p
                className={styles.descricao}
                dangerouslySetInnerHTML={{ __html: data.highlight }}
            />
            <a className={styles.lerMais} href={data.url}>
                Ler Mais
            </a>
            <div className={styles.filtros}>
                <div className={styles.iconContainer}>
                    <div className={stylesFilter.icon}>
                        <Clock4 />
                    </div>
                    <span>{data.readingTime} min</span>
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
