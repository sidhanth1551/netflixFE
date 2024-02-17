import React from "react";
import Header from "./Header";
import "../css/login.css";
import { useState } from "react";

const Login = () => {

   const [isSignUpForm , setIsSignUpForm] = useState(true) 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`logging in...`);
  };

  const handleFormChange=()=>{
    setIsSignUpForm(!isSignUpForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroung img"
        />
        <div className="dark-overlay"></div>
      </div>

      <div className="inputBlackBox2">
        <div className="innerBox">
         {isSignUpForm? <h1>Get Started</h1>: <h1>Sign In</h1>}
          <form onSubmit={handleLogin}>
            {isSignUpForm &&  <input
              className="inputBox"
              type="text"
              placeHolder="Full Name"
            />}
            <input
              className="inputBox"
              type="text"
              placeHolder="Email or Phone number"
            />
            <input
              className="inputBox"
              type="password"
              placeHolder="Password"
            />
            {isSignUpForm &&  <input
              className="inputBox"
              type="password"
              placeHolder="Confirm Password"
            />}
            <button className="buttonClr" type="submit">
              {isSignUpForm?'Sign up':'Sign In'}
            </button>
          </form>
          <div style={{display:'flex'}}>
          <p style={{color:"#464545"}}>New to Netflix? </p><button onClick={handleFormChange}>{isSignUpForm?'Sign In':'Sign up'} now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
