import React from 'react'
import { LUXA, payment_logo1 } from '../asserts'
import {ImGithub} from 'react-icons/im'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsPaypal, BsPersonFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            {/*Logoicon start*/
            <div className='flex flex-col gap-7'>
                <img className="w-32" src = {LUXA} alt="LUXA"/>
                <p className='text-white text-sm tracking-wide'>© luxa.com</p>
                <img className="w-56" src = {payment_logo1} alt="payment_logo"/>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <ImGithub className='hover:text-white duration-300 cursor-pointer '/>
                    <FaFacebookF className='hover:text-white duration-300 cursor-pointer '/>
                    <FaTwitter className='hover:text-white duration-300 cursor-pointer '/>
                    <FaInstagram className='hover:text-white duration-300 cursor-pointer '/>
                    <FaYoutube className='hover:text-white duration-300 cursor-pointer '/>
                    <FaHome className='hover:text-white duration-300 cursor-pointer '/>
                </div>
            </div>
            }
            {/*Logoicon end*/}
            {/*locateus start*/}     
            <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Locate us</h2>
            <div className='text-base flex flex-col gap-4'>
            <p>123 Main Street, Churchgate, <br></br>
            Mumbai, Maharastra, INDIA,<br></br> Postal Code: 400002.</p>
            <p>Mobile No: +91 123 456-7890</p>
            <p>Phone No: +91 987 654-3210</p>
            <p>Email: info@luxa.com</p>
            </div>
            </div>
            {/*Locateus end*/}            
            {/*Profile start*/}  
            <div>
                <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>   
                <div className="flex flex-col gap-4 text-base">
                <p className='flex items-center gap-4 hover:text-white duration-300 cursor-pointer'><span><BsPersonFill/></span> {" "}My Account</p>
                <p className='flex items-center gap-4 hover:text-white duration-300 cursor-pointer'><span><BsPaypal/></span> {" "}Checkout</p>
                <p className='flex items-center gap-4 hover:text-white duration-300 cursor-pointer'><span><FaHome/></span> {" "}Order Tracking</p>
                <p className='flex items-center gap-4 hover:text-white duration-300 cursor-pointer'><span><MdLocationOn/></span> {" "}Help & Support</p>
                </div>
            </div> 
            {/*Profile end*/}            
            {/*Subscribe start*/}      
            <div className='flex flex-col justify-center'>
                <input className='bg-transparent border px-4 py-2 text-sm ' placeholder="e-mail" type='text'/>
                <button className='text-sm border text-white border-t-0 hover:bg-gray-900  active:bg-white active:text-black'>
                    Subscribe</button>    
            </div>      
            {/*subscribe end*/}     
        </div>
    </div>
  )
}

export default Footer