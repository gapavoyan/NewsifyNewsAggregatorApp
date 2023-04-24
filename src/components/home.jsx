import React, { useEffect, useState } from 'react'
import Category from './category'
import axios from 'axios';
import Country from './country';

function Home() {
    const API_Key = "a8b2d776ec124b06beea0b825e257df0"
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("us")
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_Key}`)
            .then((res) => {
                setData(res.data.articles)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [category, country])

    const categoryChange = (category) => {
        setCategory(category);
    };
    const countryChange = (country) => {
        setCountry(country)
    }
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div className=''>
            <div className='flex items-center flex-col'>
                <Category category={category} categoryChange={categoryChange} />
                <Country country={country} countryChange={countryChange} />
            </div>
            <div className='flex flex-wrap justify-center mt-10 mb-10 gap-y-12 gap-x-12'>
            {
                data.map((items, index) => {
                    return (
                        
                        <div key={index} className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={items.urlToImage} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.description}</p>
                            </div>
                        </div>
                     
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home