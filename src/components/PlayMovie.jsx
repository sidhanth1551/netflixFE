import React from 'react'
import Navbar from './Navbar'
import VideoBackground from './VideoBackground'

const PlayMovie = ({moviePlayingDetails}) => {

    console.log(moviePlayingDetails)

    const {id} = moviePlayingDetails
    
  return (
    <div>
  
        <VideoBackground movieId={id} mute={true} forMovieToWatch={true}/>
    </div>
  )
}

export default PlayMovie