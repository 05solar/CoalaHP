import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navRef  = useRef(null);
  const authRef = useRef(null);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    // 짧은 delay 후 클래스 토글 (animate 등 CSS 활용 시)
    setTimeout(() => {
      navRef.current?.classList.toggle('show', next);
      authRef.current?.classList.toggle('show', next);
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
      >
        ☰
      </button>

      <nav ref={navRef} className={`nav ${isOpen ? 'show' : ''}`}>
        {[
          { label: '소개',        to: '/introduce'      },
          { label: '공지사항',    to: '/board/notice'   },
          { label: '질답게시판',  to: '/board/qna'      },
          { label: '자유게시판',  to: '/board/free'     },
          { label: '게임',        to: '/game'           },
          { label: '회원',        to: '/member'         },
        ].map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="nav-link"
            onClick={() => navigateTo(to)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div ref={authRef} className={`auth ${isOpen ? 'show' : ''}`}>
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
