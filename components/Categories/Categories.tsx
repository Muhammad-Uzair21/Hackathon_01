import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col gap-8 my-28'>
        <h2 className='text-accentBlack font-semibold text-[32px]'>Top Categories</h2>
        <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-3 items-center'>
            <CategoryCard image='/images/cat1.png' title='Wing Chair' products='3,584 Products'/>
            <CategoryCard image='/images/cat2.png' title='Wooden Chair' products='157 Products'/>
            <CategoryCard image='/images/cat3.png' title='Desk Chair' products='154 Products'/>
        </div>
    </div>
  )
}

export default Categories