import React from 'react'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa6'
import { IoHeartOutline } from 'react-icons/io5'
import { DeleteIcon } from 'lucide-react'
import { FiDelete } from 'react-icons/fi'
import { MdDelete, MdDeleteOutline } from 'react-icons/md'
import { RiDeleteBin2Line, RiDeleteBin3Line, RiDeleteBin4Line, RiDeleteBin5Line, RiDeleteBin6Line } from 'react-icons/ri'
interface CardProps{
    image:string
}

const CartCard:React.FC<CardProps> = ({image}) => {
  return (
    <div className='w-full flex gap-6 border-b-2 pb-8'>
        <div className='relative w-[150px] h-[150px]'>
        <Image src={image} alt='item' fill objectFit='cover'/>
        </div>
        <div className='flex flex-col gap-3 w-full'>
            <div className='flex flex-col md:flex-row items-start w-[90%] md:items-center justify-between text[#272343]'>
                <h2 className='text-[16px]'>Library Stool Chair</h2>
                <h2 className='text-[15px]'>MRP: $99</h2>
            </div>

            <span className='text-[#757575] text-[15px] flex flex-col gap-1 my-4'>
                <p>Ashen Slate/Cobalt Bliss</p>
                <span className='flex gap-16'>
                    <p>Size {" "} L</p>
                    <p>Quantity {" "} 1</p>
                </span>
            </span>

            <span className='text-[#111111] flex gap-3'>
                <IoHeartOutline className='w-6 h-6'/>
                <RiDeleteBin6Line className='w-6 h-6'/>
            </span>
        </div>
    </div>
  )
}

export default CartCard