// src/pages/LoginPage/LoginPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
  
      <main className="login-container">
        <div className="login-box">
          <div className="login-form">
            <h2>LOGIN</h2>
            <p className="sub-text">login page for coala</p>
            <label>EMAIL</label>
            <input type="email" placeholder="Enter your email" />
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
            <a href="#" className="forgot-password">FORGOT YOUR PASSWORD?</a>
            <button className="login-btn">LOGIN</button>
            <button className="signup-btn">SIGN UP</button>
          </div>
          <div className="login-image" />
        </div>
      </main>
    </div>
  );
}
