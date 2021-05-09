import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import keys from "./api/keys";
import "./App.css";
import Header from "./componet/Header";
import Banner from "./componet/Banner";
import Results from "./contanier/Results";
import Footer from "./componet/Footer";

function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("family");
  const [nominations, setNominations] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?type=movie&s=${searchValue}&apikey=${keys.API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      // console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
    // addNomination(nominations);
    // removeNomination(nominations);
  }, [searchValue, nominations]);

  const addNomination = (movie) => {
    if (nominations.length === 4) {
      setIsDisplay(true);
      let newNominations = [...nominations, movie];
      setNominations(newNominations);
    } else if (nominations.length >= 5) {
      alert("No additional nominations allowed");
    } else {
      let newNominations = [...nominations, movie];
      setNominations(newNominations);
    }
  };

  const removeNomination = (movie) => {
    let index = nominations.indexOf(movie);
    if (index !== -1) {
      nominations.splice(index, 1);
      let newNominations = [...nominations];
      setNominations(newNominations);
    }
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
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          {/* Banner */}
          <Banner />
          {/* Main - Movie list */}
          <Switch>
            <Route path="/movies">
              <Results
                movies={movies}
                searchValue={searchValue}
                removeNomination={removeNomination}
                addNomination={addNomination}
              />
            </Route>
            {/* <Route path="/nominations">
              {isDisplay ? <Results nominations={nominations} /> : null}
            </Route> */}
            <Route path="/">
              <Results searchValue={searchValue} movies={movies} />
            </Route>
          </Switch>
          {/* Footer */}
          {isDisplay ? (
            <Results
              movies={nominations}
              searchValue={"Your Nominations"}
              removeNomination={removeNomination}
              addNomination={addNomination}
            />
          ) : null}
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
