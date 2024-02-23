import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import {useSelector} from 'react-redux'
import '../css/mainContainer.css'

const MainContainer = () => {

    const movie = useSelector(state=>state.movies?.nowPlayingMovies)
    console.log(movie)
    if(!movie)
    return

    let randomenum = Math.floor(Math.random()*10);
    console.log(randomenum,'rand')
    let mainMovie=movie[randomenum];
    console.log(mainMovie,'mainMovie')
    const {title,overview,id} = mainMovie;
    console.log('moId',id)
  return (
    <div className='mc-box1'>
        <VideoTitle title={title} description={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer