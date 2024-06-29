import React from "react";
import Content from "../../Components/Content";
import SearchContent from "../../Components/SearchContent";
import { SearchContext } from "../../SearchContext";
import Loading from "../../Components/Helper/Loading";

function Home() {
    const { search, setSearch} = React.useContext(SearchContext);
    return (
        <section>
            <Content />
            <SearchContent search={search} setSearch={setSearch} />
        </section>
    );
}

export default Home;
