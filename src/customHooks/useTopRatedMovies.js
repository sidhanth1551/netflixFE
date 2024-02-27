import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/slices/movieSlice";
import { API_OPTIONS as options } from "../utils/apiHelper";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log("toprated", json.results);
        dispatch(addTopRatedMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);
};

export default useTopRatedMovies;
