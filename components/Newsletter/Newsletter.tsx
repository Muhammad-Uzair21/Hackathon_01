import React from 'react'
import NewsCards from './NewsCards'

const Newsletter = () => {
  return (
    <div className='bg-light w-full mt-32'>
        <div className='w-[90%] m-auto py-20 flex flex-col gap-14 items-center'>
            <div>
                <h2 className='lg:text-5xl font-medium md:text-4xl text-2xl text-center'>Or Subscribe To The Newsletter</h2>
            </div>

            <div className='flex items-center justify-between gap-6 lg:w-[65%] md:w-[75%] w-[80%]'>
                <input type="text" placeholder="Email Address...." className='text-sm text-dark w-full bg-transparent py-2 px-3 border-b-2 border-black'/>
                <button className='text-sm text-dark bg-transparent py-2 px-3 border-b-2 border-black'>SUBMIT</button>
            </div>

            <div>
                <h2 className='lg:text-5xl font-medium md:text-4xl text-2xl text-center'>Follow products and discounts on Instagram</h2>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-6 '>
                <NewsCards image='/images/cat2.png'/>
                <NewsCards image='/images/cat1.png'/>
                <NewsCards image='/images/pinkchair.png'/>
                <NewsCards image='/images/whitechair.png'/>
                <NewsCards image='/images/Gridimg1.png'/>
                <NewsCards image='/images/cat3.png'/>
            </div>

        </div>
    </div>
  )
}

export default Newsletter