import React, { useState } from 'react';
import './App.css';
import MovieList from './components/movie-list/index.js';
import 'h8k-components';

const title = "Movie List";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler(year) {
    fetch('https://jsonmock.hackerrank.com/api/movies?Year=' + year)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const moviesUpdated = data.data.map(movieData => {
          return {
            title: movieData.Title,
            year: movieData.Year,
            imdb_id: movieData.imdbID
          }
      });

      setMovies(moviesUpdated);
    });
  }
  
  return (
    <div>
      <h8k-navbar header={title} />
      <MovieList movies={movies} fetchMovies={fetchMoviesHandler} />
    </div>
  );
}

export default App;
