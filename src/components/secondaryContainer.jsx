import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
import '../css/secondaryContainer.css'

const SecondaryContainer = () => {

  const nowplaying = useSelector((state) => state.movies.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  console.log(nowplaying,popularMovies,upcomingMovies,'0-0')
  return (
    <div className='sc-box1'>

      <div className='sc-box2'>
    
      <MovieList title={"Now Playing"} movies={nowplaying}/>
      <MovieList title={"Popular"} movies={popularMovies}/>

      <MovieList title={"Top Rated"} movies={topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={upcomingMovies}/>
      </div>


    </div>
  )
}

export default SecondaryContainer