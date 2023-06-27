import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products }) => {
  //console.log(products)
  return (
    <div className = "py-10 ">
        <div className = "flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-black text-white py-2 w-80 text-center"> ABOUT LUXA</h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-black text-center text-bold">
            Welcome to LUXA, your gateway to an unrivaled world of luxury. 
            Explore our curated collection of exquisite goods, meticulously crafted to redefine opulence. 
            From stunning jewelry to prestigious timepieces, indulge in the epitome of elegance. Elevate your lifestyle today.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {
            products.map((item) => (
              <ProductsCard key={item._id} product={item}/>
            ))} 
        </div> 
    </div>
  )
}

export default Products