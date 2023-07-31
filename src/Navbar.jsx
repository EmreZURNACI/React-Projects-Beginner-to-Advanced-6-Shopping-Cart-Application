import React from 'react'
import { BsBasket } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
function Navbar() {
    const navigate = useNavigate();
    const products = useSelector((state) => state.sepet.sepet.urunler);
    const quantity = () => {
        var urunAdet = 0;
        products.forEach(product => {
            urunAdet += product.urunAdedi;
        });
        return urunAdet;
    }
    return (
        <div className='bg-blue-500'>
            <div className='container  mx-auto'>
                <div className='flex flex-row justify-center items-center'>
                    <div className='p-2 relative'><button onClick={() => navigate("/basket")}>
                        <BsBasket title='Sepeti Görüntüle' className='text-5xl text-white '></BsBasket></button>
                        {

                            quantity() === 0
                                ? ""
                                : <div className='absolute bg-red-700 rounded-full h-7 w-7 flex items-center justify-center text-white top-10 left-11'>
                                    <span style={{fontSize:"1.35rem"}}>{quantity()}</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar