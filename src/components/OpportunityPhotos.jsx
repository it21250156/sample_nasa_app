import React, { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

const OpportunityPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const apiKey = process.env.REACT_APP_NASA_API_KEY;
      const roverName = 'opportunity';
      const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=2&api_key=${apiKey}&per_page=5`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        if (data.photos.length > 0) {
          setPhotos(data.photos.slice(0, 8)); // Limit photos to the first 8
        } else {
          setError('No photos available');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchRoverPhotos();
  }, []);

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-mono text-gradient-1">
          Opportunity Rover{' '}
          <ReactTyped strings={['>>>']} typeSpeed={180} backSpeed={80} loop />
        </h2>
        {error && <p>Error: {error}</p>}
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {photos.map((photo) => (
            <div class="group relative border border-transparent rounded-md hover:border-white hover:scale-105">
              <div
                key={photo.id}
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
              >
                <img
                  src={photo.img_src}
                  alt="Taken by Opportunity Rover on Mars"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full text-black font-mono"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-white font-mono p-3">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  Name: {photo.rover.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpportunityPhotos;
