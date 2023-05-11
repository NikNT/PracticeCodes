import React from "react";

const MovieCard = ({ sampleMovie }) => {
  return (
    <div className="movie">
      <div>
        <p>{sampleMovie.Year}</p>
      </div>
      <div>
        <img
          src={
            sampleMovie.Poster !== "N/A"
              ? sampleMovie.Poster
              : "https://via.placeholder.com/400"
          }
          alt="Movie Poster"
        />
      </div>
      <div>
        <span>{sampleMovie.Type}</span>
        <h3>{sampleMovie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
