import React from 'react'
import data from "../assests/timeline.json";
import "../styles/timeline.css";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox" id='tb'>
        {
          data.map((item, index) => (
            <TimelineItem heading={item.heading} text={item.text} index={index} key={item.heading} />
          ))
        }
      </div>
    </div>
  )
}
const TimelineItem = ({ heading, text, index }) =>
  <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"}`}>
    <div className='timeline-box-div'>
    <h2>{heading}</h2>
    {/* <p>{text}</p> */}
    </div>

  </div>


export default Timeline;