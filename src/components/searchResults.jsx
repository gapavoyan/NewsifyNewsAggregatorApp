import React from 'react'
import { useParams } from 'react-router-dom';

function SearchResults() {
  const value = useParams()
  console.log(value);
  return (
    <div>
      10
    </div>
  )
}

export default SearchResults