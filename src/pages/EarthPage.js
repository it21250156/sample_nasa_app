import React from 'react';
import { ReactTyped } from 'react-typed';
import EpicEarthImage from '../components/EpicEarthImage';
import { motion } from 'framer-motion';

const EarthPage = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center h-full">
        <ReactTyped
          className="text-gradient-1 font-mono text-8xl p-2"
          strings={['EPIC']}
          typeSpeed={180}
        />
      </div>
      <motion.div
        className="flex justify-center items-center h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p className="text-gradient-1 font-extrabold font-mono text-3xl">
          "See Earth with new eyes. Dive into the 'Earth Polychromatic Imaging
          Camera' Image Gallery"
        </p>
      </motion.div>
      <EpicEarthImage />
    </div>
  );
};

export default EarthPage;
