import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_OPTIONS as options } from "../utils/apiHelper";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  //var trailer;

  useEffect(() => {
    if (movieId) {
      const url =
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US";

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          const obj = json.results.filter((item) => {
            return item.type === "Trailer";
          });
          if (obj.length === 0) {
            setTrailer(json.results[0]);
          } else setTrailer(obj[0]);
        })
        .catch((err) => console.error("error:" + err));
    }
  }, [movieId]);

  return trailer;
};

export default useMovieTrailer;
