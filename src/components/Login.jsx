import React from "react";
import Header from "./Header";
import "../css/login.css";
import { useState } from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup'

const Login = () => {

   const [isSignUpForm , setIsSignUpForm] = useState(false) 
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`logging in...`);
  };

  const handleFormChange=()=>{
    setIsSignUpForm(!isSignUpForm)
  }

 
  const initialValuesForSingup={
    fname:"",
    email:"",
    password:"",
    confirmPassword:"",
}
  
const validationSchema = Yup.object({
    fname:Yup.string().min(2,'Full Name must be at least 2 characters').max(30,'Full Name must be at least 30 characters').required('Full Name is required'),
    email:Yup.string().email('Please enter a valid email address').required('Email is required'),
    password:Yup.string().min(4,'Password must be at least 4 characters').max(30,'Password must be at least 30 characters').required('password is required'),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],'Password Doesn\'t match')
})
// 

  const {values, touched,errors,handleChange,handleBlur,handleSubmit} =useFormik({
       initialValues:initialValuesForSingup,
       validationSchema:validationSchema,
       onSubmit:(values)=>{
        console.log('val',values)
    }

  })
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
          <form onSubmit={handleSubmit}>
            {isSignUpForm &&  <input
              className={`inputBox ${errors.fname && touched.fname && 'errorInput'}`}
              type="text"
              name="fname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Full Name"
            />}
             {errors.fname && touched.fname &&<p style={{color:'#e87c03',fontSize:'12px',margin:0}}>{errors.fname}</p>}
            <input
              className={`inputBox ${errors.email && touched.email && 'errorInput'}`}
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Email"
            />
                         {errors.email && touched.email &&<p style={{color:'#e87c03',fontSize:'14px',margin:0}}>{errors.email}</p>}
            <input
              className={`inputBox ${errors.password && touched.password && 'errorInput'}`}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Password"
            />
                         {errors.password && touched.password &&<p style={{color:'#e87c03',fontSize:'14px',margin:0}}>{errors.password}</p>}
            {isSignUpForm &&  <input
              className={`inputBox ${errors.confirmPassword && touched.confirmPassword && 'errorInput'}`}
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Confirm Password"
            />}
                         {errors.confirmPassword && touched.confirmPassword &&<p style={{color:'#e87c03',fontSize:'14px',margin:0}}>{errors.confirmPassword}</p>}
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
