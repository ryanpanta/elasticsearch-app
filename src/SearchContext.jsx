import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = React.useState(() => {
        const url = new URL(window.location.toString());
        const search = url.searchParams.get("search");

        return search ? search : "";
    });

    const [page, setPage] = React.useState(() => {
        const url = new URL(window.location.toString());
        const page = url.searchParams.get("page");

        return page ? Number(page) : 1;
    });

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    //Estados para os filtro de ano 
    const [filterField, setFilterField] = React.useState(() => {
        const url = new URL(window.location.toString());
        const filterField = url.searchParams.get("filterField");
        return filterField ? filterField : "";
    });
    const [filterValue, setFilterValue] = React.useState(() => {
        const url = new URL(window.location.toString());
        const filterValue = url.searchParams.get("filterValue");
        return filterValue ? filterValue : "";
    
    });
    const [filterOrder, setFilterOrder] = React.useState(() => {
        const url = new URL(window.location.toString());
        const filterOrder = url.searchParams.get("filterOrder");
        return filterOrder ? filterOrder : "";
    
    });
    const [sort, setSort] = React.useState(() => {
        const url = new URL(window.location.toString());
        const sort = url.searchParams.get("sort");
        return sort ? sort : "";
    });
    const [sortField, setSortField] = React.useState(() => {
        const url = new URL(window.location.toString());
        const sortField = url.searchParams.get("sortField");
        return sortField ? sortField : "";
    });
    
    const navigate = useNavigate();

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

    function setCurrentFilter(filterField, filterValue, filterOrder, sort, sortField) {
        const url = new URL(window.location.toString());
        if(filterField !== "")
            url.searchParams.set("filterField", String(filterField))
        if(filterValue !== "")
            url.searchParams.set("filterValue", String(filterValue))
        if(filterOrder !== "")
            url.searchParams.set("filterOrder", String(filterOrder))
        if(sort !== "")
            url.searchParams.set("sort", String(sort))
        if(sortField !== "")
            url.searchParams.set("sortField", String(sortField))
        window.history.pushState({}, "", url);
    }

    const fetchData = async (search, page) => {
        try {
            setLoading(true);
            setError(false);
            const url = new URL("http://localhost:8080/v1/search")
            url.searchParams.set("query", String(search))
            url.searchParams.set("page", page)
            if(filterField !== "")
                url.searchParams.set("filterField", String(filterField))
            if(filterValue !== "")
                url.searchParams.set("filterValue", String(filterValue))
            if(filterOrder !== "")
                url.searchParams.set("filterOrder", String(filterOrder))
            if(sort !== "")
                url.searchParams.set("sort", String(sort))
            if(sortField !== "")
                url.searchParams.set("sortField", String(sortField))
            console.log(url);
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setData(json);
            }
        } catch (error) {
            setError(true);
           
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (search.length < 1) return;
        navigate("/result");
        setCurrentSearch(search);
        setCurrentPage(1);
        setCurrentFilter(filterField, filterValue, filterOrder, sort, sortField);
        await fetchData(search, page);
    };

    React.useEffect(() => {
        if (search.length > 0) fetchData(search, page);
    }, [page]);

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
                loading,
                error,
                filterField,
                setFilterField,
                filterValue,
                setFilterValue,
                filterOrder,
                setFilterOrder,
                sort,
                setSort,
                sortField,
                setSortField
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
