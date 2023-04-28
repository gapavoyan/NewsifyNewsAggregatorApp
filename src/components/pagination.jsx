import React from 'react'

function Pagination({ page, totalPage, pageChange }) {
    const total = [];
    for (let i = 1; i <= totalPage; i++) {
        total.push(i)
    }
    // console.log(total);
    return (
        <div>
            {
                total.map((el, i) => {
                    return (
                        <button key={i} onClick={() => pageChange(el)}>{
                            el
                        }</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination