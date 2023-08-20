import React,{useEffect} from 'react'
import Slider from './Slider'
import data from '../Data/Section1Data.json'
import Product from './Product'
const Section = () => {
    

    // useEffect(() => {
    //     console.log(data)
    //   }, []);

    
  return (
    <div className='my-3'>
      <Slider>
      {data.listing.map((mydata, id) => (

<Product mydata={mydata} key={id}/>
))}
      </Slider>
    </div>
  )
}

export default Section
