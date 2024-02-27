import React, { useState } from "react";
import "../css/navbar.css";
import Header from "./Header";
import {  signOut } from "firebase/auth";
import {auth} from '../firebase/firebase.js'

const Navbar = ({setGptPage,gptPage}) => {
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
      {/* <input type='text' placeholder='Search'/> */}
      <div className="nb-box2">
      <button className="nb-box2-b1" onClick={()=>setGptPage(!gptPage)}>{gptPage?'Home': 'Search'}</button>
      <button className="nb-box2-b2"  onClick={handleSignout}>Sign Out</button>
      </div>
      <div className="dropdown">
        <button className="dropdownButton" onClick={handleDropDown}>
          |||
        </button>
        {showDropdown && <div className="box">
          {renderButtons()}
          <button  onClick={handleSignout}>Sign Out</button>
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
