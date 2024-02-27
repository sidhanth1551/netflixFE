import React from 'react'
import { IMG_CDN_URL } from '../utils/apiHelper'
import '../css/movieCard.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addMoviePlaying} from '../redux/slices/movieSlice'
const MovieCard = ({url,movieDetails}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlayMovie=()=>{
      console.log('play..')
      // navigate('/play')
      dispatch(addMoviePlaying({moviePlayingFlag:true,moviePlaying:movieDetails}))

  }
  if(!url)
  return null
  return (
    <div onClick={handlePlayMovie} className='mcard-box0'>
      <div className='mcard-box1'>
      <img src={IMG_CDN_URL+ url} alt='movie img'/>
      </div>
    </div>
  )
}

export default MovieCard