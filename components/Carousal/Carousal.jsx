import React from 'react'
import CarousalHeader from './CarousalHeader'
import CarousalFooter from './CarousalFooter'
import Section from '../Section1/Section'

const Carousal = () => {
  return (
    <div>
      <CarousalHeader/>
      <div className=' relative bg-[url("/assets/Carousal.png")] w-full h-[330px]'>
        
        <div className='absolute md:left-24 left-5 top-5 bg-[#0065AB] border-blue-800 opacity-70 w-[300px] md:w-[495px] h-[245px] flex flex-col justify-center items-center text-center'>
        <h1 className=' text-white text-[20px] md:text-[29px] font-black'>
        The store you can depend <br/> on!
        </h1>
        <p className=' text-white text-[14px] mx-6  text-center w-full '>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>
         sed diam nonummy nibh euism
        </p>

        <div>
        <input 
        placeholder='Search health products and medicines..'
        className=' bg-[#F0F0F0] md:w-[320px] w-[200px] h-[40px] my-2'
        />
        <button className=' font-semibold text-[13px] text-white my-2 bg-[#D90010] w-[120px] h-[42px] rounded-lg'>
        Get Started
        </button>
        </div>

        </div>

      </div>

      <CarousalFooter/>
      
    </div>
  )
}

export default Carousal
