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
        <div className='border-2 border-gray-600 rounded-lg w-[175px] h-[217px]'>
        <img src={mydata ? mydata.image : " "} alt=''/>
        </div>
        
        <div className='w-[175px]'>
        <div>
            <h2 className='text-[15px] mt-5'>
            {mydata.name} 
            </h2>
            <p className='font-light text-[10px]'>{mydata ? mydata.company : 'Not Available'}</p>
            <h1 className='text-[#0065AB] text-[13px] font-black'>RS {mydata ? mydata.price : 'Not Available'}</h1>
            <div className='flex'> 
                <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" className="hidden" />
                    <label htmlFor="star5" className={`cursor-pointer ${starClass(1)}`}>&#9733;</label>
                    <input type="radio" id="star4" name="rating" value="4" className="hidden" />
                    <label htmlFor="star4" className={`cursor-pointer ${starClass(2)}`}>&#9733;</label>
                    <input type="radio" id="star3" name="rating" value="3" className="hidden" />
                    <label htmlFor="star3" className={`cursor-pointer ${starClass(3)}`}>&#9733;</label>
                    <input type="radio" id="star2" name="rating" value="2" className="hidden" />
                    <label htmlFor="star2" className={`cursor-pointer ${starClass(4)}`}>&#9733;</label>
                    <input type="radio" id="star1" name="rating" value="1" className="hidden" />
                    <label htmlFor="star1" className={`cursor-pointer ${starClass(5)}`}>&#9733;</label>
                </div>
                <p className='text-[8px] font-light flex justify-center items-center ml-5'>10 {mydata ? mydata.reviews : 'Not Available'}</p>
            </div>
        </div>
    </div>
    </>)
  );
}

export default Product;
