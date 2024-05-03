import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import CuriosityPhotos from '../components/CuriosityPhotos';

const MarsPage = () => {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center h-full">
        <ReactTyped
          className="text-gradient-1 font-mono text-8xl p-2"
          strings={['Mars Rover Photos']}
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
          'A Journey Through the Red Dust: Latest Images from Mars Curiosity
          Rover'
        </p>
      </motion.div>
      <div>
        <CuriosityPhotos />
      </div>
    </div>
  );
};

export default MarsPage;
