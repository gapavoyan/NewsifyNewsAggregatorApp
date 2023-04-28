import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './header';
import axios from 'axios';
import Popup from './popup';
import Pagination from './pagination';
import Loading from './loading';

function ResultsComponent() {
  // const API_Key = "a8b2d776ec124b06beea0b825e257df0"
  const API_Key = "390d1170548f455d809d4b8106dd9cdb"
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0)
  const { query } = useParams()
  const[data,setData]= useState([])
  const [selectedDataModal, setSelectedDataModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[loading,setLoading] = useState(false)
  const handleClick = (dataModal) => {
    setSelectedDataModal(dataModal);
    setIsModalOpen(true);
};
const handleCloseModal = () => {
    setIsModalOpen(false);
};
const pageChange = (page) => {
  setPage(page)
}
const handleShare = (url) => {
  navigator.share({
      title: 'My Website',
      text: 'Check out my website!',
      url: url.url,
  })};
  useEffect(() => {
    setLoading(true)
    axios.get(`https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_Key}`)
      .then((results) => {
        setData(results.data.articles)
        setTotalPage(results.data.totalResults)
        // console.log(data);
      }).finally(()=>{
        setLoading(false)
      })
  }, [query, page, totalPage, pageSize])
  if (loading) {
    return (
        <Loading/>
    )
}
  return (
    <div className='flex flex-wrap justify-center mt-32  gap-y-12 gap-x-12'>
    <Header/>
    {
      data.map((items, index) => {
        return (
          <div key={index} className=' flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-400 mb-5  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                    <img className=" ml-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={items.urlToImage} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
                        <h1 className="mb-3 font-bold  text-gray-700 dark:text-gray-400">{items.author}</h1>
                        <div className=''>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick(items)}>Read More</button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-4 rounded" onClick={() => handleShare(items)}>Share </button>
                             <button onClick={() => add(items)}><i className="fa-regular fa-heart"></i></button>
                        </div>
                        {
                            isModalOpen && <Popup dataModal={selectedDataModal} handleClose={handleCloseModal} />
                        }
                    </div>
                </div>
            )
          }
        
          )
        }

<Pagination page={page} totalPage={Math.ceil(totalPage / pageSize)} pageChange={pageChange} />
</div>
  )
}
export default ResultsComponent