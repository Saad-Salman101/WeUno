/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from 'react'

const Product = ({mydata}) => {
    //  const [User,SetUser]  =useState(mydata)
    //     useEffect(() => {
    //     console.log(User.name)
    //   }, []);
   
//  console.log(mydata)  
   // Calculate class names based on rating
   const starClass = (index) => {
    return mydata && mydata.rating >= index ? 'text-yellow-500' : 'text-gray-400';
};



  return (
    mydata &&(
        <>
        <div className='border-[1px] border-gray-300 rounded-lg w-[334px] h-[393px]'>
        <img src={mydata ? mydata.image : " "} alt='' className=''/>
        <div className='flex flex-col justify-around h-[200px] items-start ml-5'>
            <h1 className=' underline text-[11px] tracking-[2px]'>{mydata.date}</h1>
            <h1 className=' font-black text-[18px] tracking-[2px]'>{mydata.title}</h1>
            <p className=' underline text-[11px] tracking-[2px]'>Read More</p>
        </div>
        </div>
        
    </>)
  );
}

export default Product;
