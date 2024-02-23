import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/slices/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmJkY2YxMTMyYTBmNjMwM2IwNWJkYTI4ZTFhZjBiOSIsInN1YiI6IjY1ZDU3NTZkMzNhMzc2MDE4Njc3ZTY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sh5HONfHTPZvuFKeyFLOHh97w1_ZQGCxhQ8iaO9cpUw",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);
};

export default useNowPlayingMovies;
