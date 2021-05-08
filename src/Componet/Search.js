import "./Search.css";
import { Button } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";

function Search() {
  return (
    <div className="search">
      <h2>
        Esther's Movie Database <MovieIcon />
      </h2>
      <input type="text" placeholder="Enter Movie Title Here" />
      <Button>Search Movies...</Button>
    </div>
  );
}

export default Search;
