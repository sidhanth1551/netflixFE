import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import '../css/gptSearchBar.css'
import { API_OPTIONS } from '../utils/apiHelper'
import  openai from '../utils/openai'
import {useDispatch} from 'react-redux';
import { addSearchedMovies } from '../redux/slices/gptSlice'

const GptSearchBar = () => {

  const inputVal = useRef(null)
  const [movies,setMovies] = useState(null);
  const dispatch = useDispatch()

  const searchMovieDetails = async(movie)=>{
       
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie +'&include_adult=false&language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    console.log('json',json)
    return json.results
  }

  const callOpenAI = async()=>{
    console.log('111')
    const query = `Act as a movie recomendation system and suggest movies based on query ${inputVal.current.value}.Please answer only 5 movie names if asked by little bit of description and ans by separating by comma like the example ahead. Example: jung, Don, Dhamaal, Veer, Sholay. If query containd 1 movie name then just return the same 1 movie name example: query:batman result should be batman`
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices?.[0]?.message?.content.split(','))

   // setMovies(chatCompletion.choices?.[0]?.message?.content.split(',')) 
    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(',')
    
    const data = gptMovies.map((movie,idx)=>{
      return searchMovieDetails(movie)
   })
   try {
    // Wait for all promises to resolve
    const eachMovieDetail = await Promise.all(data)

    console.log('eachmoviedetails', eachMovieDetail)
    dispatch(addSearchedMovies({movieNames:gptMovies,movieDetails:eachMovieDetail}))
} catch (error) {
    console.error('Error fetching movie details:', error)
}
  }

  return (
    
    <div className="gsb-box0">
      <div className="gsb-box3">
      <div className="gsb-box1"></div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="backgroung img"
      />
      </div>
      <div className="gsb-box2">
        <input ref={inputVal} type={'text'} placeholder={'What type of movie you would like to watch..?'}/>
        <button onClick={callOpenAI}>Search</button>
      </div>
    </div>
  )
}

export default GptSearchBar