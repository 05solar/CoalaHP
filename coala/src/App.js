// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 페이지 import
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage"; // ← 추가

// import IntroducePage from "./pages/IntroducePage/IntroducePage";
// import NoticePage    from "./pages/NoticePage/NoticePage";
// … 기타 페이지도 동일하게

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"      element={<MainPage />}  />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />  {/* ← 추가 */}
        {/* <Route path="/introduce" element={<IntroducePage />} /> */}
        {/* <Route path="/notice"    element={<NoticePage />}    /> */}
      </Routes>
    </Router>
  );
}

export default App;
