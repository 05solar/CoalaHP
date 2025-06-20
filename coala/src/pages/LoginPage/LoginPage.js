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
    navigate("/"); // 메인페이지로 이동
  };


  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo-area">
          <img src="/logo.png" alt="전북대학교 로고" className="logo" />
          <span className="title" onClick={goToHome} style={{ cursor: "pointer" }}>
            COALA
          </span>
        </div>
        <nav className="nav-menu">
          <a href="#">Introduce</a>
          <a href="#">Notice</a>
          <a href="#">Board</a>
          <a href="#">Event</a>
          <a href="#">Game</a>
          <a href="#">Member</a>
        </nav>
        <div className="login-signup">
          <a href="#">LOGIN</a> | <a href="#">SIGNUP</a>
        </div>
      </header>

      <main className="login-container">
        <div className="login-box">
          <div className="login-form">
            <h2>LOGIN</h2>
            <p className="sub-text">login page for coala</p>
            <label>EMAIL</label>
            <input type="email" placeholder="Enter your email" />
            <label>PASSWORD</label>
            <input type="password" placeholder="Enter your password" />
            <a href="#" className="forgot-password">FORGOT YOU PASSWORD?</a>
            <button className="login-btn">LOGIN</button>
            <button className="signup-btn">SIGN UP</button>
          </div>
          <div className="login-image" />
        </div>
      </main>
    </div>
  );
}
