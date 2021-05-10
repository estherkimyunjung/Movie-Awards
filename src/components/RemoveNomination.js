import React, { useState } from "react";
import "./RemoveNomination.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const RemoveNomination = ({ handleNomination, movie }) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="removeNomination">
      <button
        onClick={() => {
          setIsToggle(!isToggle);
          handleNomination(movie);
        }}
        className="videoCard__nominated"
      >
        Remove
        <EmojiEventsIcon />
      </button>
    </div>
  );
};

export default RemoveNomination;
