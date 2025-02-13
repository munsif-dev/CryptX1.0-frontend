"use client";
import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom for routing
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <motion.div
          className="w-1/2 flex items-center justify-center mt-10 pr-8"
          whileHover={{ scale: 1.04, rotate: "0.5deg" }}
          whileTap={{ scale: 0.95, rotate: "-1deg" }}
          transition={{ duration: 0.125, ease: "easeInOut" }}
        >
          <img
            width={526}
            height={576}
            alt="Hero Image"
            src="/Hero_Image.png"
          />
        </motion.div>
        <div className="w-1/2 flex flex-col space-y-3">
          <AnimatedText
            type="h1"
            text="Transforming Grading Into a Breeze!"
            className="w-[845px] text-[#894799] text-[80px] font-bold leading-[90px]"
          />
          <p className="w-[600px] text-[#894799] text-lg font-medium font-['Poppins'] leading-[30px]">
            {`"Let's make grading more organized and effortless with our
            streamlined platform, featuring the latest tools for efficient
            assessment."`}
          </p>

          <div className="flex items-center self-start">
            <Link
              to="/grading" // Using react-router-dom's Link
              className="flex items-center bg-light-2 text-pink-50 py-2 px-6 rounded-lg text-lg border-2 border-solid border-red font-semibold mr-4 hover:bg-light-3 hover:text-dark-1 hover:border-dark-2"
            >
              Get Started
            </Link>
            <a
              href="https://youtu.be/9Gv2Xtb9NGc"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-lg font-medium capitalize text-light-2 underline"
            >
              View Demo
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-20 pt-16">
        <div className="w-[1194px] h-[162px] relative">
          <div className="left-[113px] top-0 absolute text-center text-[#894799] text-[40px] font-bold font-['Poppins']">
            More than 2K Lecturers use AutoGradePro From
          </div>
          <div className="w-[1194px] h-[102px] pl-5 pr-[19.09px] pt-[31px] pb-[21px] left-0 top-[60px] absolute justify-center items-start gap-[93.03px] inline-flex">
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
            <img
              className="w-[114.28px] h-[50px]"
              src="https://via.placeholder.com/114x50"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
