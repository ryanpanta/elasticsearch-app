import React from "react";
import styles from "./YearFilter.module.css";
import { SearchContext } from "../../SearchContext";
function YearFilter({ setApplyFilter, setShowFilter }) {
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
        if(filterField !== "date_creation")
            setFilterField("date_creation")
        if(sortField !== "date_creation")
            setSortField("date_creation")
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
                    Depois de
                </label>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="lte"
                        id="antes"
                        onChange={handleChangeFilterOrder}
                        checked={filterOrder === "lte"}
                    />
                    Antes de
                </label>
            </div>
            <input
                className={styles.data}
                type="number"
                value={filterValue}
                placeholder="2018"
                onChange={({ target }) => setFilterValue(target.value)}
            />
            <button className={styles.botao} onClick={handleSaveFilter}>
                Aplicar
            </button>
        </div>
    );
}

export default YearFilter;
