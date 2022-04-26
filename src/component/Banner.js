import React, { useState, useEffect } from "react";
import request from "./../request";
import axios from "./../axios";
import "./../css/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        data.data.results[
          Math.floor(Math.random() * (data.data.results.length + 1))
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contant">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fade-bottom" />
    </header>
  );
}

export default Banner;

//Math.floor(Math.random() * data.data.results.length - 1)
