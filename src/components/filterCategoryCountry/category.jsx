import React from 'react';
const categories = [
    { name: "", title: "Main" },
    { name: "business", title: "Business" },
    { name: "health", title: "Health" },
    { name: "science", title: "Science" },
    { name: "sports", title: "Sports" },
    { name: "technology", title: "Technology" },
];
function Category({ category, categoryChange }) {
    return (
        <div>
            {
                categories.map((el, name) => (
                    <div
                        key={name}
                        className='inline-flex mt-28 rounded-md shadow-sm'
                    >
                        <button className={category === el.name ? "mt-8 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white  py-2 px-4 rounded" :
                            "bg-gray-200 text-gray-700 py-2 px-4 rounded"} key={name} onClick={() => categoryChange(el.name)}>{el.title}</button>
                    </div>
                )
                )
            }
        </div>
    )
};

export default Category