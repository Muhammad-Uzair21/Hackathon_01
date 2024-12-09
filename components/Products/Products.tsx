import React from 'react'
import ProductCards from './ProductCards'
import ProductCardSale from './ProductCardSale'

const Products = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-6 m-auto w-[90%]'>
            <h2 className='text-accentBlack font-semibold text-[32px]'>Featured Products</h2>
            
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center'>
                <ProductCards image='/images/whitechair.png' tag='New'/>
                <ProductCardSale image='/images/pinkchair.png'/>
                <ProductCards image='/images/orangeplastic.png'/>
                <ProductCards image='/images/whitesofa.png'/>
            </div>
        </div>
    </div>
  )
}

export default Products