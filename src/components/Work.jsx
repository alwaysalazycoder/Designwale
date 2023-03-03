import React from 'react'
import "../styles/work.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assests/data.json";
import datas from "../assests/post.jpg";

const Work = () => {
    return (

        <div className='work' id='work'>
            <h2>WORK</h2>
            <div className='work-imageslider-wrapper'>
                <div className='imageSlider'>
                    <Carousel className='workCarousel'
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        interval={2000}
                        infiniteLoop={true}
                        autoPlay={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        emulateTouch={false}
                    >
                        {
                            data.map(i => (
                                <div key={i.title} className="workItem">
                                    <img src={datas} alt={i.title} className="poster-imageincarousel" />
                                    <div className="work-carousel-details">
                                        <h3>{i.title}</h3>
                                        <p>{i.description}</p>
                                        <button className='work-go-button'><a href='#home'> View demo</a></button>
                                        
                                    </div>

                                </div>
                            ))
                        }

                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Work