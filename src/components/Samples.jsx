import React from 'react'
import serviceData from "../assests/serviceData.json";

const Samples = () => {
  return (
    <>
    <div id="samples">
        <div className="services-wrapper-main">
            <div className="service-heading">
                <h2>SAMPLES</h2>
            </div>
            <div className="services-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <ServiceCard serviceSrc={item.serviceUrl}/>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}
const ServiceCard = ({serviceSrc}) => (
    <div className="service-card-wrapper">
            <img className='service-image' src={serviceSrc} alt="Services" />
        <div className="info">
            <p>Bringing your ideas to life, one poster at a time</p>
            <button className="button-6" role="button">View More</button>
        </div>
    </div>
)

export default Samples