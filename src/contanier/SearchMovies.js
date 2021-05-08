import React from "react";
import "./MovieRow.css";

function SearchMovies({ movies }) {
  return (
    <div className="row">
      <h2>Movie Result for search</h2>
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
