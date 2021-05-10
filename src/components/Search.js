import { useHistory } from "react-router-dom";

import "./Search.css";
import { Button } from "@material-ui/core";
import MovieIcon from "@material-ui/icons/Movie";

const Search = ({ searchValue, setSearchValue, value }) => {
  const history = useHistory();

  return (
    <div className="search">
      <h2>
        Esther's Movie Database
        <MovieIcon />
      </h2>
      <input
        value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Please enter movie title here..."
      />
      <Button type="submit" onClick={() => history.push("/movies")}>
        Search Movies...
      </Button>
    </div>
  );
};

export default Search;
