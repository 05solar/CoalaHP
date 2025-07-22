import React, { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isSignup = mode === "signup";
  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* 상단 그라데이션 바 */}
        <div className="progress-bar" />

        {/* form */}
        {isSignup ? (
          <SignupForm onSwitch={() => setMode("login")} />
        ) : (
          <LoginForm onSwitch={() => setMode("signup")} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ onSwitch }) {
  return (
    <form className="form-area" onSubmit={(e) => e.preventDefault()}>
      <h1>로그인</h1>
      <p className="sub-text">코알라 로그인 페이지</p>

      <label>이메일/아이디</label>
      <input type="email" placeholder="아이디를 입력하세요" />

      <label>비밀번호</label>
      <input type="password" placeholder="비밀번호를 입력하세요" />

      <button type="submit" className="btn primary">
        로그인
      </button>
      <button type="button" className="btn outline" onClick={onSwitch}>
        회원가입 하기
      </button>
    </form>
  );
}

function SignupForm({ onSwitch }) {
  return (
    <form className="form-area" onSubmit={(e) => e.preventDefault()}>
      <h1>계정 만들기</h1>
      <p className="sub-text">코알라 회원가입 페이지</p>

      <label>아이디</label>
      <input type="text" placeholder="example" />

      <label>이메일</label>
      <input type="email" placeholder="example@mail.com" />

      <label>비밀번호</label>
      <input type="password" placeholder="include *,%,^ (8~16)" />

      <label>비밀번호 확인</label>
      <input type="password" placeholder="" />

      <button type="submit" className="btn primary">
        회원가입하기 
      </button>
      <button type="button" className="btn outline" onClick={onSwitch}>
        계정이 있습니다
      </button>
    </form>
  );
}
