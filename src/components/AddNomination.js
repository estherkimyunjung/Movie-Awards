import React, { useState } from "react";
import "./AddNomination.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const AddNomination = ({ handleNomination, movie }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="addNomination">
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
            handleNomination(movie);
          }}
        >
          Make Nominate
          <EmojiEventsIcon />
        </button>
      )}
    </div>
  );
};

export default AddNomination;
