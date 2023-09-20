import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Our Core Values</h1>
            <p className='text-center  text-[#536E96] text-xl'></p>
            <div className=''>
                <div className='flex gap-4'>
                  <marquee behavior="" direction="">
                    <p>Godly-Relationships, Godly-Marriages, Word, Prayer </p>
                  </marquee>
                  {/* <img src={companyLogo1} />
                  <img src={companyLogo2} />
                  <img src={companyLogo3} />
                  <img src={companyLogo4} /> */}
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies