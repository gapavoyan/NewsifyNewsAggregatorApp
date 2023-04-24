import React from 'react'
import Serachbar from './serachbar'

function Header() {
    return (
        <div>
            <header className="bg-gray-900  text-white">
                <div className="container mx-auto py-4 px-8 flex items-center justify-between">
                    <a href="#" className="text-3xl font-semibold">News App</a>

                  <Serachbar/>
                </div>
            </header>
        </div>
    )
}

export default Header