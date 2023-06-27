import React from 'react'

import { BsFillCartPlusFill } from 'react-icons/bs';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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


const ProductsCard = ({ product }) => {
 // console.log(product); // Check the structure and properties of the product object
  // Assuming the image URL is nested under product.image propert

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const _id = product.title;
  const idString=(_id)=> {
    return String(_id).toLowerCase().split(" ").join("");
  }
  const rootId = idString(_id);
  //console.log(rootId);
  const handleDetails =() => {
    navigate(`/product/${rootId}`, {
      state:{
        item: product,
      }
    })
    //console.log("details");
  }

  return (
    <div className='group'>
      <div onClick={handleDetails} className="w-full h-96 cursor-pointer flex items justify overflow-hidden "> 
        <img
          className="w-full h-full object-contain group-hover:scale-110 duration-500"
          src={product.image} // Access the correct property for the image URL
          alt="productImg"
        />
      </div>
      <div className='w-full h-flex-auto border-[1px] px-2 py-4'>
        <div>
        <div className=' flex items-center'>
          <h2 className='font-titleFont text-base font-bold '>{product.title}</h2>
        </div>
        <div className='relative overflow-hidden'>
        <p className='uppercase'>{product.category}</p>
          <div><p>{renderStars(product.rating.rate)} </p> </div>
        <div className="flex gap-2 transform group-hover: translate-x-0 transition-transform duration-500">
        <p className="font-bold">${product.price}</p>
        </div>
        <p onClick={()=> dispatch(addToCart({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
          description: product.description,
        })) & toast.success(`${product.title} is added`)
      } 
        className='absolute right-40 z-30 text-gray-500 hover:text-gray-900 gap-4 top-5 transform -translate-x-40 
        group-hover:translate-x-40 transition-transform cursor-pointer duration-500 ml-auto'>
  <BsFillCartPlusFill className='text-4xl text-gray-500 hover:text-gray-900 ' /> </p>
        </div>
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
  );
};

export default ProductsCard;
