import React from "react";
import styles from "./YearFilter.module.css";
import { SearchContext } from "../../SearchContext";
function YearFilter({setApplyFilter, setShowFilter}) {
    const { date, setDate, radio, setRadio} = React.useContext(SearchContext);

    function handleChange({target}){
        setApplyFilter(false);
        setRadio(target.value)
    }

    function handleSaveFilter(){
        setApplyFilter(true);
        setShowFilter(false);
    }

    return (
        <div className={` animeDown ${styles.container}`}>
            <div className={styles.opcoes}>
                <label htmlFor="depois" className={styles.label}>
                    <input
                        type="radio"
                        value="depois"
                        id="depois"
                        
                        onChange={handleChange}
                        checked={radio === "depois"}
                    />
                    Depois de
                </label>
                <label htmlFor="antes" className={styles.label}>
                    <input
                        type="radio"
                        value="antes"
                        id="antes"
                        onChange={handleChange}
                        checked={radio === "antes"}
                    />
                    Antes de
                </label>
            </div>
            <input className={styles.data} type="number" value={date} placeholder="2018" onChange={({target}) => setDate(target.value)}/>
            <button className={styles.botao} onClick={handleSaveFilter}>Aplicar</button>
        </div>
    );
}

export default YearFilter;
