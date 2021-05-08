import React from "react";
import "./MovieRow.css";

function SearchMovies({ movies, searchValue }) {
  return (
    <div className="row">
      <h2>Movie Result for {searchValue}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            className="row__posterLarge"
            src={movie.Poster}
            alt="movie poster"
          />
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
