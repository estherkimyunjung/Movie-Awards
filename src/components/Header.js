import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";

import "./Header.css";
import Search from "./Search";
import HomeIcon from "@material-ui/icons/Home";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

// const Header = ({ searchValue, setSearchValue, setUser, user, signOut }) => {
const Header = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="header">
      <div className="header__icons">
        {/* All icons Here */}
        <Link className="header__link" to="/">
          <div className="header__icon header__icon--active">
            <HomeIcon />
            <p>Home</p>
          </div>
        </Link>
        <Link className="header__link" to="/login">
          <div className="header__icon" onClick={() => signIn()}>
            <PersonOutlineIcon />
            {props.user.name ? <p>{props.user.name}</p> : <p>Login</p>}
          </div>
        </Link>
        <Link className="header__link" to="/nominations">
          <div className="header__icon">
            <EmojiEventsIcon />
            <p>Nominations</p>
          </div>
        </Link>
        <Link className="header__link" to="/movies">
          <div className="header__icon">
            <VideoLibraryIcon />
            <p>Collection</p>
          </div>
        </Link>
        <div className="header__icon">
          {showSearch && (
            <Search
              searchValue={props.searchValue}
              setSearchValue={props.setSearchValue}
            />
          )}
          <SearchIcon
            onClick={() => setShowSearch(!showSearch)}
            className="banner_searchButton"
            variant="outlined"
          ></SearchIcon>
          <p>{showSearch ? "Hide" : "Search"}</p>
        </div>
      </div>
      <img src="./logo425.png" alt="logo" />
    </div>
  );
};

export default Header;
