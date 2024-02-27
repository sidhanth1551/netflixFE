import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/slices/movieSlice";
import { API_OPTIONS as options } from "../utils/apiHelper";

const useUpComing = () => {
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        console.log("hello", json.results);
        dispatch(addUpcomingMovies(json.results));
      })
      .catch((err) => console.error("error:" + err));
  }, []);
};

export default useUpComing;
