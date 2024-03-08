import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container" >
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section" >
          <h1 className="primary-heading">
            Advocating for Health Equity in Georgia
          </h1>

          <p className="primary-text" >
            We empower women and mothers to review healthcare practitioners, fostering accountability and ensuring equitable healthcare access for all.
          </p>

          <p className="primary-text" >
            Together, we can pave the way for a healthier and more equitable future for Women of Color in Georgia.
          </p>

          <button className="secondary-button" >
            Leave a Review <FiArrowRight />
          </button>
        </div>

        <div className="home-image-section" >
          <img src={BannerImage} alt="" />
          <p style={{ fontSize: 'smaller', color: 'gray' }} > Credit: Canva.com </p>
        </div>
      </div>
    </div>
  );
};

export default Home;