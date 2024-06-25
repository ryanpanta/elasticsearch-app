import React from 'react'
import Content from '../../Components/Content'
import SearchContent from '../../Components/SearchContent'
import { SearchContext } from '../../SearchContext'

function Home() {
    const { search, setSearch } = React.useContext(SearchContext)
  return (
    <div>
        <Content />
        <SearchContent search={search} setSearch={setSearch} />
    </div>
  )
}

export default Home