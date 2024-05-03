import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import img1 from '../assets/space1.png';
import planet1 from '../assets/planet1.png';
import planet2 from '../assets/planet2.png';
import planet3 from '../assets/planet3.png';

const Hero = () => {
  const image1Variants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [-10, 20, -10],
      y: [20, -10, 20],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const image2Variants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [5, -5, 5],
      y: [-5, 5, -5],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const image3Variants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [1, -10, 1],
      y: [-10, 1, -10],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const image4Variants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: [-7, 1, -7],
      y: [1, -7, 1],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div className="text-white font-mono">
      <div className="mt-[-96px] w-full h-screen mx-auto flex flex-row items-center justify-between text-center lg:text-left">
        <div className="lg:w-1/3 flex justify-start p-8">
          <motion.img
            src={img1}
            alt="Left"
            className="w-full h-auto lg:max-w-md mb-8 lg:mb-0"
            variants={image1Variants}
            initial="initial"
            animate="animate"
            style={{ scaleX: -1, rotate: -10 }}
          />
        </div>
        <div className="lg:w-2/3 flex flex-col justify-center">
          <div className="mb-8 mx-5">
            <p className="text-white text-3xl font-thin mb-4">
              This is a Simple Web Application with NASA APIs
            </p>
            <ReactTyped
              className="text-gradient-1 hero-list-item px-20"
              strings={[
                'Astronomy Picture of the Day',
                'Mars Rover Photos',
                'Earth Polychromatic Imaging Camera',
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-end p-8 hidden lg:flex">
          <motion.img
            src={planet2}
            alt="Right1"
            className="w-20 h-20 lg:max-w-md"
            variants={image3Variants}
            initial="initial"
            animate="animate"
          />
          <motion.img
            src={planet1}
            alt="Right2"
            className="w-full h-auto lg:max-w-md mt-20"
            variants={image2Variants}
            initial="initial"
            animate="animate"
          />
          <motion.img
            src={planet3}
            alt="Right3"
            className="w-32 h-32 lg:max-w-md mt-10"
            variants={image4Variants}
            initial="initial"
            animate="animate"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
