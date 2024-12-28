import CartCard from '@/components/CartCard/CartCard'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <div className='w-[90%] m-auto py-14'>
        <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-16'>
          
          <div className=' flex flex-col gap-8 col-span-2'>
            <h2 className='font-medium text-[22px] text-[#111111]'>Bag</h2>
            <CartCard image='/images/orangeplastic.png'/>
            <CartCard image='/images/cat1.png'/>
            
            
            <div className='col-span-1'>
            </div>
          </div>

    
          <div className='w-full col-span-2 lg:col-span-1'>
            <div className='w-[95%] flex flex-col gap-8'>
              <h2 className='font-medium text-[22px] text-[#111111]'>Summary</h2>

              <div className='w-full flex flex-col text-[#111111] text-sm gap-5'>
                <div className='flex items-center justify-between'>
                  <span>Subtotal</span>
                  <span>$198.00</span>
                </div>
                
                <div className='flex items-center justify-between'>
                  <span>Estimated Delivery & handling</span>
                  <span>Free</span>
                </div>
                
                <div className='flex items-center border-y-2 justify-between w-full py-5'>
                  <span>Total</span>
                  <span>$198.00</span>
                </div>
              </div>

              <button className='bg-primary hover:bg-[#0286ae] text-center w-full py-5 rounded-full text-white text-[15px]'>Member Checkout</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page