import React from 'react'

function Country({country,countryChange}) {
    const countries = [
        { name: "us", title: "US" },
        { name: "jp", title: "Japan" },
        { name: "ru", title: "Russia" },
        { name: "eg", title: "Egypt" },
        { name: "ca", title: "Canada" },
    ];
  return (
    <div>
        {
            countries.map((el,name)=>{
                return(
                <button className={country === el.name?"bg-gray-800 text-white" :
                "bg-gray-200 text-gray-700"} key={name}  onClick={() => countryChange(el.name)}>{el.title}</button>
                )
            })
        }
    </div>
  )
}

export default Country