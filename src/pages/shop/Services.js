import React from 'react'
import service1 from '../../banner/service1.png'
import service2 from '../../banner/service2.png'
import service3 from '../../banner/service3.png'
import service4 from '../../banner/service4.png'

const Services = () => {
  return (
    <div>
        <div className="services-card">
           <h1 className="service-title">Our services</h1>
            <div className="service-img">
            <img src={service1} alt="img"/>
            <img src={service2} alt="img"/>
            <img src={service3} alt="img"/>
            <img src={service4} alt="img"/>
            </div>
        </div>
    </div>
  )
}

export default Services