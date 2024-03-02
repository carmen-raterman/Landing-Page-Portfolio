import React from 'react';
import Logo3 from "../Assets/Logo3.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="footer-wrapper" >
        <div className="footer-section-one" >
            <div className="footer-logo-container">
                <img src={Logo3} alt="" />
            </div>

            <div className="footer-icons">
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>

            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span> Help </span>
                    <span> Share </span>
                    <span> Careers </span>
                    <span> Testimonials </span>
                    <span> References </span>
                </div>

                <div className="footer-section-columns">
                    <span> 000-123-4567 </span>
                    <span> hello@harmonyga.com </span>
                    <span> press@harmonyga.com </span>
                    <span> contact@harmonyga.com </span>
                </div>

                <div className="footer-section-columns" >
                    <span> Terms & Conditions </span>
                    <span> Privacy Policy </span>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Footer