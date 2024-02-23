import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
 
   useNowPlayingMovies()

   const nowplaying = useSelector((state) => state.movies.nowPlayingMovies);
   console.log('nowP',nowplaying)

  return (
    <>
      <Navbar />
      <div>
        <MainContainer/>
      </div>
    </>
  );
};

export default Browse;
