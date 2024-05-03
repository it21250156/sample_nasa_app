import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const ApodContent = ({ data }) => {
  return (
    <div className="mx-10 my-5">
      <ReactTyped
        className="text-center text-3xl font-mono"
        strings={[data.title]}
        typeSpeed={60}
      />
      <p></p>
      <ReactTyped
        className="text-center text-sm font-mono italic"
        strings={[data.date]}
        typeSpeed={60}
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="apodMediaContainer"
      >
        {data.media_type === 'image' ? (
          <img
            src={data.hdurl}
            alt={data.title || 'Astronomy Picture of the Day'}
            className="apodImg"
          />
        ) : (
          <iframe
            src={data.url}
            title={data.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-40"
      >
        <p className="text-justify text-lg font-mono text-shadow-black-1">
          {data.explanation}
        </p>
      </motion.div>
    </div>
  );
};

export default ApodContent;
