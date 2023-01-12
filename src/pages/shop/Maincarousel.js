import React from 'react'
import { Carousel } from 'antd';
import carousel1 from '../../images/carousel1.jpg'
import carousel2 from '../../images/carousel2.jpg'
import carousel3 from '../../images/carousel3.jpg'
import carousel4 from '../../images/carousel4.jpg'
import carousel5 from '../../images/carousel5.jpg'
import carousel6 from '../../images/carousel6.jpg'
import carousel7 from '../../images/carousel7.jpg'
import carousel8 from '../../images/carousel8.jpg'

const Maincarousel = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        border:'2px solid black'
      };
  return (
    <div className="main-carousel">

   
    <Carousel autoplay>
    <div className="first-carousel">
      <img src={carousel1} alt="img" className="first-carousel-img"/>
    </div>
    <div className="second-carousel">
      <img src={carousel2} alt="img" className="second-carousel-img"/>
    </div>
    <div className="third-carousel">
      <img src={carousel3} alt="img" className="third-carousel-img"/>
    </div>
    <div className="fourth-carousel">
      <img src={carousel4} alt="img" className="fourth-carousel-img"/>
    </div>
    <div className="fifth-carousel">
      <img src={carousel5} alt="img" className="fifth-carousel-img"/>
    </div>
    <div className="sixth-carousel">
      <img src={carousel6} alt="img" className="sixth-carousel-img"/>
    </div>
    <div className="seventh-carousel">
      <img src={carousel7} alt="img" className="seventh-carousel-img"/>
    </div>
    <div className="eighth-carousel">
      <img src={carousel8} alt="img" className="eighth-carousel-img"/>
    </div>
  </Carousel>

    </div>
  )
}

export default Maincarousel