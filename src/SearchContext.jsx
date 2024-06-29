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

    //Estados para o filtro de ano
    const [radio, setRadio] = React.useState("");
    const [date, setDate] = React.useState(2018);

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

    const fetchData = async (search, page) => {
        try {
            setLoading(true);
            setError(false);
            console.log(loading)
            const response = await fetch(
                `http://localhost:8080/v1/search?query=${String(
                    search
                )}&page=${page}`
            );
            const json = await response.json();
            if (response.ok) {
                setData(json);
            }
            console.log(json);
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
            //setError(false);
            console.log(loading)
        }
    };

    const handleSubmit = async (event) => {
        if (event) event.preventDefault();
        if (search.length < 1) return;
        navigate("/result");
        setCurrentSearch(search);
        setCurrentPage(page);
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
                radio,
                setRadio,
                date,
                setDate,
                loading,
                error
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
