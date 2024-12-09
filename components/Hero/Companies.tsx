import React from 'react'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className='w-[90%] m-auto my-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full items-center gap-24'>
            <span className='w-[85px] h-[87px] relative'>
                <Image src='/images/zapier.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[107px] h-[109px] relative'>
                <Image src='/images/paper.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[135px] h-[139px] relative'>
                <Image src='/images/cibbank.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[63px] h-[65px] relative'>
                <Image src='/images/z.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[103px] h-[98px] relative'>
                <Image src='/images/burnt.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[115px] h-[115px] relative'>
                <Image src='/images/panda.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
            <span className='w-[84px] h-[87px] relative'>
                <Image src='/images/moz.png' alt='/' fill objectFit='cover' objectPosition='center'/>
            </span>
        </div>
    </div>
  )
}

export default Companies