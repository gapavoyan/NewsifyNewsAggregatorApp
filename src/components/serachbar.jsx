import React from 'react'

function Serachbar() {
  return (
          <div class="relative mx-auto text-gray-600">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit"
                            class="absolute right-0 top-0 mt-2 mr-4 text-purple-500 hover:text-purple-700">
                            Search
                        </button>
                    </div>
  )
}

export default Serachbar