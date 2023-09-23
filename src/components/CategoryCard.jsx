import React from 'react'

const CategoryCard = ({icons,title}) => {
  return (
    <div className='category-card bg-white md:p-4 p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit'>
        <div className='flex gap-4'>
            {icons}
            <h1 className='md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10' >{title}</h1>
        </div>
        
        
    </div>
  )
}

export default CategoryCard