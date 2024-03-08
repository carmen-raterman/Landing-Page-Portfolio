import React from 'react';
import ProfilePic from "../Assets/user-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading"> Testimonials </p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          See what Harmony Access Health allies are saying about providers near you.
        </p>
      </div>

      <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            

            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>

            <h2> Carmen Sophia </h2>
            <p style={{ fontSize: 'smaller', color: 'gray' }} > Credit: Shutterstock </p>
      </div>
    </div>
  );
}

export default Testimonials