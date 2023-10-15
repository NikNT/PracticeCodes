import "./App.css";
import React, { Children, useEffect, useState } from "react";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=558707c3";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log("Recieved Data ", data);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
};

export default Search;
