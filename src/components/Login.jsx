import React from "react";
import Header from "./Header";
import "../css/login.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  //const navigate = useNavigate();
  const userObj = useSelector((state)=>state.user)



  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`logging in...`);
  };

  const handleFormChange = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const initialValuesForSingup = {
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signUpValidationSchema = Yup.object({
    fname: Yup.string()
      .min(2, "Full Name must be at least 2 characters")
      .max(30, "Full Name must be at least 30 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("password is required"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password Doesn't match"),
  });

  const signInValidationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(30, "Password must be at least 30 characters")
      .required("password is required"),
  });

  const validationSchema = isSignUpForm
    ? signUpValidationSchema
    : signInValidationSchema;

  //

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValuesForSingup,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("val", values);
        if (isSignUpForm) {
          console.log("creating user..");
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log("user created->", user);
              updateProfile(auth.currentUser, {
                displayName: values.fname,
                photoURL:'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'
              }).then((res) => {
                // Profile updated!
                console.log('profile update',res)
              }).catch((error) => {
                // An error occurred
                console.log('error occured while updating profile name')
              });
             
              console.log('obj',userObj)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("user creation failed", error);
              // ..
            });
        } else {
          console.log("logging in user..");
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("user logged in->", user);
            //  navigate('/browse')
              console.log('obj',userObj)

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("user log in failed", error);
            });
        }
      },
    });
  return (
    <div>
      <Header navbarflag={false}/>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroung img"
        />
        <div className="dark-overlay"></div>
      </div>

      <div className="inputBlackBox2">
        <div className="innerBox">
          {isSignUpForm ? <h1>Get Started</h1> : <h1>Sign In</h1>}
          <form onSubmit={handleSubmit}>
            {isSignUpForm && (
              <input
                className={`inputBox ${
                  errors.fname && touched.fname && "errorInput"
                }`}
                type="text"
                name="fname"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeHolder="Full Name"
              />
            )}
            {errors.fname && touched.fname && (
              <p style={{ color: "#e87c03", fontSize: "12px", margin: 0 }}>
                {errors.fname}
              </p>
            )}
            <input
              className={`inputBox ${
                errors.email && touched.email && "errorInput"
              }`}
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Email"
            />
            {errors.email && touched.email && (
              <p style={{ color: "#e87c03", fontSize: "14px", margin: 0 }}>
                {errors.email}
              </p>
            )}
            <input
              className={`inputBox ${
                errors.password && touched.password && "errorInput"
              }`}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeHolder="Password"
            />
            {errors.password && touched.password && (
              <p style={{ color: "#e87c03", fontSize: "14px", margin: 0 }}>
                {errors.password}
              </p>
            )}
            {isSignUpForm && (
              <input
                className={`inputBox ${
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  "errorInput"
                }`}
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeHolder="Confirm Password"
              />
            )}
            {errors.confirmPassword && touched.confirmPassword && (
              <p style={{ color: "#e87c03", fontSize: "14px", margin: 0 }}>
                {errors.confirmPassword}
              </p>
            )}
            <button className="buttonClr" type="submit">
              {isSignUpForm ? "Sign up" : "Sign In"}
            </button>
          </form>
          <div style={{ display: "flex" }}>
            <p style={{ color: "#464545" }}>New to Netflix? </p>
            <button onClick={handleFormChange}>
              {isSignUpForm ? "Sign In" : "Sign up"} now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
