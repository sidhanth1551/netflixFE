import React, { useState } from "react";
import "../css/navbar.css";
import Header from "./Header";
import {  signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const buttonsArray = [
    "Home",
    "TV Shows",
    "Movies",
    "New-Popular",
    "My List",
  ];

  const handleDropDown = () => {
    setShowDropdown(!showDropdown);
  };

  const renderButtons = () => {
    return buttonsArray.map((item, idx) => {
      return <button style={{marginTop:'0px'}} key={idx}>{item}</button>;
    });
  };

  const handleSignout=()=>{
    console.log('singing out..')
  
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('log out succesful')
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="navbarBox">
      {/* <div className="logo">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div> */}
      <Header navbarflag={true}/>
      <div className="buttons">{renderButtons()}</div>
      <input type='text' placeholder='Search'/>
      <button style={{color:'gray',marginTop:0,marginLeft:14,marginRight:0}} onClick={handleSignout}>Signout</button>
      <div className="dropdown">
        <button className="dropdownButton" onClick={handleDropDown}>
          |||
        </button>
        {showDropdown && <div className="box">{renderButtons()}</div>}
      </div>
    </div>
  );
};

export default Navbar;
