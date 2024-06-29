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
import Loading from "../../Components/Helper/Loading";

function Result() {
    const { search, setSearch, data, page, setCurrentPage, loading, error } =
        React.useContext(SearchContext);

    const total = data ? Math.ceil(data.totalHits / 10) : 0;

    function goToFirstPage() {
        setCurrentPage(1);
        window.scrollTo(0, 0);
    }

    function goToNextPage() {
        setCurrentPage(page + 1);
        window.scrollTo(0, 0);
    }

    function goToPreviousPage() {
        setCurrentPage(page - 1);
        window.scrollTo(0, 0);
    }

    function goToLastPage() {
        setCurrentPage(total);
        window.scrollTo(0, 0);
    }

    return (
        <div className='container'>
            <SearchContent search={search} setSearch={setSearch} />
            {loading && <Loading />}
            <div className={styles.info}>
                <p>Resultados Encontrados</p>
                <p className={styles.resultados}>
                    {data ? `${data.totalHits} resultados` : "Carregando..."}
                </p>
            </div>
            <div className={styles.resultadosContainer}>
                {data ? data.Results.map((item, index) => (
                    <ResultItem key={index} data={item} />
                )) : error ? <p style={{textAlign: 'center'}}>Aconteceu algum erro, não foi possível fazer a sua pesquisa :(</p> : <p className={styles.buscando} style={{textAlign: 'center'}}>Buscando os melhores resultados</p>}
            </div>
            <div className={styles.paginacao}>
                <p>
                    Página {data ? page : "0"} de {total}
                </p>
                <div className={styles.icons}>
                    <div
                        onClick={goToFirstPage}
                        className={page === 1 ? styles.disabled : ""}
                    >
                        <ChevronsLeft color="#fff" />
                    </div>
                    <div
                        onClick={goToPreviousPage}
                        className={page === 1 ? styles.disabled : ""}
                    >
                        <ChevronLeft color="#fff" />
                    </div>
                    <div
                        onClick={goToNextPage}
                        className={page === total ? styles.disabled : ""}
                    >
                        <ChevronRight color="#fff" />
                    </div>
                    <div
                        onClick={goToLastPage}
                        className={page === total ? styles.disabled : ""}
                    >
                        <ChevronsRight color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
