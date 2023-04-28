import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SearchForm({ onSearch, onSubmit }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`)
    onSearch(query);
  };
    return (
        <div className="relative mx-auto text-gray-600">
            <form onSubmit={onSubmit}>
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" value={query} name="search" placeholder="Search"  onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" onClick={handleSearch}
                className="absolute right-0 top-0 mt-2 mr-4 text-purple-500 hover:text-purple-700">
                Search
            </button>
            </form>
        </div>
    )
}

export default SearchForm