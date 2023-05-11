// import "./App.css";
// import React, { useEffect, useState } from "react";
// import SearchIcon from "./search.svg";

// const API_URL = "http://www.omdbapi.com?apikey=7ffa0c0a";

// const Search = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search);
//   };

//   useEffect(() => {
//     searchMovies(searchTerm);
//   }, []);

//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Search Movies"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <img
//         src={SearchIcon}
//         alt="Search"
//         onClick={() => searchMovies(searchTerm)}
//       />
//     </div>
//   );
// };

// export default Search;
