import React, { useState } from 'react'
import SearchForm from './searchForm'
import { NavLink } from 'react-router-dom'
function Header() {
    const [value, setValue] = useState('')
    const hendlSearch = (newValue) => {
        setValue(newValue)
    }
    return (
        <div className='fixed top-0  w-full bg-gray-900  px-4 py-2'>
            <header className="bg-gray-900  text-white ">
                <div className="container mx-auto py-4 px-8 flex items-center">
                    <NavLink to="/home" className="text-3xl font-semibold" >News App</NavLink>
                    <SearchForm onSearch={hendlSearch} />
                    <NavLink to="/basket" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><i className="fa-solid fa-basket-shopping"></i></NavLink>
                </div>
            </header>
        </div>
    )
}

export default Header