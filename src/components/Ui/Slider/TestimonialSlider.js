import React from 'react'
import Slider from 'react-slick'

import "../../styles.css/Slider.css"

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'



function TestimonialSlider() {
    
    const settings = {
          dots: true,
          autoplay: true,
          infinite: true,
          speed: 1000,
          autoplaySpeed: 3000,
          swipeToSlide: true,
          slidesToShow: 1,
          slidesToScroll: 1
    }

  return (
    <Slider {...settings}>
          <div className='review__text'>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
            
            <div className='slider-content d-flex align-items-center gap-3'>
                <img src= {ava01} alt= "ava01" className='w-25 rounded'/>
                <h6>John Doe</h6>
            </div>
          </div>
          <div className='review__text'>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
            
            <div className='slider-content d-flex align-items-center gap-3'>
                <img src= {ava02} alt= "ava02" className='w-25 rounded'/>
                <h6>Mitchel March</h6>
            </div>
          </div>
          <div className='review__text'>
            <p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor </p>
            
            <div className='slider-content d-flex align-items-center gap-3'>
                <img src= {ava03} alt= "ava03" className='w-25 rounded'/>
                <h6>Steven Crock</h6>
            </div>
          </div>
    </Slider>
  )
}

export default TestimonialSlider