import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import img1 from "../asserts/image1.jpg";
import img2 from "../asserts/image2.jpg";
import img3 from "../asserts/image3.jpg";
import img4 from "../asserts/image4.jpg";

const Services = () => {
  return (
    <div className='services' id='services' >

     <Carousel  infiniteLoop autoPlay showStatus ={false} showArrows={false} interval={1000} showThumbs={false}   >
        
       <div>
        <img src={img1} alt="image1" />
       </div>


       <div>
        <img src={img2} alt="image1" />
       </div>


       <div>
        <img src={img3} alt="image1" />
       </div>

       <div>
        <img src={img4} alt="image1" />
       </div>


     </Carousel>



    </div>
  )
} 

export default Services;