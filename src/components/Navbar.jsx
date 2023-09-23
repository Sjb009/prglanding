import React, { useState } from 'react';
import {logo, hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[4480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <img src={logo} className="h-[50px]" />
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <li className='cursor-pointer hover:bg-gray-100 text-[#536E96] px-1'>Home</li>
                    <li className='cursor-pointer hover:bg-gray-100 text-[#536E96] px-1'>About Us</li>
                    <li className='cursor-pointer hover:bg-gray-100 text-[#536E96] px-1'>Contact Us</li>
                    <li className='cursor-pointer hover:bg-gray-100 text-[#536E96] px-1'>Testimonies</li>
                </ul>
            </div>


            {<div className='hidden md:flex'>
            
                <button className='px-8 py-3 rounded-md bg-[#20B416] text-white font-bold'>Chat with us</button>
            </div> }

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-gray-100 '>Home</li>
                    <li className='p-4 hover:bg-gray-100'>About Us</li>
                    <li className='p-4 hover:bg-gray-100'>Contact Us</li>
                    <li className='p-4 hover:bg-gray-100'>Testimonies</li>
                    { <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-5 rounded-md bg-[#20B416] text-white font-bold'>Chat with us</button>
                    </div> }
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar