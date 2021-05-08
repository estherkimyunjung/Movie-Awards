import React from "react";
import "./MovieRow.css";

function Nominations({ movies }) {
  return (
    <div className="row">
      <h2>Nominations</h2>
      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={index}
            className="row__posterLarge"
            src={movie.Poster}
            alt="movie poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Nominations;
