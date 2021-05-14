import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './imgslider.css';

function ImgSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
        
        
      };
    return (
    <Slider {...settings}>
      <div className='slider'>
        <a>
        <img className='slider-image' src={process.env.PUBLIC_URL+'images/slider-badag.jpg'} alt="//"/>
        </a>
      </div>
      <div className='slider'>
        <a href="">
        <img className='slider-image' src={process.env.PUBLIC_URL+'images/slider-badging.jpg'} alt="//"/>
        </a>
      </div>
      <div className='slider'>
          <a href="">
        <img className='slider-image' src={process.env.PUBLIC_URL+'images/slider-scale.jpg'} alt="//"/>
        </a>
      </div>
      <div className='slider'>
          <a href="">
        <img className='slider-image' src={process.env.PUBLIC_URL+'images/slider-scales.jpg'} alt="//"/>
        </a>
      </div>
    </Slider>
    )
}

export default ImgSlider
