import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

import Header from './components/Header';
import MainPage   from './pages/MainPage/MainPage';
//import NoticePage from './pages/NoticePage/NoticePage';
//import EventPage  from './pages/EventPage/EventPage';
import AuthPage from "./pages/AuthPage/AuthPage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"       element={<MainPage />}   />
          <Route path="/login"  element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          {/* 추가 페이지도 동일하게 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
