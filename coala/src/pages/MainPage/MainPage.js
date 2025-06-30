import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운에 애니메이션을 걸기 위한 ref
  const navRef = useRef(null);
  const authRef = useRef(null);

  const toggleMenu = () => {
    // 1) isOpen 상태 먼저 토글
    setIsOpen(open => {
      const next = !open;

      // 2) 다음 렌더링 사이클 끝난 뒤(show 클래스 토글)
      setTimeout(() => {
        if (navRef.current)  navRef.current.classList.toggle("show", next);
        if (authRef.current) authRef.current.classList.toggle("show", next);
      }, 0);

      return next;
    });
  };
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  // 캐러셀 초기화
  useEffect(() => {
    const container = containerRef.current;
    const carousel  = carouselRef.current;
    const items     = itemsRef.current;
    let isMouseDown = false;
    let currentX    = 0;
    let lastX       = 0;
    let moveTo      = 0;
    let lastMoveTo  = 0;
    const AUTO_SPEED = 0.2; // 자동 회전 속도 (1당 360°/초 비례)

    // 화면 크기·아이템 수에 맞춰 Z 축 거리, 각도 계산
    function setupCarousel() {
      const gap = 20;
      const length = items.length;
      const deg = 360 / length;
      const w      = container.offsetWidth;
      const tz = w / 2 / Math.tan(Math.PI / length) + gap;
      items.forEach((item, i) => {
        item.style.setProperty("--rotatey", `${deg * i}deg`);
        item.style.setProperty("--tz", `${tz}px`);
      });
    }

    function lerp(a, b, n) {
      return n * (a - b) + b;
    }

    function update() {
      if (!isMouseDown) {
        moveTo += AUTO_SPEED;
      }
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      carousel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
      requestAnimationFrame(update);
    }

    function onResize() {
      setupCarousel();
    }

    function onMouseDown() {
      isMouseDown = true;
      carousel.style.cursor = "grabbing";
    }
    function onMouseUp() {
      isMouseDown = false;
      carousel.style.cursor = "grab";
    }
    function onMouseMove(e) {
      if (!isMouseDown) return;
      currentX = e.clientX;
      moveTo += (currentX < lastX ? -2 : 2);
      lastX = currentX;
    }

    // 이벤트 바인딩
    setupCarousel();
    update();
    window.addEventListener("resize", onResize);
    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mouseup", onMouseUp);
    carousel.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", () => (isMouseDown = false));

    // 터치 대응
    carousel.addEventListener("touchstart", onMouseDown);
    carousel.addEventListener("touchend", onMouseUp);
    carousel.addEventListener("touchmove", e => onMouseMove(e.touches[0]));

    return () => {
      window.removeEventListener("resize", onResize);
      //TODO: 나머지 이벤트 해제
    };
  }, []);

  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");
  const goToHome = () => navigate("/");

  return (
    <div className="container">
      {/* Header */}
      <header className={`header${isOpen ? " open" : ""}`}>
        <div className="logo-area">
          <img src="/logo.png" alt="전북대학교 로고" className="logo" />
          <span className="title" onClick={goToHome} style={{ cursor: "pointer" }}>
            COALA
          </span>
        </div>
        <button className="menu-toggle" onClick={()=>setIsOpen(o=>!o)}>
          ☰
        </button>
        <nav className={isOpen ? 'nav open' : 'nav'}>
          <a href="#">Introduce</a>
          <a href="#">Notice</a>
          <a href="#">Board</a>
          <a href="#">Event</a>
          <a href="#">Game</a>
          <a href="#">Member</a>
        </nav>

        {/*로그인/회원가입 버튼으로 라우팅 처리 */}
        <div className={isOpen ? 'auth open' : 'auth'}>
          <button onClick={handleLoginClick} className="link-button">LOGIN</button>
          {" | "}
          <button onClick={handleSignupClick} className="link-button">SIGNUP</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Introduce Section */}
        <section className="introduce-section">
          <div ref={containerRef} className="container-carrossel">
            <div ref={carouselRef} className="carrossel">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  ref={el => itemsRef.current[i] = el}
                  className="carrossel-item"
                >
                  {/* 원한다면 이미지나 내용 넣기 */}
                </div>
              ))}
            </div>
          </div>
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
