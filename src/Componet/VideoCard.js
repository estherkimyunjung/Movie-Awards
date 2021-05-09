import React, { forwardRef, useState } from "react";
import "./VideoCard.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const VideoCard = forwardRef(
  ({ movie, addNomination, removeNomination }, ref) => {
    const [isToggle, setIsToggle] = useState(false);

    return (
      <div ref={ref} className="videoCard">
        <img src={movie.Poster} alt=" movie poster" />

        <h3 className="videoCard__title">{movie.Title}</h3>
        <div className="videoCard__info">
          <p>Release: {movie.Year}</p>
          {isToggle ? (
            <button disabled className="videoCard__nominated">
              Nominated
              <EmojiEventsIcon />
            </button>
          ) : (
            <button
              className="videoCard__makeNominate"
              onClick={() => {
                setIsToggle(!isToggle);
                addNomination(movie);
              }}
            >
              Make Nominate
              <EmojiEventsIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default VideoCard;
