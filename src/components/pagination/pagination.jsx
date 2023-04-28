import React from 'react';
function Pagination({ page, totalPage, pageChange }) {
    let total = [];
    for (let i = 1; i <= totalPage; i++) {
        total.push(i)
    }
    if (total.length > 10) {
        total = total.slice(0, 10)
    }
    return (
        <div className='flex justify-center items-center'>
            {
                total.map((el, i) => {
                    return (
                        <button className={` mb-2 flex items-center justify-center h-10 w-10 rounded-full ${el === page ? "bg-gray-800 text-white" : "bg-gray-400 hover:bg-gray-300"
                            } mr-1`} key={i} onClick={() => pageChange(el)}>{
                                el
                            }</button>
                    )
                })
            }
        </div>
    )
}
export default Pagination