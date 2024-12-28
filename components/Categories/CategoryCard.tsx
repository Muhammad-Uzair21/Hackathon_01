import React from 'react'
import Image from 'next/image'

interface CardProps {
    image: string;
    title: string;
    products: string;
}
const CategoryCard: React.FC<CardProps> = ({image, title, products}) => {
  return (
    <div className='w-auto relative h-[424px] bg-gray-400 overflow-hidden rounded-xl hover:shadow-lg'>
        <Image src={image} alt='' fill objectFit='cover'/>
        <div className='w-full absolute bottom-0 py-4 px-6 bg-black/70 text-white'>
            <h2 className='text-xl font-semibold mb-1'>{title}</h2>
            <p className='text-white text-opacity-70 text-sm'>{products}</p>
        </div>
    </div>
  )
}

export default CategoryCard