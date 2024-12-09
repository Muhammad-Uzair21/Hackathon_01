import Newsletter from '@/components/Newsletter/Newsletter'
import ProductCards from '@/components/Products/ProductCards'
import ProductCardSale from '@/components/Products/ProductCardSale'
import React from 'react'

const page = () => {
  return (
    <div className='w-full mt-14'>
    <div className='w-[90%] m-auto flex flex-col gap-10'>
        <h2 className='text-accentBlack text-[32px] font-semibold'>All Products</h2>
        <div className='w-full flex flex-col  gap-20' >
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center'>
                <ProductCards image='/images/whitechair.png' tag='New'/>
                <ProductCardSale image='/images/pinkchair.png'/>
                <ProductCards image='/images/orangeplastic.png'/>
                <ProductCards image='/images/whitesofa.png'/>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center'>
                <ProductCards image='/images/cat1.png' tag='New'/>
                <ProductCardSale image='/images/Gridimg4.png'/>
                <ProductCards image='/images/blackchair.png'/>
                <ProductCards image='/images/Gridimg5.png'/>
            </div>
            
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center'>
                <ProductCards image='/images/cat1.png' tag='New'/>
                <ProductCardSale image='/images/pinkchair.png'/>
                <ProductCards image='/images/Gridimg1.png'/>
                <ProductCards image='/images/cat3.png'/>
            </div>
        </div>
    </div>
    <Newsletter />
    </div>
  )
}

export default page