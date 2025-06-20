// src/pages/SignupPage/SignupPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    // TODO: 회원가입 로직
    console.log("Continue to sign up");
  };
  const goToHome      = () => navigate("/");
  const handleLogin   = () => navigate("/login");
  const handleSignup  = () => navigate("/signup");

  return (
    <div className="signup-page">
      <header className="header">
        <div className="logo-area">
          <img src="/logo.png" alt="전북대학교 로고" className="logo" />
          <span className="title" onClick={goToHome} style={{ cursor: "pointer" }}>
            COALA
          </span>
        </div>
        <nav className="nav">
          <a href="#">Introduce</a>
          <a href="#">Notice</a>
          <a href="#">Board</a>
          <a href="#">Event</a>
          <a href="#">Game</a>
          <a href="#">Member</a>
        </nav>
        <div className="auth">
          <button onClick={handleLogin}  className="link-button">LOGIN</button>
          {" | "}
          <button onClick={handleSignup} className="link-button">SIGNUP</button>
        </div>
      </header>

      <main className="signup-container">
        <div className="signup-box">
          <div className="signup-image" />
          <div className="signup-form">
            <h2>CREATE AN ACCOUNT</h2>
            <p className="sub-text">signup page for coala</p>

            <label>ID</label>
            <input type="text" placeholder="example" />

            <label>EMAIL</label>
            <input type="email" placeholder="example@mail.com" />

            <label>PASSWORD</label>
            <input type="password" placeholder="include *,%,^ (8~16)" />

            <label>CONFIRM PASSWORD</label>
            <input type="password" placeholder="" />

            <button className="continue-btn" onClick={handleContinue}>
              CONTINUE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
