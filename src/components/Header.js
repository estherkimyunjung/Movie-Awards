import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "./Search";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const Header = ({ searchValue, setSearchValue }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="header">
      <div className="header__icons">
        {/* All icons Here */}
        <div className="header__icon header__icon--active">
          <Link className="header__link" to="/">
            <HomeIcon />
            <p>Home</p>
          </Link>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <Link className="header__link" to="/nominations">
          <div className="header__icon">
            <EmojiEventsIcon />
            <p>Nominations</p>
          </div>
        </Link>
        <div className="header__icon">
          {showSearch && (
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          )}
          <SearchIcon
            onClick={() => setShowSearch(!showSearch)}
            className="banner_searchButton"
            variant="outlined"
          ></SearchIcon>
          <p>{showSearch ? "Hide" : "Search"}</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Login</p>
        </div>
      </div>
      <img src="./logo425.png" alt="logo" />
    </div>
  );
};

export default Header;
