import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

function Search() {
    // const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        // navigate(`/search/${searchTerm}`);
      };
    return (
        <div className="relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" value={searchTerm} name="search" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch} type="submit"
                className="absolute right-0 top-0 mt-2 mr-4 text-purple-500 hover:text-purple-700">
                Search
            </button>
        </div>
    )
}

export default Search