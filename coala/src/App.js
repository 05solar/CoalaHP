// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header         from "./components/Header";
import MainPage       from "./pages/MainPage/MainPage";
import AuthPage       from "./pages/AuthPage/AuthPage";
import IntroducePage  from "./pages/IntroducePage/IntroducePage";
import BoardPage      from "./pages/BoardPage/BoardPage";
import ArticleDetail  from "./pages/BoardPage/ArticleDetail";
import GamePage       from "./pages/GamePage/GamePage";
import MemberPage     from "./pages/MemberPage/MemberPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/login"  element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />

        <Route path="/introduce" element={<IntroducePage />} />

        <Route path="/board/:board"     element={<BoardPage />} />
        <Route path="/board/:board/:id" element={<ArticleDetail />} />

        <Route path="/game"   element={<GamePage />} />
        <Route path="/member" element={<MemberPage />} />

        <Route path="*" element={<h2>페이지를 찾을 수 없습니다.</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
