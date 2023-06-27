import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md';
import CartItem from '../components/CartItem';

const Cart = () => {
  const productData = useSelector((state) => state.luxa.productData);
  const [totalAmt, setTotalAmt] = useState("");
  //console.log(productData);

  useEffect(()=> {
    let price=0;
    productData.map((item)=> {
      price += item.price * item.quantity;
      return price;
    })
    setTotalAmt(price.toFixednp(2));
  },[productData]);
  return (
    <div>
      <img
      className='w-full h-60 object-cover'
      src="https://wallpapers.com/images/hd/high-resolution-black-and-gold-background-j15frbtminjro0z3.jpg"
      alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4 flex flex-col '>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className="text-2xl font-medium">Cart Billing</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>  $ {totalAmt} </span>
            </p>
            <p className='flex items-center gap-4 text-base'>
              Shipping{" "}
              <span> Shiv Sai Building, Murdha Village, Bhayander (west), Mumbai, Maharashtra, 401101 </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='font-bold text-xl'>${totalAmt}</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 flex items-center justify-center hover:bg-gray-800 duration-300'>
  <MdShoppingCart size={16} style={{ marginRight: '8px' }} />
  Proceed to Checkout
</button>

        </div>
      </div>
    </div>
  );
};

export default Cart;