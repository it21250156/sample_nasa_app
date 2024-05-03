import React from 'react';
import { ReactTyped } from 'react-typed';

const MiniApodContent = ({ data }) => {
  return (
    <div className="miniApodContainer">
      <div className="miniApodMediaContainer">
        {data.media_type === 'image' ? (
          <img
            src={data.hdurl}
            alt={data.title || 'bg-img'}
            className="miniApodImg hover:scale-105"
          />
        ) : (
          <iframe
            src={data.url}
            title={data.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="miniApodTextContainer">
        <p className="miniApodTitle font-mono">{data.title}</p>
        <p className="miniApodDate">{data.date}</p>
      </div>
    </div>
  );
};

export default MiniApodContent;
