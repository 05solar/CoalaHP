// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 페이지 import (파일 경로와 이름에 맞게)
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage"; // 추가한 부분

// 이후 사용할 다른 페이지들도 여기에 import 하면 됩니다.
// import SignupPage from "./pages/SignupPage/SignupPage";
// import IntroducePage from "./pages/IntroducePage/IntroducePage";
// import NoticePage from "./pages/NoticePage/NoticePage";
// ...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* 추가한 부분 */}
        {/* 향후 페이지 경로도 여기에 추가 */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/introduce" element={<IntroducePage />} /> */}
        {/* <Route path="/notice" element={<NoticePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
