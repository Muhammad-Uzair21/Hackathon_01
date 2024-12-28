import React from 'react'
import Link from 'next/link'
import { CgChevronDown } from 'react-icons/cg'
import { FaCheck } from 'react-icons/fa'
import { MdOutlineErrorOutline } from 'react-icons/md'

const top = () => {
  return (
    <div className='w-full bg-secondary py-3 flex items-center'>
        <div className='w-[90%] m-auto text-sm flex items-center flex-col md:flex-row gap-y-3 justify-between text-white font-light tracking-wider text-opacity-85'>
            <div className='flex items-center gap-2'>
                <span><FaCheck className='w-4 h-4'/></span>
                <p >Free shipping on all orders over $50</p>
            </div>
            <div className='flex items-center gap-5'>
                <span className='flex items-center gap-1'>
                    <span>Eng</span>
                    <span><CgChevronDown className='w-4 h-4'/></span>
                </span>

                <span className='hover:text-primary'><Link href="/faq">Faqs</Link></span>

                <span className='flex items-center gap-1'>
                    <span><MdOutlineErrorOutline className='w-5 h-5'/></span>
                    <span>Need Help</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default top