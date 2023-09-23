import React from 'react'
import CategoryCard from './CategoryCard'
import {WiSunrise} from 'react-icons/wi'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl text-center font-bold'>Our Upcoming <span className='text-[#20B416]'>Events</span></h1>
                <p className='text-lg text-gray-600'></p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 px-12 py-12 md:gap-4 gap-1'>
                    <CategoryCard  icons={<WiSunrise size={0} />} title={'October 21st'} />
                    <CategoryCard icons={<WiSunrise size={0} />} title={'November 18'} />
                    

                    

                </div>
        
        
        </div>
    </div>
  )
}

export default Categories