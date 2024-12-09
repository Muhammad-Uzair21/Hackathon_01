import React from 'react'
import Link from 'next/link'
import MobNav from './MobNav'

const Nav = () => {
  return (
    <div className='w-full border-b-2'>
        <div className='flex items-center justify-between py-5 md:py-7 m-auto w-[90%] text-sm text-dark'>
            <div className='flex md:hidden'><MobNav /></div>
            <div className='md:flex hidden'>
                <ul className='flex items-center gap-8'>
                    <li className='hover:text-primary'><Link href='/'>Home</Link></li>
                    <li><Link href='#shop' className='hover:text-primary'>Shop</Link></li>
                    <li><Link href='/products' className='hover:text-primary'>Product</Link></li>
                    <li><Link href='/' className='hover:text-primary'>Pages</Link></li>
                    <li><Link href='/about' className='hover:text-primary'>About</Link></li>
                </ul>
            </div>
            <div className='flex items-center gap-1'>
                <h2>Contact: <b>(808) 555-0111</b></h2>
            </div>
        </div>
    </div>
  )
}

export default Nav