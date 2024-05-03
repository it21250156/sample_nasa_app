import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EpicEarthImage = () => {
  const [imageDataList, setImageDataList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const epicApiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

    fetch(epicApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch EPIC imagery');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API Response:', data); // Log entire API response for debugging
        if (data && data.length > 0) {
          // Take the first 4 images (or less if data.length < 4)
          const newData = data.slice(0, 4);
          setImageDataList(newData);
        } else {
          throw new Error('No EPIC imagery available');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (imageDataList.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="spinner"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    );
  }

  console.log('Image Data List:', imageDataList); // Log entire imageDataList for debugging

  return (
    <div className="earth-image-container flex justify-center flex-wrap">
      {imageDataList.map((imageData, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-10 m-10 rounded-3xl max-w-fit"
        >
          <div className="mx-auto grid max-w-full grid-cols-1 items-center gap-x-4 gap-y-2 px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2">
            {index % 2 === 0 ? (
              // Image on the left, caption and date on the right
              <>
                <motion.div
                  className="p-4 text-right"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <h2 className="text-lg font-mono mt-2 text-white">
                    {imageData.caption}
                  </h2>
                  <p className="text-slate-400 italic">{imageData.date}</p>
                </motion.div>
                <motion.div
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <img
                    src={`https://epic.gsfc.nasa.gov/archive/natural/${imageData.date.slice(
                      0,
                      4
                    )}/${imageData.date.slice(5, 7)}/${imageData.date.slice(
                      8,
                      10
                    )}/png/${imageData.image}.png`}
                    alt="EPIC Earth Imagery"
                    className="rounded-lg bg-gray-100 max-w-80 h-auto"
                  />
                </motion.div>
              </>
            ) : (
              // Image on the right, caption and date on the left
              <>
                <motion.div
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <img
                    src={`https://epic.gsfc.nasa.gov/archive/natural/${imageData.date.slice(
                      0,
                      4
                    )}/${imageData.date.slice(5, 7)}/${imageData.date.slice(
                      8,
                      10
                    )}/png/${imageData.image}.png`}
                    alt="EPIC Earth Imagery"
                    className="rounded-lg bg-gray-100 max-w-80 h-auto"
                  />
                </motion.div>
                <motion.div
                  className="p-4 text-left"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <h2 className="text-lg font-mono mt-2 text-white">
                    {imageData.caption}
                  </h2>
                  <p className="text-slate-400 italic">{imageData.date}</p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpicEarthImage;
