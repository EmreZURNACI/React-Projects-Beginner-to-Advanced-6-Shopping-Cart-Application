import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sepete_ekle, sepetten_cıkar, sepeti_bosalt } from './Store/SepetSlice';
import { IoCloseSharp } from 'react-icons/io5'
import { BsFillTrashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
function Modal() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.sepet.sepet.urunler);
    const price = useSelector((state) => state.sepet.sepet.fiyat);
    return (
        <div className={"w-full  flex flex-col items-center justify-center "}>
            <div className='absolute top-10 right-10'>
                <button><IoCloseSharp className='text-red-700 text-5xl' onClick={() => navigate("/")}></IoCloseSharp></button>
            </div>
            {
                products.length !== 0 &&
                <div className='absolute top-10 left-10'>
                    <span className='text-3xl text-blue-500' >Total Price : {price.toFixed(2)} $</span>
                </div>
            }
            {
                products &&
                products.map((product, index) => (
                    <div key={index} className='bg-neutral-950 rounded-3xl p-4 w-2/4  flex justify-between my-2'>
                        <div className='w-1/4 flex items-center justify-center'>
                            <img className='rounded-xl' src={product.image} alt={`pic of ${product.image}`} />
                        </div>
                        <div className='w-3/4 flex flex-col'>
                            <div className='h-3/4'>
                                <p className='text-white text-xl'>{product.title}</p>
                            </div>
                            <div className='flex items-center justify-around h-1/4'>
                                <div className='flex items-center gap-2'>
                                    <button className='px-4 py-2 border font-bold bg-white text-dark rounded-xl' onClick={() => dispatch(sepete_ekle(product))}>+</button>
                                    <span className='bg-orange-400 text-white px-4 py-2 rounded-xl text-xl'>{product.urunAdedi ? product.urunAdedi : "1"}</span>
                                    <button onClick={() => dispatch(sepetten_cıkar(product))} className='px-4 py-2 border font-bold bg-white text-dark rounded-xl'>-</button>
                                </div>
                                <div>
                                    <p className='text-white text-2xl'>{product.price}$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                products.length !== 0
                    ?
                    <div className='w-2/4 flex justify-end' >
                        <button onClick={() => dispatch(sepeti_bosalt())} className='px-4 py-2 w-full flex items-center justify-center rounded-xl bg-black text-white'><BsFillTrashFill className='text-2xl'></BsFillTrashFill></button>
                    </div>
                    : <div className='w-screen h-screen flex items-center justify-center bg-gray-800'>
                        <span className='text-7xl text-white' title='empty the basket'>Basket is empty</span>
                    </div>
            }
        </div >
    )
}

export default Modal