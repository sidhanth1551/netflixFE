import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/slices/movieSlice";
import { API_OPTIONS as options } from "../utils/apiHelper";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results);
        dispatch(addPopularMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);
};

export default usePopularMovies;
