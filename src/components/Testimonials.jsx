import React, { Fragment } from "react";
import "../styles/testimonials.css";
import testData from "../assests/testimony.json";
import { FaQuoteRight } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <Fragment>
      <div id="testimonials">
        <div className="testimonials-title">
          <Fade cascade damping={0.1} className="testimonials-title">
            Testimonials
          </Fade>
        </div>
        <div className="testimonials-wrapper">
          {testData.map((i, index) => (
            <Testimony
              desc={i.desc}
              name={i.name}
              designation={i.designation}
              key={index}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const Testimony = ({ desc, name, designation }) => (
  <div className="testimony">
    <div className="quote-icon">
      <FaQuoteRight />
    </div>
    <div className="testimony-description">
      <p>{desc}</p>
    </div>
    <div className="testimony-details">
      <p className="bold">{name}</p>
      <p>{designation}</p>
    </div>
  </div>
);

export default Testimonials;
