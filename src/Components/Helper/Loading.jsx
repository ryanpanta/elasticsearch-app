import React from "react";
import styles from "./Loading.module.css";
import SearchLoading from "../../assets/searchLoading.svg?react";
function Loading() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loading}>
                <SearchLoading />
            </div>
        </div>
    );
}

export default Loading;
