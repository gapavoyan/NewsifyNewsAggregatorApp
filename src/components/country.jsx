import React from 'react'

function Country({ country, countryChange }) {
    const countries = [
        { name: "us", title: "US" },
        { name: "fr", title: "France" },
        { name: "ru", title: "Russia" },
        { name: "eg", title: "Egypt" },
        { name: "ca", title: "Canada" },
    ];
    return (
        <div>
            {
                countries.map((el, name) => {
                    return (
                        <div key={name} className='inline-flex rounded-md shadow-sm'>
                            <button className={country === el.name ? "mt-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white  py-2 px-4 rounded" :
                            "bg-gray-200 text-gray-700 py-2 px-4 rounded"} key={name} onClick={() => countryChange(el.name)}>{el.title}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Country