import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="movie-card-image-container">
        <div className="movie-episode-overlay">
          <span className="movie-episode">Episode {movie.episode}</span>
        </div>
        <img 
          src={movie.image} 
          alt={movie.movieName}
          className="movie-card-image"
        />

      </div>
      <div className="movie-card-info">
        <h3 className="movie-title">{movie.movieName}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
