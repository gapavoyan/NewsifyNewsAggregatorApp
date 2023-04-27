import React from 'react'
import Search from './search'

function Header() {
    return (
        <div className='fixed top-0  w-full bg-gray-900  px-4 py-2'>
            <header className="bg-gray-900  text-white ">
                <div className="container mx-auto py-4 px-8 flex items-center justify-between">
                    <a href="#" className="text-3xl font-semibold">News App</a>
                  <Search/>
                  
                </div>
            </header>
        </div>
    )
}

export default Header