import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {
    const select = useSelector((store)=>store.news.news)
    console.log(select);
  return (
    <div>
      {
        select.map((el)=>
          <h1>{el.title}</h1>
        )
      }
    </div>
  )
}

export default Basket