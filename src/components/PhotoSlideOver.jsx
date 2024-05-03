import React from 'react';

const PhotoSlideOver = ({ photo, onClose, roverStatus, cameraInfo }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-900 bg-opacity-75 flex">
      <div className="relative mx-auto max-w-3xl my-auto">
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 -mt-8 -mr-8 p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
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
          <div className="p-8">
            <img
              src={photo.img_src}
              alt="Taken by Curiosity Rover on Mars"
              className="object-cover object-center rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Name: {photo.rover.name}
              </h3>
              <p className="text-gray-600">Rover Status: {roverStatus}</p>
              <p className="text-gray-600">Camera: {cameraInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideOver;
