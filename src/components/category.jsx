import React from 'react'

function Category({category,categoryChange}) {
    const categories = [
        { name: "", title: "All" },
        { name: "business", title: "Business" },
        { name: "health", title: "Health" },
        { name: "science", title: "Science" },
        { name: "sports", title: "Sports" },
        { name: "technology", title: "Technology" },
    ];
  return (
    <div>
        {
            categories.map((el,name)=>{
                return (
                <button className={category === el.name?"bg-gray-800 text-white" :
                "bg-gray-200 text-gray-700"} key={el.name}  onClick={() => categoryChange(el.name)}>{el.title}</button>
                )
            })
        }
    </div>
  )
}

export default Category