import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserForm.css";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      <div
        className={`container ${isSignUp ? "right-panel-active" : ""}`}
        id="container"
      >
        <SignUpForm />

        <SignInForm />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p> please login with your personal info</p>
              <button className="ghost" onClick={handleToggleForm} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details</p>
              <button className="ghost" onClick={handleToggleForm} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
