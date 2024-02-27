import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import '../css/browse.css'
import usePopularMovies from "../customHooks/usePopularMovies";
import useUpComing from "../customHooks/useUpComing";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { useState } from "react";
import GptSearch from "./GptSearch";
import PlayMovie from "./PlayMovie";

const Browse = () => {

  const [gptPage,setGptPage] = useState(false)
  const moviePlayingFlag = useSelector(state=>state.movies.moviePlayingFlag)
  const moviePlayingDetails = useSelector(state=>state.movies.moviePlaying)
  console.log('yo',moviePlayingDetails,moviePlayingFlag)
   useNowPlayingMovies()
   usePopularMovies();
   useUpComing();
   useTopRatedMovies()


   useEffect(()=>{
     console.log('gpt page',gptPage)
   },[gptPage])

  return (
    <div>
      <Navbar setGptPage={setGptPage} gptPage={gptPage}/>
      {!gptPage&& !moviePlayingFlag &&(<div className="b-box1">
        <MainContainer/>
        <div className="b-box2">
        <SecondaryContainer />
        </div>

      </div>)}
      {!gptPage&& moviePlayingFlag &&(<div className="b-box1">
         <PlayMovie moviePlayingDetails={moviePlayingDetails}/>
      </div>)}
      {gptPage && <GptSearch/>}
    </div>
  );
};

export default Browse;
