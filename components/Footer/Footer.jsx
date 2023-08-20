/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-[#0065AB] grid grid-cols-4'>
        <div className=' col-span-1  flex items-end flex-col'>
            <img src='/assets/Footer/Logo.png' alt='' className='mt-8'/>
            <p className=' text-gray-300 w-[196px] mt-8'>© Copyright 2020 Servaid Pharmacy.
                All rights reserved.</p>
        </div>
        <div className=' col-span-1 text-white flex flex-col items-center justify-center'>
            <h1 className=' font-semibold text-[15px] mb-4'>Navigation</h1>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1'>BRAND STORY</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Shop</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Store Locater</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Blogs</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Contact Us</h2>
            </Link>
        </div>
        <div className=' col-span-1 text-white flex flex-col items-center justify-center'>
            <h1 className=' font-semibold text-[15px] mb-4'>Categories</h1>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Medicine</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>CONSUMER</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Personal Care</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Foods And Beverages</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Nutrition And Supplements</h2>
            </Link>
            <Link href="/">
            <h2 className='text-[13px] font-normal tracking-[2px] my-1 cursor-pointer'>Devices And Appliances</h2>
            </Link>
        </div>
        <div className=' col-span-1 text-white flex flex-col items-center justify-center'>
            <h1 className=' font-semibold text-[15px] mb-4'>Support</h1>
            <h2 className='text-[13px] font-normal tracking-[2px] my-1'>Privacy Policy</h2>
            <h2 className='text-[13px] font-normal tracking-[2px] my-1'>Terms Of Service</h2>
            <h1 className=' font-semibold text-[15px] mt-6 mb-2'>Find us on</h1>
            <div className='flex flex-row'>
            <img src='/assets/Footer/Fb.png' alt='' className='mx-2'/>
            <img src='/assets/Footer/Insta.png' alt='' className='mx-2'/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
