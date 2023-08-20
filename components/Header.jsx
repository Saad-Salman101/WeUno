/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <div className='grid grid-cols-12 py-4'>
        <div className='col-span-4 md:col-span-2 flex justify-center'>
    <img className=' ' src='/assets/MainLogo.png' alt=''/>
    </div>
    <div className=' col-span-8 md:col-span-5  flex justify-evenly items-center'>
    <Link href="/">
    <div> BRAND STORY</div>
    </Link>
    <Link href="/">
    <div> Store Locator </div>
    </Link>
    <Link href="/">
    <div> Blogs</div>
    </Link>
    <Link href="/">
    <div>Contact Us</div>
    </Link>
    </div>
    <div className='col-span-8 md:col-span-3  flex justify-center items-center'>
        <div className='relative'>
        <input 
        placeholder='Search for health products nd medicines..' 
        className=' lg:w-[346px] bg-gray-200 w-[190px] rounded-md mx-2 p-3'
        />
        <img className='  absolute right-2 top-3' src='/assets/Search.png' alt=''/>
        </div>
        
    </div>
    <div className='col-span-4 md:col-span-2  flex justify-items-start items-center'>
    <img className=' right-2 top-1 mx-5' src='/assets/ShoppingCart.png' alt=''/>
    <img className=' right-2 top-1' src='/assets/AccountSignIn.png' alt=''/>
    </div >
    </div>

    </>
  )
}

export default Header
