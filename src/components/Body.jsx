import React from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { auth } from "../firebase/firebase";
import {useDispatch} from 'react-redux';
import { addUser, removeUser } from '../redux/slices/userSlice'
import PlayMovie from './PlayMovie';

const Body = () => {
  

    
  return (
    <>
 
    <BrowserRouter>
     
     <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/play' element={<PlayMovie/>}/>
     </Routes>
    
    </BrowserRouter>
 
    </>
  )
}

export default Body
