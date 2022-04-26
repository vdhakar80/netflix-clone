import React, { useState } from "react";
import axios from "./../axios";
import YouTube from "react-youtube";
import "./../css/Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const opts = {
  height: "390px",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  React.useEffect(() => {
    const getMovies = async () => {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);
    };
    getMovies();
  }, [fetchUrl]);

  console.log(movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie.name || movie.original_name || "")
        .then((url) => {
          const fullUrl = new URL(url).search;
          const urlParams = new URLSearchParams(fullUrl);
          const movieId = urlParams.get("v");
          setTrailerUrl(movieId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleClick(movie);
            }}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_large_poster"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
