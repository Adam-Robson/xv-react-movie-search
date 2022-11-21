import React from 'react';


const Moviecard = ({ movie }) => {
  return (
    <section className="moviecard">
      <div className="year">
        <p>{ movie.Year }</p>
      </div>
      <div className="poster">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
      </div>
      <div>
        <h3 className="title">{ movie.Title }</h3>
        <span>{ movie.Type }</span>
      </div>
    </section>
  );
};

export default Moviecard;