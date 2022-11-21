/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter';
import searchIcon from './assets/searchIcon.png';
import MovieCard from './components/MovieCard/MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=9a5fc751';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const movieSearch = async (title) => {
    const res = await fetch(`${ API_URL }&s=${ title }`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    movieSearch(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="App">
      <header>
        <h2 className="title">find movies</h2>
      </header>
      <div className="search">
        <input
          className="search-input"
          value={ searchTerm }
          placeholder="search"
          type="text"
          onChange={ (e) => setSearchTerm(e.target.value) }
        />
        <img
          className="icon"
          src={ searchIcon }
          alt="search"
          onClick={ (e) => movieSearch(searchTerm) }
        />
        <div className="container">
          { movies?.length > 0 ?
            (<div className="movies">{
              movies.map(
                (movie) => (
                  <MovieCard key='key' movie={ movie } />))}</div>) :
            (<div className="empty">search results appear here</div>)
          }
        </div>
      </div>
    </section>
  );
};

export default App;
