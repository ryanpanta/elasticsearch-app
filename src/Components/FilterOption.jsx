import React from "react";
import styles from "./FilterOption.module.css";
import { ChevronDown } from "lucide-react";
import YearFilter from "./Filters/YearFilter";
import { SearchContext } from "../SearchContext";

function FilterOption({ icon: Icon, titulo, descricao }) {
    const { date, radio } = React.useContext(SearchContext);
    const [showFilter, setShowFilter] = React.useState(false);
    const [applyFilter, setApplyFilter] = React.useState(false);

    function handleClick() {
        setShowFilter(!showFilter);
    }

    function getFilterDescription() {
        if (titulo === "Ano" && applyFilter) {
            return `${radio} de ${date}`;
        }
        // Adicione outras condições para diferentes filtros aqui
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
            </div>
        </div>
    );
}

export default FilterOption;
