import React from 'react'

export const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = React.useState("abc");	
  return (
    <SearchContext.Provider value={{search, setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

