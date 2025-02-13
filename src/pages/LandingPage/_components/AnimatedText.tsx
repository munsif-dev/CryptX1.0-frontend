import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string; // className is optional
  type?: string; // type is optional, but you can add a default value if needed
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  type = "div",
}) => {
  return (
    <div className={`${className}`}>
      <motion.div
        className={`inline-block`}
        variants={quote}
        initial={"initial"}
        animate={"animate"}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedText;
