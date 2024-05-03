import React from 'react';
import videoBg from '../assets/video_bg.mp4';

const Main = () => {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Main;
