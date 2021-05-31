import React, { useState }  from "react";
import Movie from './movie.js';
import "./index.css";

function MovieList(props) {
  const [selectedYear, setSelectedYear] = useState('');

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  let moviesSelected = <div data-test-id="no-result">No Results Found</div>;

  if (props.movies.length > 0) {
    moviesSelected = props.movies.map((movie, index) => {
      return <Movie title={movie.title} key={index} />
    });
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" onChange={yearChangeHandler} />
        <button className="" data-testid="submit-button" onClick={() => props.fetchMovies(selectedYear)}>Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">
        { moviesSelected }
      </ul>

      <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
    </div>
  );
}

export default MovieList;