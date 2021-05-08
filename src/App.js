import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./componet/Header.js";
import Banner from "./componet/Banner.js";
import SearchMovies from "./contanier/SearchMovies";
import Nominations from "./contanier/Nominations";
import Footer from "./componet/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />

        <Switch>
          {/* Movies 
            // Search Movies
            // Awards Movies
          */}
          <Route path="/movies">
            <SearchMovies />
          </Route>
          <Route path="/nominations">
            <Nominations />
          </Route>
        </Switch>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
