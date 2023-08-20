import React,{useEffect} from 'react'
import Slider from './Slider'
import data from '../Data/Section7Data.json'
import Product from './Product'
const Section7 = () => {
    

    // useEffect(() => {
    //     console.log(data)
    //   }, []);

    
  return (
    <div>
      <Slider>
      {data.listing.map((mydata, id) => (

<Product mydata={mydata} key={id}/>
))}
      </Slider>
    </div>
  )
}

export default Section7
