/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter';
import searchIcon from './assets/searchIcon.png';
import MovieCard from './components/MovieCard/MovieCard';
import './App.css';

// 9a5fc751

const API_URL = 'http://www.omdbapi.com/?apikey=9a5fc751';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const movieSearch = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    movieSearch('superman');
  }, []);


  return (
    <section className="App">
      <h1>Find a Movie</h1>
      <div className="search">
        <input
          value={ searchTerm }
          placeholder="search"
          type="text"
          onChange={ (e) => setSearchTerm(e.target.value) }
        />
        <img
          src={ searchIcon }
          alt="search"
          onClick={ (e) => movieSearch(searchTerm) }
        />

        <div className="container">

        </div>


        {
          movies?.length > 0 ?
            (
              <div className="container">{
                movies.map((movie) => (<MovieCard key='key' movie={ movie } />))
              }</div>
            )
            :
            (
              <div className="empty">No movies found</div>
            )
        }
      </div>
    </section>
  );
}

export default App;
