import React from "react";
import SearchContent from "../../Components/SearchContent";
import styles from "./Result.module.css";
import ResultItem from "../../Components/ResultItem";
import { SearchContext } from "../../SearchContext";
function Result() {
  const {search, setSearch} = React.useContext(SearchContext);
    return (
        <div className="container">
            <SearchContent search={search} setSearch={setSearch}/>
            <div className={styles.info}>
                <p>Resultados Encontrados</p>
                <p className={styles.resultados}>20 resultados</p>
            </div>
            <div className={styles.resultadosContainer}>
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        </div>
    );
}

export default Result;
