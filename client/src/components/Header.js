import React from 'react';
import {LUXA, cart} from "../asserts/index.js"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaLessThanEqual } from 'react-icons/fa';


const Header = () => {

const productData = useSelector((state)=> state.luxa.productData);
console.log(productData);

  return ( 
  <div className = "w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ">
    <div className="max-w-screen-xl h-full max-auto flex items-center justify-between"> 
    <Link to="/"> 
        <div>
            <img className='w-28' src={LUXA} alt="LUXA" />
        </div>
    </Link>
        <div className = "flex items-center gap-10">
        <ul className='flex items-center gap-10'>
            <li className="text-base text-black font-bold hover:text-purple-600 hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300"> Home </li>
            <li className="text-base text-black font-bold hover:text-purple-600 hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-purple-600 hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-purple-600 hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-purple-600 hover:underline underline-offset-2 decoration-[1px] 
            cursor-pointer duration-300">Blog</li>
        </ul>
        <Link to="/cart" >
        <div>
            <img className="w-10" src={cart} alt="cart" />
            <span className="absolute w-10 top-6 left-1200 text-sm flex items-center justify-center font-semibold" >
                {productData.length}
                </span>
        </div>
        </Link>
        <img className="w-10 h-10 rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/6008/6008930.png" alt="userlogo" />
    </div>
    </div>
    </div>
  )
}

export default Header;