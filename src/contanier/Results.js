import React from "react";
import "./Results.css";
import VideoCard from "../componet/VideoCard";
import FlipMove from "react-flip-move";

function Results({ movies, searchValue }) {
  return (
    <div className="results">
      <h2 className="results__title">
        Movie Result for <em>"{searchValue}"</em>
      </h2>
      <div className="results__poster">
        <FlipMove>
          {movies.map((movie, index) => (
            <VideoCard movie={movie} key={movie.imdbID} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Results;
