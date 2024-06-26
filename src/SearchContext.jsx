import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = React.useState("");
    const navigate = useNavigate();
    const [data, setData] = React.useState([]);
    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch(
            `http://localhost:8080/v1/search?query=${search}?page=3`
        );
        const json = await response.json();
        if(response.ok) {
          setData(json);
          navigate("/result");
        }
        console.log(data);
        console.log(json);
    }
    return (
        <SearchContext.Provider
            value={{ search, setSearch, handleSubmit, data }}
        >
            {children}
        </SearchContext.Provider>
    );
};
