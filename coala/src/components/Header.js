import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const authRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(open => !open);
    setTimeout(() => {
      navRef.current?.classList.toggle('show', !isOpen);
      authRef.current?.classList.toggle('show', !isOpen);
    }, 0);
  };

  const navigateTo = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="logo-area" onClick={() => navigateTo('/')}>
        COALA
      </div>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >☰</button>

      <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`}>
              {[
                { path: 'introduce', label: '소개' },
                { path: 'notice',    label: '공지사항' },
                { path: 'board',     label: '게시판' },
                { path: 'event',     label: '이벤트' },
                { path: 'game',      label: '게임' },
                { path: 'member',    label: '회원' },
               ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={`/${path}`}
                  className="nav-link"
                  onClick={() => navigateTo(`/${path}`)}
                >
                  {label}
                </Link>
              ))}
      </nav>

      <div ref={authRef} className={`auth ${isOpen ? 'open' : ''}`}>
        <Link
          to="/login"
          className="link-button"
          onClick={() => navigateTo('/login')}
        >
          로그인
        </Link>
        <Link
          to="/signup"
          className="link-button"
          onClick={() => navigateTo('/signup')}
        >
          회원가입
        </Link>
      </div>
    </header>
  );
}
