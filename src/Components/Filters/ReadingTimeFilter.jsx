import React from "react";
import styles from "./YearFilter.module.css";
import { SearchContext } from "../../SearchContext";
function ReadingTimeFilter({ setApplyFilter, setShowFilter }) {
    const {  filterField,
        setFilterField,
        filterValue,
        setFilterValue,
        filterOrder,
        setFilterOrder,
        sort,
        setSort,
        sortField,
        setSortField } = React.useContext(SearchContext);

    function handleChangeSort({ target }) {
        setApplyFilter(false);
        setSort(target.value);
    }

    function handleChangeFilterOrder({ target }) {
        setApplyFilter(false);
        setFilterOrder(target.value);
    }

    function handleSaveFilter() {
        setApplyFilter(true);
        setShowFilter(false);
        if(filterField !== "reading_time")
            setFilterField("reading_time")
        if(sortField !== "reading_time")
            setSortField("reading_time")
    }

    return (
        <div className={` animeDown ${styles.container}`}>
            <div className={styles.opcoes}>
                <p className={styles.subtitulo}>Ordem</p>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="asc"
                        id="crescente"
                        onChange={handleChangeSort}
                        checked={sort === "asc"}
                    />
                    Crescente
                </label>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="desc"
                        id="antes"
                        onChange={handleChangeSort}
                        checked={sort === "desc"}
                    />
                    Decrescente
                </label>
            </div>
            <div className={styles.opcoes}>
                <p className={styles.subtitulo}>Período</p>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="gte"
                        id="depois"
                        onChange={handleChangeFilterOrder}
                        checked={filterOrder === "gte"}
                    />
                    Maior que
                </label>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="lte"
                        id="antes"
                        onChange={handleChangeFilterOrder}
                        checked={filterOrder === "lte"}
                    />
                    Menor que
                </label>
            </div>
            <input
                className={styles.data}
                type="number"
                value={filterValue}
                placeholder="6"
                onChange={({ target }) => setFilterValue(target.value)}
            />
            <button className={styles.botao} onClick={handleSaveFilter}>
                Aplicar
            </button>
        </div>
    );
}

export default ReadingTimeFilter;
