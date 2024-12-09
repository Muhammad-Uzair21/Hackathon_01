import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuShoppingCart } from 'react-icons/lu'

const logo = () => {
  return (
    <div className='w-full bg-light'>
        <div className='w-[90%] m-auto flex items-center justify-between py-6'>
            <Link href='/'>
            <div className='flex items-center gap-2'>
                <span className='relative md:h-10 md:w-10 h-8 w-8'>
                    <Image src="/images/Logo.png" alt='Logo' fill objectFit='contain'></Image>
                </span>
                <span className='text-secondary md:text-[26px] text-[20px] font-medium'>Comforty</span>
            </div>
            </Link>
            <Link href='/cart'>
            <div className='flex items-center gap-3 bg-white px-5 py-3 rounded-lg overflow-hidden hover:bg-white/80'>
                <span><LuShoppingCart className='w-[22px] h-[22px]'/></span>
                <span>Cart</span>
                <span className='flex items-center justify-center w-5 h-5 bg-[#007580] text-white text-xs rounded-full'>2</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default logo