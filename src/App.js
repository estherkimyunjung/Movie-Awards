import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import keys from "./api/keys";
import db from "./firebase";
import { auth, provider } from "./firebase";

import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Results from "./containers/Results";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("family");
  const [isLoading, setIsLoading] = useState(true);
  const [nominations, setNominations] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?type=movie&s=${searchValue}&apikey=${keys.API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      // console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
    setIsLoading(false);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(localStorage.getItem("my-nomination"));
    setNominations(movieNominations);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("my-nomination", JSON.stringify(items));
  };

  const addNomination = (movie) => {
    if (nominations.length === 4) {
      setIsDisplay(true);
      let newNominations = [...nominations, movie];
      setNominations(newNominations);
      saveToLocalStorage(newNominations);
    } else if (nominations.length >= 5) {
      alert("No additional nominations allowed");
    } else {
      let newNominations = [...nominations, movie];
      setNominations(newNominations);
      saveToLocalStorage(newNominations);
    }
  };

  const removeNomination = (movie) => {
    const newNominations = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );
    setNominations(newNominations);
    saveToLocalStorage(newNominations);
  };

  console.log("APP", nominations);
  return (
    <div className="app">
      {isLoading ? (
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      ) : (
        <Router>
          {/* Header - Navbar and Logo */}
          <Header
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setUser={setUser}
            user={user}
            signOut={signOut}
          />
          {/* Banner */}
          <Banner />
          {/* Main - Movie list */}
          <Switch>
            <Route path="/movies">
              <Results
                movies={movies}
                searchValue={searchValue}
                handleNomination={addNomination}
              />
            </Route>
            <Route path="/nominations">
              <Results
                movies={nominations}
                searchValue={"Your Nominations"}
                handleNomination={removeNomination}
              />
            </Route>
            <Route path="/">
              <Results
                movies={nominations}
                searchValue={"Your Nominations"}
                handleNomination={removeNomination}
              />
            </Route>
          </Switch>
          {/* Footer */}
          {isDisplay ? (
            <Results
              movies={nominations}
              searchValue={"Your Nominations"}
              handleNomination={removeNomination}
            />
          ) : null}
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
