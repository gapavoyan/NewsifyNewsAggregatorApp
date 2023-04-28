import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
function Search({onSearch}) {
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    
    function handleValueChange(event) {
        setValue(event.target.value);
    }
    const handleSearch = () => {
        navigate(`/search/${value}`);
        onSearch(value)
      };
      console.log(searchResults);
    return (
        <div className="relative mx-auto text-gray-600">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" value={value} name="search" placeholder="Search" onChange={handleValueChange} />
            <button onClick={handleSearch} type="submit"
                className="absolute right-0 top-0 mt-2 mr-4 text-purple-500 hover:text-purple-700">
                Search
            </button>
        </div>
    )
}

export default Search