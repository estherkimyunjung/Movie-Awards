import React, { forwardRef } from "react";
import "./VideoCard.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img src={movie.Poster} alt=" movie poster" />

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
});

export default VideoCard;
