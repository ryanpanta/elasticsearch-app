import React from "react";
import styles from "./Content.module.css";
import SearchContent from "./SearchContent";
import { Link } from "react-router-dom";

function Content() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.conteudo}>
                    <h1 className={styles.titulo}>
                        Abra a sua mente para coisas novas
                    </h1>
                    <p className={styles.descricao}>
                        Conheça mais sobre o nosso projeto :)
                    </p>
                    <button className={styles.botao}> <Link to='/project'>Saiba Mais</Link></button>
                </div>
            </div>
            
        </section>
    );
}

export default Content;
