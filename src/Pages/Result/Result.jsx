import React from "react";
import SearchContent from "../../Components/SearchContent";
import styles from "./Result.module.css";
import ResultItem from "../../Components/ResultItem";
import { SearchContext } from "../../SearchContext";
import {
    ChevronLeft,
    ChevronsLeft,
    ChevronRight,
    ChevronsRight,
} from "lucide-react";

function Result() {
    const { search, setSearch, data, setPage, page } =
        React.useContext(SearchContext);

    const total = Math.ceil(data.totalHits / 10);

    function goToFirstPage(){
        setPage(1);
    }

    function goToNextPage() {
            setPage((oldPage) => oldPage + 1);
    }

    function goToPreviousPage() {
            setPage((oldPage) => oldPage - 1);
       
    }

    function goToLastPage() {
        setPage(total);
    }
    console.log(page)
    return (
        <div className="container">
            <SearchContent search={search} setSearch={setSearch} />
            <div className={styles.info}>
                <p>Resultados Encontrados</p>
                <p className={styles.resultados}>{data.totalHits} resultados</p>
            </div>
            <div className={styles.resultadosContainer}>
                {data.Results.map((item, index) => (
                    <ResultItem key={index} data={item} />
                ))}
            </div>
            <div className={styles.paginacao}>
                <p>Página {page} de {total}</p>
                <div className={styles.icons}>
                    <div onClick={goToFirstPage} className={page === 1 ? styles.disabled : ''}>
                        <ChevronsLeft color="#fff" />
                    </div>
                    <div onClick={goToPreviousPage} className={page === 1 ? styles.disabled : ''}>
                        <ChevronLeft color="#fff"  />
                    </div>
                    <div onClick={goToNextPage} className={page === total ? styles.disabled : ''}>
                        <ChevronRight color="#fff" />
                    </div>
                    <div onClick={goToLastPage} className={page === total ? styles.disabled : ''}>
                        <ChevronsRight color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
