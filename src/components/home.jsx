import React, { useEffect, useState } from 'react'
import Category from './category'
import axios from 'axios';

function Home() {
    const API_Key = "a8b2d776ec124b06beea0b825e257df0"
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_Key}`).then((res) => {
            setData(res.data.articles)
        })
    }, [category])
    const categoryChange = (category) => {
        setCategory(category);
    };
    console.log(data);
    return (
        <div>
            <Category category={category} categoryChange={categoryChange} />
            {
                data.map((items, index) => {
                    return (
                        <div key={index}>
                            <h1>{items.title}</h1>
                            <p>{items.description
                            }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home