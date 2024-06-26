import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {

    const [search, setSearch] = React.useState(() => {
        const url = new URL(window.location.toString());
        const search = url.searchParams.get("search");   
        
        return search ? search : "";
    });
    /* const [search, setSearch] = React.useState(""); */
    /* const [page, setPage] = React.useState(1); */
    const [page, setPage] = React.useState(() => {
        const url = new URL(window.location.toString());
        const page = url.searchParams.get("page");
    
        return page ? Number(page) : 1;
    });

    const navigate = useNavigate();
    const [data, setData] = React.useState(null);

    /* const updateURLParams = (search, page) => {
        const url = new URL(window.location.toString());
        url.searchParams.set("query", search);
        url.searchParams.set("page", page);
        window.history.pushState({}, "", url);
    }; */

    function setCurrentSearch(search) {
        const url = new URL(window.location.toString());
        url.searchParams.set("search", search);
        window.history.pushState({}, "", url);
        setSearch(search);
    }

    function setCurrentPage(page) {
        const url = new URL(window.location.toString());
        url.searchParams.set("page", String(page));
        window.history.pushState({}, "", url);
        setPage(page);
    }

    const fetchData = async (search, page) => {
        const response = await fetch(
            `http://localhost:8080/v1/search?query=${String(search)}&page=${page}`
        );
        const json = await response.json();
        if (response.ok) {
            setData(json);
        }
        console.log(json);
    };

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (search.length < 1) return;
        navigate("/result");
        setCurrentSearch(search);
        setCurrentPage(page);
        await fetchData(search, page);

        //updateURLParams(search, page);
    };

    console.log(data);
    React.useEffect(() => {
        fetchData(search, page);
    }, [page]);

    /* React.useEffect(() => {
        const url = new URL(window.location.toString());
        const query = url.searchParams.get("query");
        const pageNum = url.searchParams.get("page");

        if (query) {
            setSearch(query);
        }
        if (pageNum) {
            setPage(Number(pageNum));
        }

        if (query) {
            fetchData(query, pageNum ? Number(pageNum) : 1);
        }
    }, [location.search]); */

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                handleSubmit,
                data,
                setPage,
                page,
                setCurrentPage,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
