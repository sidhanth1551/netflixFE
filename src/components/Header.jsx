import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { auth } from "../firebase/firebase";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { addUser, removeUser } from '../redux/slices/userSlice'
import '../css/header.css'

const Header = ({navbarflag}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
       if (user) {
         const {uid,email,displayName} = user;
         dispatch(addUser({uid,email,displayName}))
         navigate('/browse')
         // ...
       } else {
           dispatch(removeUser())
           navigate('/')
       }
     });
     return ()=>unsubscribe()
   },[])

  return (
    // <div className={`${pos} z-10 px-0 p-4 `}>
    //   <img className={`w-${wid}`}
    //    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    // </div>
    <>
    {!navbarflag && 
    <div className='logo'>
    <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    </div>
    }

    {navbarflag&&<div className='navbarlogo'>
      <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
      </div>}
      </>
  )
}

export default Header
