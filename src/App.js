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

  const getMovieRequest = async () => {
    // const url = `http://www.omdbapi.com/?s=star wars&apikey=${keys.API_KEY}&type=movie&s=${this.state.searchTerms}&page=1`;
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=${keys.API_KEY}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      // console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

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
          {/* Header */}
          <Header searchValue={searchValue} setSearchValue={setSearchValue} />
          {/* Banner */}
          <Banner />

          <Switch>
            <Route path="/movies">
              <Results searchValue={searchValue} movies={movies} />
            </Route>
            <Route path="/nominations">
              <Results movies={movies} />
            </Route>
          </Switch>
          {/* Footer */}
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
