import React from 'react';
import { heroImg } from '../assets';


const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-4xl text-[#20B416] font-bold'>Push Relationship Group</p>
                <h1 className='md:leading-[72px] py-2 md:text-5xl text-4xl font-semibold'>An <span className='text-[#536E96]'>Interdenominational</span>
                    <span  className='text-[#536E96]'> Prayer Group</span>
                </h1>
                <p className='py-2 text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt esse numquam? Sit aliquid consequatur quibusdam recusandae totam consectetur obcaecati, fuga cum sunt explicabo, in doloremque. Facere placeat sed dolorem!.</p>
                
                { <form className='bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between'>
                    <input 
                        className='bg-white'
                        type="text"
                        placeholder='Your prayer request'
                    />
                    <button className='px-4 py-5 rounded-md bg-[#20B416] text-white font-bold'>Submit</button>
                </form>}
            </div>
            
            <img  src={heroImg} className="md:order-last  order-first" />



        </div>
        

    </div>
  )
}

export default Hero