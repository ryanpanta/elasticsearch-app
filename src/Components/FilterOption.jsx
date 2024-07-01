import React from "react";
import styles from "./FilterOption.module.css";
import { ChevronDown } from "lucide-react";
import YearFilter from "./Filters/YearFilter";
import { SearchContext } from "../SearchContext";
import ReadingTimeFilter from "./Filters/ReadingTimeFilter";

function FilterOption({ icon: Icon, titulo, descricao }) {
    const { filterValue, filterOrder, sort, filterField } = React.useContext(SearchContext);
    const [showFilter, setShowFilter] = React.useState(false);
    const [applyFilter, setApplyFilter] = React.useState(false);

    function handleClick() {
        setShowFilter(!showFilter);
    }

    function getFilterDescription() {
        if (titulo === "Ano" && filterField === "date_creation" && applyFilter) {
            return `${sort && sort === 'asc' ? "Crescente" : sort === 'desc' ? "Decrescente" : "" }, ${filterOrder && filterOrder === "lte" ? "Antes de " : filterOrder === 'gte' ? 'Depois de ' : ''}${filterValue ? filterValue : ""}`;
        }
        if (titulo === "Leitura" && filterField === "reading_time" && applyFilter) {
            return `${sort && sort === 'asc' ? "Crescente" : sort === 'desc' ? "Decrescente" : "" }, ${filterOrder && filterOrder === "lte" ? "Menor que " : filterOrder === 'gte' ? 'Maior que ' : ''} ${filterValue ? filterValue : ""}`;
        }
        return descricao;
    }

    return (
        <div className={styles.filtroItem}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.filtroInfo}>
                <p className={styles.filtroNome}>{titulo}</p>
                <p onClick={handleClick}>
                    {getFilterDescription()}
                    <ChevronDown />
                </p>
                {showFilter && titulo === "Ano" && (
                    <YearFilter
                        setApplyFilter={setApplyFilter}
                        applyFilter={applyFilter}
                        setShowFilter={setShowFilter}
                    />
                )}
                 {showFilter && titulo === "Leitura" && (
                    <ReadingTimeFilter
                        setApplyFilter={setApplyFilter}
                        applyFilter={applyFilter}
                        setShowFilter={setShowFilter}
                    />
                )}
            </div>
        </div>
    );
}

export default FilterOption;
