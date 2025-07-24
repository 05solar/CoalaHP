// src/pages/AuthPage/AuthPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isSignup = mode === "signup";

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="progress-bar" />
        {isSignup
          ? <SignupForm onSwitch={() => setMode("login")} />
          : <LoginForm  onSwitch={() => setMode("signup")} />
        }
      </div>
    </div>
  );
}

function LoginForm({ onSwitch }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || res.statusText);
      }
      // 로그인 성공 시, 토큰 저장 등 필요 로직
      navigate("/"); 
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <form className="form-area" onSubmit={handleLogin}>
      {error && <div className="error">{error}</div>}
      <h1>로그인</h1>
      <p className="sub-text">코알라 로그인 페이지</p>

      <label>이메일</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="아이디를 입력하세요"
        required
      />

      <label>비밀번호</label>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
        required
      />

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
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    name: "",
    nickname: "",
    phone_number: "",
    gender: "other",
    age: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSignUp = async e => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email:        form.email,
          name:         form.name,
          nickname:     form.nickname,
          phone_number: form.phone_number,
          gender:       form.gender,
          age:          parseInt(form.age, 10),
          password:     form.password
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail?.[0]?.msg || res.statusText);
      }
      // 회원가입 성공
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <form className="form-area" onSubmit={handleSignUp}>
      {error && <div className="error">{error}</div>}
      <h1>계정 만들기</h1>
      <p className="sub-text">코알라 회원가입 페이지</p>

      <label>아이디(이메일)</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="example@mail.com"
        required
      />

      <label>이름</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="이준영"
        required
      />

      <label>별명</label>
      <input
        type="text"
        name="nickname"
        value={form.nickname}
        onChange={handleChange}
        placeholder="넉살"
        required
      />

      <label>전화번호</label>
      <input
        type="tel"
        name="phone_number"
        value={form.phone_number}
        onChange={handleChange}
        placeholder="010-1234-5678"
        required
      />

      <label>성별</label>
      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="male">남성</option>
        <option value="female">여성</option>
        <option value="other">기타</option>
      </select>

      <label>나이</label>
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="17"
        required
      />

      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="비밀번호를 입력하세요"
        required
      />

      <label>비밀번호 확인</label>
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="비밀번호를 다시 입력하세요"
        required
      />

      <button type="submit" className="btn primary">
        계정 생성
      </button>
      <button type="button" className="btn outline" onClick={onSwitch}>
        로그인 하기
      </button>
    </form>
  );
}