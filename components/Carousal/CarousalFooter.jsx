/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../Section1/Product'

const CarousalFooter = () => {
  return (
    <div className=' bg-[#0065AB] w-full  h-[83px] flex justify-center items-center '>
      
      <div className=' text-[10px] md:text-[14px] text-white h-[60px] flex justify-center items-center border-r-2 border-white px-4'>
        <img src='/assets/CarousalFooter/Shield.png' alt='' className='mx-2 md:h-[53px] h-[40px]'/>
      Genuine Medicines
      </div>
      <div className=' text-[10px] md:text-[14px] text-white h-[60px]  flex justify-center items-center border-r-2 border-white px-4'>
        <img src='/assets/CarousalFooter/Shield.png' alt='' className='mx-2 md:h-[53px] h-[40px]'/>
       timely Delivery
      </div>
      <div className=' text-[10px] md:text-[14px] text-white h-[60px] flex justify-center items-center border-r-2 border-white px-4'>
        <img src='/assets/CarousalFooter/Shield.png' alt='' className='mx-2 md:h-[53px] h-[40px]'/>
        Easy Returns & Refunds
      </div>
      <div className=' text-[10px] md:text-[14px] text-white h-[60px] flex justify-center items-center border-r-2 border-white px-4'>
        <img src='/assets/CarousalFooter/Shield.png' alt='' className='mx-2 md:h-[53px] h-[40px]'/>
        Secure Payments
      </div>

      <div className=''>
        <Product/>

      </div>
    </div>
  )
}

export default CarousalFooter
