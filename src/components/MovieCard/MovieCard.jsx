import React from 'react';
import './MovieCard.css';

const Moviecard = ({ movie }) => {
  return (
    <section className="moviecard">
      <div className="year">
        <p>{ movie.Year }</p>
      </div>
      <div className="poster">
        <img
          className="image"
          src={ movie.Poster !== 'N/A' ?
            movie.Poster :
            'https://via.placeholder.com/400'
          }
          alt={ movie.Title }
        />
      </div>
      <div>
        <p className="title">{ movie.Title }</p>
      </div>
    </section>
  );
};

export default Moviecard;