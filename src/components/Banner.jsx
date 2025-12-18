import React from 'react';
import './Banner.css';

const Banner = ({ movie }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img 
          src={movie.image} 
          alt={movie.movieName}
          className="banner-image"
        />
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h2 className="banner-title">{movie.movieName}</h2>
          <p className="banner-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
