import React from "react";
import styles from "./SearchContent.module.css";
import { Search, CalendarDays, Clock4 } from "lucide-react";
import FilterOption from "./FilterOption";
import { SearchContext } from "../SearchContext";

function SearchContent({search, setSearch}) {
    
    const { handleSubmit } = React.useContext(SearchContext);
    return (
        <div className={styles.container}>
            <form className={styles.search} onSubmit={handleSubmit}>
                <input
                    name="search"
                    value={search}
                    onChange={({target}) => setSearch(target.value)}
                    type="text"
                    placeholder="Transformada de fourier aplicada na computação"
                />
                
                <button className={styles.searchIcon}>
                    <Search color="#fff" />
                </button>
            </form>
            <div className={styles.filtro}>
                <FilterOption icon={CalendarDays} titulo='Ano' descricao='Selecione uma data'/>
                <FilterOption icon={Clock4} titulo='Leitura' descricao='Selecione um tempo'/>
                <FilterOption icon={CalendarDays} titulo='Ano' descricao='Selecione uma data'/>
                <FilterOption icon={CalendarDays} titulo='Ano' descricao='Selecione uma data'/>
               
            </div>
        </div>
    );
}

export default SearchContent;
