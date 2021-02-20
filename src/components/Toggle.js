import { motion } from "framer-motion";
import React, { useState } from "react";

export const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <motion.div
        Layout
        className="question"
        onClick={() => setToggle(!toggle)}
      >
        <motion.h4 Layout>{title}</motion.h4>
        {toggle ? children : ""}
      </motion.div>
      <div className="faq-line" />
    </div>
  );
};
