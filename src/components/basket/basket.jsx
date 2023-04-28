import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToNewsCart } from '../../store/slices/newsSlice';
import Header from '../layouts/header';

function Basket() {
  const dispatch = useDispatch();
  const errorImg = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"
  const select = useSelector((store) => store.news.news);
  if (select.length == 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Header />
        <h2 className="text-6xl text-gray-500">Your Basket is currently empty.</h2>
      </div>
    )
  };
  function remove(items) {
    dispatch(deleteToNewsCart(items))
  };
  return (
    <div className='flex flex-wrap justify-center mt-10 gap-y-12 gap-x-12'>
      <Header />
      {select && select.map((items, index) => (
        <div key={index} className='mt-20 flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-400 mb-5 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
          <img className="ml-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={items.urlToImage?items.urlToImage:`${errorImg}`} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
            <h1 className="mb-3 font-bold text-gray-700 dark:text-gray-400">{items.author}</h1>
            <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold ml-2 py-2 px-2 rounded" onClick={() => remove(items)}>Delete News</button>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Basket
