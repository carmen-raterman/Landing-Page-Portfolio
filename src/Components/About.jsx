import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" >
        <div className="about-background-image-container" >
            <img src={AboutBackground} alt="" />
        </div>

        <div className="about-section-image-container" >
            <img src={AboutBackgroundImage} alt="" />
            <p style={{ fontSize: 'smaller', color: 'gray' }} > Credit: Getty Images </p>
        </div>

        <div className="about-section-text-container" >
            <p className="primary-subheading" > About </p>
            <h1 className="primary-heading">
                Holding the Healthcare System Accountable
            </h1>

            <p className="primary-text">
                Despite being the top global spender on healthcare, the United States has witnessed an alarming rise in maternal mortality rates <sup><a href="https://www.commonwealthfund.org/blog/2022/us-maternal-mortality-crisis-continues-worsen-international-comparison#:~:text=New%20international%20data%20show%20the,most%20other%20high%2Dincome%20countries." target="_blank" rel="noopener noreferrer">[1]</a></sup>.
            </p>

            <p className="primary-text">
                Georgia stands out with one of the highest maternal mortality rates in the nation, disproportionately affecting Black women <sup><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8679596/" target="_blank" rel="noopener noreferrer">[2]</a></sup>. 
            </p>

            <p className="primary-text">
                Harmony Access Health is dedicated to combating these disparities by providing a platform for women and mothers of color in Georgia to review healthcare practitioners and advocate for culturally-responsive care. Your reviews can save lives!
            </p>

            <div className="about-buttons-container" >
                <button className="secondary-button" > Learn More </button>
                <button className="watch-video-button" >
                    <a href="https://www.youtube.com/watch?v=3e8QO6pT4Rw" target="_blank" rel="noopener noreferrer" className="watch-video-button" >
                        <BsFillPlayCircleFill /> Watch Video
                    </a>
                </button>
            </div>
        </div>

    </div>
  );
};

export default About;