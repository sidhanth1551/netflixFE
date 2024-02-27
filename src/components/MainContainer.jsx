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
    const {title,overview,id} = mainMovie;
  return (
    <div className='mc-box1'>
        <VideoTitle title={title} description={overview}/>
        <VideoBackground movieId={id} mute={true}/>
    </div>
  )
}

export default MainContainer