import React from 'react'
import ProductCards from '../Products/ProductCards'
import ProductCardSale from '../Products/ProductCardSale'


const OurProducts = () => {
  return (
    <div className='w-full py-28' id='shop'>
    <div className='w-[90%] m-auto flex items-center flex-col gap-14'>
        <h2 className='text-accentBlack text-[32px] font-semibold'>Our Products</h2>
        <div className='w-full flex flex-col  gap-8' >
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
        </div>
    </div>
    </div>
  )
}

export default OurProducts