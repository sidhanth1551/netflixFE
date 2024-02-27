import React from 'react'
import {useSelector} from 'react-redux'
import '../css/gptMovieSuggestions.css'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {

  const movieNames = useSelector(state=>state.gpt.movieNames)
  const movieDetails = useSelector(state=>state.gpt.searchedMovies)
  console.log(movieNames)
  return (
    <>
    {movieNames&&<><div className='gms-box0'></div>
  
    <div className='gms-box1'>
    <h2>Categorised based on Similar keywords </h2>
     {movieNames&& movieNames.map((item,idx)=>{
     return <>
     <MovieList title={item} movies={movieDetails[idx]}/>
     </>
     
     })}

    </div>
    </>}
    </>
  )
}

export default GptMovieSuggestions