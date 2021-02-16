import React from "react";
import { About, Description, Image, Hide } from "../styles";
import aboutImage from "../images/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Hide>
          <h2>We work to make</h2>
        </Hide>
        <Hide>
          <h2>
            your <span>dreams</span> come
          </h2>
        </Hide>
        <Hide>
          <h2>true.</h2>
        </Hide>
        <p>
          Contact us with any photo or video ideas. We have a team on standby to
          turn your dreams in to reality.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={aboutImage} alt="Young man sitting in nature" />
      </Image>
    </About>
  );
};

export default AboutSection;
