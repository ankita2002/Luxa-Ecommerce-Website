import React, { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom'

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/luxaSlice';
import { ToastContainer, toast } from 'react-toastify';


const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
  
    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
    }
  
    // Render empty stars to fill remaining space
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={fullStars + i + 1} className="text-yellow-500" />);
    }
    return (
      <div className="flex items-center">
        {stars.map((star, index) => (
          <div key={index}>{star}</div>
        ))}
      </div>
    );
  };
  

const Product = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({});
    let [baseQty, setBaseQty] = useState(1);
    const location = useLocation()

    useEffect(() =>{
        setDetails(location.state.item);
        
    })

    
  return (
    <div>
        <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
            <div>
                <img
                className="w-full h-[550px] object-cotains "
                src={details.image}
                alt='productImg'/>
            </div>
            <div className='w-3/5 flex flex-col justify-center gap-12'>
                <div>
                    <h2 className='text-4xl font-semibold font-titleFont '>{details.title}</h2>
                    <div className='flex items-center gap-4 mt-3'>
                        <p className='text-2xl font-medium text-gray-900'>$0{details.price}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-base'>
                    <div className="flex">
                        <p>{renderStars(details.rating?.rate ?? 1)}</p>
            </div>

            <p className='text-xs text-gray-500'>({details.rating?.count ?? 1} customer review)</p>
      </div>

                <p className='text-base text-gray-500 mt-3'>{details.description}</p>
                
                <div className='flex gap-4'>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3 '>
                    <p className='text-sm'>Quantity</p>
                    <div className='flex items-center gap-4 text-sm font-semibold. '>
                    <button 
                    onClick={()=> setBaseQty(baseQty===1 ? (baseQty=1): baseQty-1 )}
                    className='border h-5 font-normal text-lg  flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white 
                    cursor-pointer duration-300 active:bg-black '>
                        -</button>
                    <span>{baseQty}</span>
                    <button 
                    onClick={ ()=> setBaseQty(baseQty+1)} 
                    className='border h-5 font-normal text-lg  flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white 
                    cursor-pointer duration-300 active:bg-black  '>
                        +</button>
                    </div>
                </div>
                <button 
                onClick={()=> dispatch(addToCart({
                    id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: 1,
                    description: details.description,
                })) & toast.success(`${details.title} is added`)
              }
                className='bg-black text-white py-3 px-6 active:bg-gray-800 '>
                    <BsFillCartPlusFill className="inline-block mr-2" /> Add to Cart</button>
            </div>
            <p className='text-base text-gray-500'> Category:
            <span>{" "}</span>
                <span className='font-medium capitalize'>{details.category}
                </span></p>
            </div>
        </div>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
    />
    </div>

  )
}

export default Product