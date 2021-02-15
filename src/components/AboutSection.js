import React from "react";
import aboutImage from "../images/aboutImage.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            you <span>dreams</span> come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <p>
          Contact us with any photo or video ideas. We have a team on standby to
          turn your dreams in to reality.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={aboutImage} alt="Young man sitting in nature" />
      </div>
    </div>
  );
};

export default AboutSection;
