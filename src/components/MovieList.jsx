import React from 'react'
import MovieCard from './MovieCard'
import '../css/movieList.css'
const MovieList = ({title,movies}) => {
    console.log(title,movies)
  return (
    <div className='ml-box-1'>
        <div>
            <h1>{title}</h1>
        </div>
        <div className='ml-box-2'>
        {movies && movies.map((item,idx)=>{
          return  <MovieCard key={idx} url={item.poster_path} movieDetails={item}/>
        })

        }
        </div>

    </div>
  )
}

export default MovieList