import React, { forwardRef } from "react";
import "./VideoCard.css";
import AddNomination from "./AddNomination";
import RemoveNomination from "./RemoveNomination";

const VideoCard = forwardRef(
  ({ movie, handleNomination, index, searchValue }, ref) => {
    return (
      <div ref={ref} className="videoCard">
        <img src={movie.Poster} alt=" movie poster" />

        <h3 className="videoCard__title">{movie.Title}</h3>
        <div className="videoCard__info">
          <p>Release: {movie.Year}</p>
          {searchValue !== "Your Nominations" ? (
            <AddNomination
              movie={movie}
              key={movie.imdbID}
              index={index}
              handleNomination={handleNomination}
            />
          ) : (
            <RemoveNomination
              movie={movie}
              key={movie.imdbID}
              index={index}
              handleNomination={handleNomination}
            />
          )}
        </div>
      </div>
    );
  }
);

export default VideoCard;
