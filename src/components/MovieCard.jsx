import React from 'react'
import { IMG_CDN_URL } from '../utils/apiHelper'
import '../css/movieCard.css'

const MovieCard = ({url}) => {
  if(!url)
  return null
  return (
    <div className='mcard-box0'>
      <div className='mcard-box1'>
      <img src={IMG_CDN_URL+ url} alt='movie img'/>
      </div>
    </div>
  )
}

export default MovieCard