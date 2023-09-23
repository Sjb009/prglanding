import React from 'react'
import { achievement } from '../assets'


const Achievement = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-center '>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-[#20B416]'>Pioneer</span></h1>
                <p className='text-lg text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis autem, repellendus, minus beatae sit, dolore corporis non recusandae iure at laborum. Dolor et quam explicabo sint molestiae. Facilis autem reiciendis voluptatem dolore velit sit qui, officiis, deleniti consequatur commodi odit ratione blanditiis quaerat, dolores nemo cum! Labore magnam dignissimos minima itaque voluptate consectetur, ex, ipsam eligendi maiores velit dicta aliquid beatae iure inventore omnis, error tempora rerum. Animi voluptate, similique itaque explicabo iusto beatae nulla aperiam, alias impedit nihil aspernatur ducimus debitis optio! Sit, aspernatur! Autem facilis nihil quia quae saepe hic ab cupiditate. Minus distinctio laboriosam vero odio molestiae?
                </p>
            
           </div>
            
             
             <img  src={achievement} className="m-auto md:order-last  order-first" />




        </div>
        

    </div>
  )
}

export default Achievement