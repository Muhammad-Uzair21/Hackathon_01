import React from 'react'
import Image from 'next/image'

const ImageGrid = () => {
  return (
    <div className='w-[90%] m-auto my-12 h-[648px]'>
        <div className='w-full h-full flex items-center gap-2'>
            <h2 className='[writing-mode:vertical-lr] text-4xl'>Explore new and popular styles</h2>
            <div className='grid w-full gap-4 h-full grid-cols-2 md:grid-cols-4 items-center md:grid-rows-2'>
                <div className='col-span-2 row-span-2 relative h-full w-full'>
                    <Image src='/images/Gridimg1.png' alt='' fill objectFit='cover'/>
                </div>
                <div className='col-span-1 row-span-1 relative h-full w-full'>
                    <Image src='/images/Gridimg2.png' alt='' fill objectFit='cover'/>
                </div>
                <div className='col-span-1 row-span-1 relative h-full w-full'>
                    <Image src='/images/Gridimg3.png' alt='' fill objectFit='cover'/>
                </div>
                <div className='col-span-1 row-span-1 relative h-full w-full'>
                    <Image src='/images/Gridimg4.png' alt='' fill objectFit='cover'/>
                </div>
                <div className='col-span-1 row-span-1 relative h-full w-full'>
                    <Image src='/images/Gridimg5.png' alt='' fill objectFit='cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageGrid