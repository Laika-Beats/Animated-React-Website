import React from "react";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import aboutImage from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us with any photo or video ideas. We have a team on standby to
          turn your dreams in to reality.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnimation}
          src={aboutImage}
          alt="Young man sitting in nature"
        />
      </Image>
    </About>
  );
};

export default AboutSection;
