import React, { useEffect, useState } from 'react';
import ApodContent from '../components/ApodContent';
import MiniApodContent from '../components/MiniApodContent';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const ApodPage = () => {
  const [todayData, setTodayData] = useState(null);
  const [pastApods, setPastApods] = useState([]);
  const [error] = useState(null);

  const apiKey = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        setTodayData(apiData);
        console.log("Today's APOD\n", apiData);
      } catch (err) {
        console.log(err.message);
      }
    }

    async function fetchPastApods() {
      const today = new Date();
      const pastDates = Array.from({ length: 3 }, (_, index) => {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - (index + 1)); // Subtracting days
        return pastDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      });
      const fetchPromises = pastDates.map(async (date) => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
        try {
          const res = await fetch(url);
          const apiData = await res.json();
          return apiData;
        } catch (err) {
          console.error('Error fetching past APOD:', err);
          return null;
        }
      });

      const pastApodsData = await Promise.all(fetchPromises);
      setPastApods(pastApodsData.filter((apod) => apod !== null));
    }

    fetchAPIData();
    fetchPastApods();
  });
  return (
    <div className="text-white">
      <div className="flex justify-center items-center h-full">
        <ReactTyped
          className="text-gradient-1 font-mono text-8xl p-2"
          strings={['Astronomy Picture of the Day']}
          typeSpeed={180}
        />
      </div>
      <motion.div
        className="flex justify-center items-center h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p className="text-gradient-1 font-extrabold font-mono text-3xl m-5">
          'Unveiling the universe, one breathtaking image at a time.'
        </p>
      </motion.div>
      {error ? (
        <p className="error">Error fetching APOD data: {error}</p>
      ) : (
        <>
          <div className="todayApod">
            {todayData && <ApodContent data={todayData} />}
          </div>
          <div className="pastApods m-20">
            {pastApods.length > 0 && (
              <>
                <h2 className="font-mono text-2xl text-start font-extrabold">
                  Past APODs{' '}
                  <ReactTyped
                    strings={['>>>']}
                    typeSpeed={180}
                    backSpeed={80}
                    loop
                  />
                </h2>
                <div className="miniApodContainer">
                  {pastApods.map((apod) => (
                    <MiniApodContent key={apod.date} data={apod} />
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ApodPage;
