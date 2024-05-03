import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PhotoSlideOver from './PhotoSlideOver';

const CuriosityPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const apiKey = process.env.REACT_APP_NASA_API_KEY;
      const roverName = 'curiosity';
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=2&api_key=${apiKey}&per_page=8`; // Adjust per_page to 8

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        if (data.photos.length > 0) {
          setPhotos(data.photos.slice(0, 16)); // Limit photos to the first 8
        } else {
          setError('No photos available');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchRoverPhotos();
  }, []);

  const openSlideOver = (photo) => {
    setSelectedPhoto(photo);
    setIsSlideOverOpen(true);
  };

  const closeSlideOver = () => {
    setSelectedPhoto(null);
    setIsSlideOverOpen(false);
  };

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {error && <p>Error: {error}</p>}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              className="group relative border border-transparent rounded-md hover:border-white cursor-pointer"
              onClick={() => openSlideOver(photo)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={photo.img_src}
                  alt="Taken by Curiosity Rover on Mars"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full text-black font-mono"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {isSlideOverOpen && (
        <PhotoSlideOver
          photo={selectedPhoto}
          onClose={closeSlideOver}
          roverStatus={`${selectedPhoto.rover.status}`}
          cameraInfo={`${selectedPhoto.camera.full_name}`}
        />
      )}
      {isSlideOverOpen && (
        <button
          onClick={closeSlideOver}
          className="fixed top-5 right-5 p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 z-50"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default CuriosityPhotos;
