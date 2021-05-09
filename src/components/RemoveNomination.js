import React from "react";
import "./RemoveNomination.css";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const RemoveNomination = ({ handleNomination, movie }) => {
  return (
    <div className="removeNomination">
      <button disabled className="videoCard__nominated">
        Remove
        <EmojiEventsIcon />
      </button>
    </div>
  );
};

export default RemoveNomination;
