import React from 'react'
import Image from 'next/image'
interface CardProps{
    image:string;
    name:string;
}

const AboutGrid:React.FC<CardProps> = ({image, name}) => {
  return (
    <div className='flex flex-col gap-3 hover:shadow-lg'>
        <div className='w-full h-[375px] relative'>
            <Image src={image} alt='/' fill objectFit='cover'/>
        </div>
        <div>
            <h2 className='text-dark text-[20px]'>{name}</h2>
            <p className='text-dark text-[18px]'>$99.00</p>
        </div>
    </div>
  )
}

export default AboutGrid