import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {
    const select = useSelector((store)=>store.news.news)
    console.log(select);
  return (
    <div>Basket</div>
  )
}

export default Basket