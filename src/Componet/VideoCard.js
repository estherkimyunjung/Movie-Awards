import React from "react";
import "./VideoCard.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img src={movie.Poster} alt="poster" />

      <h3 className="videoCard__title">{movie.Title}</h3>
      <div className="videoCard__info">
        <p>Release: {movie.Year}</p>
        <button>
          Nominate
          <EmojiEventsIcon />
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
