import React, { useEffect, useState } from 'react'
import { sepete_ekle } from './Store/SepetSlice'
import { useDispatch } from 'react-redux';
import Navbar from "./Navbar.jsx";
import { Spinner } from 'reactstrap';
import { AiOutlineCheck } from 'react-icons/ai'
function Urunler() {
    const [products, setProducts] = useState([]);
    const [isloaded, setIsLoaded] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoaded(true));
    }, []);
    const dispatch = useDispatch();
    return (
        <div className='relative'>
            <Navbar />
            <div className={"w-screen h-screen bg-gray-200 flex items-center justify-center fixed top-0 left-0 right-0 z-10 " + (isAdded === true ? "block" : "hidden")}>
                <div className={"z-10 absolute w-1/4 h-1/4 bg-blue-500  text-center text-2xl text-white flex flex-col items-center justify-center rounded-2xl " + (isAdded === true ? "block" : "hidden")}>
                    <AiOutlineCheck className='w-1/4 h-1/4 bg-green-500  text-3xl rounded-full'></AiOutlineCheck>
                    <p>{"Item added".toUpperCase()}</p>
                    <p>{"Check it basket!".toUpperCase()}</p>
                </div>
            </div>
            {
                isloaded
                    ?
                    <ul className='grid grid-cols-3 gap-3  p-16'>
                        {
                            products.map((product, index) => (
                                <li key={index} className='border border-black rounded-3xl'>
                                    <div className='flex flex-col items-center justify-center'>
                                        <img className='p-4' src={product.image} alt={`pic of ${product.image}`} />
                                        <h2 className='text-center'>{(product.title).toUpperCase()}</h2>
                                        <p className='text-3xl font-bold'>{product.price}$</p>
                                        <div className='flex flex-row gap-2 p-2'>
                                            <button className='px-6 py-3 font-bold text-white text-center inline-block bg-blue-800 rounded-2xl hover:opacity-75'
                                                onClick={() => {
                                                    dispatch(sepete_ekle(product));
                                                    setIsAdded(true);
                                                    setTimeout(function () {
                                                        setIsAdded(false);
                                                    }, 800)
                                                }}>Sepete Ekle</button>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    :
                    (
                        <Spinner color="primary">
                            Products are Loading...
                        </Spinner>
                    )

            }
        </div>
    )
}

export default Urunler