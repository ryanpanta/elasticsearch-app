import React from "react";
import styles from "./YearFilter.module.css"; // Update path to ReadingTimeFilter.module.css if necessary
import { SearchContext } from "../../SearchContext";

function ReadingTimeFilter({ setApplyFilter, setShowFilter }) {
    const {
        filterField,
        filterValue,
        filterOrder,
        sort,
        sortField,
        setFilterField,
        setFilterValue,
        setFilterOrder,
        setSort,
        setSortField,
    } = React.useContext(SearchContext);

    const [localFilterValue, setLocalFilterValue] = React.useState("");
    const [localFilterOrder, setLocalFilterOrder] = React.useState("");
    const [localSort, setLocalSort] = React.useState("");

    React.useEffect(() => {
        if (filterField === "reading_time") {
            setLocalFilterValue(filterValue);
            setLocalFilterOrder(filterOrder);
        }
        if (sortField === "reading_time") {
            setLocalSort(sort);
        }
    }, [filterField, filterValue, filterOrder, sort, sortField]);

    function handleChangeSort({ target }) {
        setLocalSort(target.value);
    }

    function handleChangeFilterOrder({ target }) {
        setLocalFilterOrder(target.value);
    }

    function handleSaveFilter() {
        setApplyFilter(true);
        setShowFilter(false);
        if (filterField !== "reading_time") setFilterField("reading_time");
        if (sortField !== "reading_time") setSortField("reading_time");
        setFilterValue(localFilterValue);
        setFilterOrder(localFilterOrder);
        setSort(localSort);
    }

    return (
        <div className={`animeDown ${styles.container}`}>
            <div className={styles.opcoes}>
                <p className={styles.subtitulo}>Ordem</p>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="asc"
                        onChange={handleChangeSort}
                        checked={localSort === "asc"}
                    />
                    Crescente
                </label>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="desc"
                        onChange={handleChangeSort}
                        checked={localSort === "desc"}
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
                        onChange={handleChangeFilterOrder}
                        checked={localFilterOrder === "gte"}
                    />
                    Maior que
                </label>
                <label className={styles.label}>
                    <input
                        type="radio"
                        value="lte"
                        onChange={handleChangeFilterOrder}
                        checked={localFilterOrder === "lte"}
                    />
                    Menor que
                </label>
            </div>
            <input
                className={styles.data}
                type="number"
                value={localFilterValue}
                placeholder="6"
                onChange={({ target }) => setLocalFilterValue(target.value)}
            />
            <button className={styles.botao} onClick={handleSaveFilter}>
                Aplicar
            </button>
        </div>
    );
}

export default ReadingTimeFilter;
