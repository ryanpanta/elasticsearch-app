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
            return `${sort && sort === 'asc' ? "Crescente" : sort === 'desc' ? "Decrescente" : "" }, ${filterOrder && filterOrder === "lte" ? ", antes de " : filterOrder === 'gte' ? ' depois de ' : ''}${filterValue ? filterValue : ""}`;
        }
        if (titulo === "Leitura" && filterField === "reading_time" && applyFilter) {
            return `${sort && sort === 'asc' ? "Crescente" : sort === 'desc' ? "Decrescente" : "" }, ${filterOrder && filterOrder === "lte" ? ", menor que " : filterOrder === 'gte' ? ' maior que ' : ''} ${filterValue ? filterValue : ""}`;
        }
        return descricao;
    }

    React.useEffect(() => {
        if (filterField === "date_creation" || filterField === "reading_time") {
            setApplyFilter(true);
        } else {
            setApplyFilter(false);
        }
    }, [filterField]);

    return (
        <div className={styles.filtroItem}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.filtroInfo}>
                <p className={styles.filtroNome}>{titulo}</p>
                <p onClick={handleClick} className={showFilter ? styles.open : ""}>
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
