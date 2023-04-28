import React, { useEffect, useState } from 'react';
import Category from '../filterCategoryCountry/category'
import axios from 'axios';
import Country from '../filterCategoryCountry/country';
import Popup from '../modal/popup';
import Loading from '../loading/loading';
import Pagination from '../pagination/pagination';
import { useDispatch } from 'react-redux';
import { addToNewsCart } from '../../store/slices/newsSlice';
function Home() {
    // const API_Key = "a8b2d776ec124b06beea0b825e257df0"
    const API_Key = "390d1170548f455d809d4b8106dd9cdb"
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPage, setTotalPage] = useState(0)
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("us")
    const [loading, setLoading] = useState(false)
    const [selectedDataModal, setSelectedDataModal] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_Key}`)
            .then((res) => {
                setData(res.data.articles)
                setTotalPage(res.data.totalResults)
            })
            .finally(() => {
                setLoading(false)
            })
    },
        [category, country, page, totalPage, pageSize])
    const categoryChange = (category) => {
        setCategory(category);
    };
    const countryChange = (country) => {
        setCountry(country)
    };
    const handleClick = (dataModal) => {
        setSelectedDataModal(dataModal);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const pageChange = (page) => {
        setPage(page)
    };
    const handleShare = (url) => {
        navigator.share({
            title: 'My Website',
            text: 'Check out my website!',
            url: url.url,
        });
    };
    function add(item) {
        dispatch(addToNewsCart(item))
    };
    if (loading) {
        return (
            <Loading />
        )
    };
    return (
        <div className='bg-gray-200'>
            <div className='flex items-center flex-col'>
                <Category category={category} categoryChange={categoryChange} />
                <Country country={country} countryChange={countryChange} />
            </div>
            <div className='flex flex-wrap justify-center mt-10  gap-y-12 gap-x-12'>
                {
                    data.map((items, index) => {
                        return (
                            <div key={index} className='mb-4 flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-400  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                                <img className=" ml-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={items.urlToImage} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
                                    <h1 className="mb-3 font-bold  text-gray-700 dark:text-gray-400">{items.author}</h1>
                                    <div className='flex justify-between'>
                                        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded' onClick={() => handleClick(items)}>Read More</button>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-2 rounded" onClick={() => handleShare(items)}>Share </button>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold ml-2 py-2 px-2 rounded" onClick={() => add(items)}>Add To Basket</button>
                                    </div>
                                    {
                                        isModalOpen && <Popup dataModal={selectedDataModal} handleClose={handleCloseModal} />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Pagination page={page} totalPage={Math.ceil(totalPage / pageSize)} pageChange={pageChange} />
            </div>
        </div>
    )
}

export default Home