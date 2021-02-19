import React from "react";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import aboutImage from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 v>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
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
