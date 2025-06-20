// src/pages/MainPage/MainPage.js
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./MainPage.css";

export default function MainPage() {
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
    <div className="container">
      {/* Header */}
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

        {/* ✅ 로그인/회원가입 버튼으로 라우팅 처리 */}
        <div className="auth">
          <button onClick={handleLoginClick} className="link-button">LOGIN</button>
          {" | "}
          <button onClick={handleSignupClick} className="link-button">SIGNUP</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Introduce Section */}
        <section className="introduce-section">
          <button className="arrow">◀</button>
          <div className="introduce-box">Introduce</div>
          <button className="arrow">▶</button>
        </section>

        {/* Card Section */}
        <section className="card-section">
          {["notice", "event", "board"].map((title) => (
            <div className="card" key={title}>
              <div className="card-header">
                <h3>{title}</h3>
                <button className="plus-button">+</button>
              </div>
              <ul className="card-list">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>• sample sentence 1 sample sentence 1...</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Bottom Boxes */}
        <section className="bottom-boxes">
          <div className="box box-left" />
          <div className="box box-center" />
          <div className="box box-right" />
        </section>
      </main>
    </div>
  );
}
