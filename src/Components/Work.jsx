import React from 'react';
import ReviewsImage2 from "../Assets/reviews-image2.png"
import InteractImage from "../Assets/interact-image.png";
import JusticeImage from "../Assets/justice-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: ReviewsImage2,
            title: "Leave A Review",
            text: "Review any healthcare practitioner you've seen in GA, and if they made you feel safe, heard, and advocated for.",
        },
        {
          image: InteractImage,
          title: "Promote Accountability",
          text: "Read and interact with reviews that other women of color have left on practitioners near you.",
        },
        {
          image: JusticeImage,
          title: "Advocate Awareness",
          text: "Access resources to learn more and raise awareness regarding this public health issue.",
        },
    ];

  return (
    <div className="work-section-wrapper" >
        <div className="work-section-top" >
            <p className="primary-subheading" > Work </p>
            <h1 className="primary-heading" > How It Works </h1>
            <p className="primary-text" >
              Explore the options available on our website to address maternal mortality for women of color in Georgia:
            </p>
        </div>

        <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style={{ width: '150px', height: '150px' }}/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work;