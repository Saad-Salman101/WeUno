/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TopBrands = () => {
  return (
<>
    <div className='grid grid-cols-12 gap-4 h-[246px] '>
        <div className='col-span-12 md:col-span-4 flex flex-col justify-center items-center'>
            <h2 className=' text-[26px] text-[#0065AB] w-full text-left ml-8'>Our Top Brands</h2>
            <p className='mx-5 mt-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism</p>
        </div>
        <div className='md:col-span-2  col-span-3  flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section5/Gsk.png' alt='' />
                

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3   flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section5/Getz.png' alt='' />
                

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3   flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section5/Titlis.png' alt='' />
                

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3  flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section5/Boots.png' alt='' />
                

            </div>
           
        </div>
    </div>
</>

  )
}

export default TopBrands
