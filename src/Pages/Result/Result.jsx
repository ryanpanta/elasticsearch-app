import React from "react";
import SearchContent from "../../Components/SearchContent";
import styles from "./Result.module.css";
import ResultItem from "../../Components/ResultItem";
import { SearchContext } from "../../SearchContext";

function Result() {
  const {search, setSearch, data} = React.useContext(SearchContext);
    return (
        <div className="container">
            <SearchContent search={search} setSearch={setSearch}/>
            <div className={styles.info}>
                <p>Resultados Encontrados</p>
                <p className={styles.resultados}>{data.length} resultados</p>
            </div>
            <div className={styles.resultadosContainer}>
                {data.map((item, index) => (
                    <ResultItem key={index} data={item}/>
                ))}
            </div>
        </div>
    );
}

export default Result;
