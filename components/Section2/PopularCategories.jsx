/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PopularCategories = () => {
  return (
<>
    <div className='grid grid-cols-12 gap-4 h-[246px] bg-[#F4F4F4]'>
        <div className='col-span-12 md:col-span-4 flex flex-col justify-center items-center'>
            <div className='text-[11px] tracking-[2px] mr-24'>Explore</div>
            <h2 className=' text-[26px] text-[#0065AB]'>Popular Categories</h2>
        </div>
        <div className='md:col-span-2  col-span-3  flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section2/Medicine.png' alt='' />
                <h2 className='text-[17px] mt-3'>Medicine</h2>

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3   flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section2/Consumer.png' alt='' />
                <h2 className='text-[17px] mt-3'>Consumer</h2>

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3   flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section2/HealthCare.png' alt='' />
                <h2 className='text-[17px] mt-3'>HealthCare</h2>

            </div>
           
        </div>
        <div className='md:col-span-2  col-span-3  flex items-center justify-center'>
            <div className='w-[173px] h-[163px] border-2 border-graye-500 rounded-lg flex justify-center items-center flex-col'>
                <img src='/assets/Section2/Surgical.png' alt='' />
                <h2 className='text-[17px] mt-3'>Surgical</h2>

            </div>
           
        </div>
    </div>
</>

  )
}

export default PopularCategories
