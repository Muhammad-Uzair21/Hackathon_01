import React from 'react'
import Image from 'next/image';

interface CardProps {
    icon:string;
    heading:string;
    para:string;
}

const AboutCard: React.FC<CardProps> = ({icon, heading, para}) => {
  return (
    <div className='h-[244px] bg-light text-primary flex items-center justify-center'>
        <div className='flex w-[75%] h-[70%] flex-col justify-between'>
            <span className='w-[24px] h-[24px] relative'>
                <Image src={icon} alt='/' fill/>
            </span>
            <h1 className='text-[20px]'>{heading}</h1>
            <p className='text-[16px]'>{para}</p>
        </div>
    </div>
  )
}

export default AboutCard