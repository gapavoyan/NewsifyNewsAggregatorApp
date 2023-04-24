import React from 'react'
import Serachbar from './serachbar'

function Header() {
    return (
        <div>
            <header class="bg-gray-900  text-white">
                <div class="container mx-auto py-4 px-8 flex items-center justify-between">
                    <a href="#" class="text-3xl font-semibold">News App</a>

                  <Serachbar/>
                </div>
            </header>
        </div>
    )
}

export default Header