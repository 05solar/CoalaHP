// src/pages/MainPage/MainPage.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// 3D 캐로셀 이미지
import img1 from "../../images/coala1.PNG";
import img2 from "../../images/coala2.PNG";
import img3 from "../../images/coala3.PNG";
import img4 from "../../images/coala4.PNG";
import img5 from "../../images/coala5.PNG";
import img6 from "../../images/coala6.PNG";

// 슬라이더 배너 이미지
import slide1 from "../../images/slide1.PNG";
import slide2 from "../../images/slide2.PNG";
import slide3 from "../../images/slide3.PNG";

import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();

  // 3D 캐로셀 refs
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  // 슬라이더 배너 상태
  const [slideIndex, setSlideIndex] = useState(0);
  const slideImages = [slide1, slide2, slide3];
  const totalSlides = slideImages.length;

  const prevSlide = () => setSlideIndex(idx => (idx - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setSlideIndex(idx => (idx + 1) % totalSlides);

  // 3D 캐로셀 이미지 배열
  const carouselImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;
    const items = itemsRef.current;

    const count = carouselImages.length;
    const deg = 360 / count;
    const gap = 20;
    let isMouseDown = false;
    let currentX = 0;
    let lastX = 0;
    let moveTo = 0;
    let lastMoveTo = 0;
    const AUTO_SPEED = 0.05;

    function setupCarousel() {
      const w = container.offsetWidth;
      const tz = w / 2 / Math.tan(Math.PI / count) + gap;
      items.forEach((item, i) => {
        item.style.setProperty("--rotatey", `${deg * i}deg`);
        item.style.setProperty("--tz", `${tz}px`);
      });
    }

    function lerp(a, b, n) {
      return n * (a - b) + b;
    }

    function update() {
      if (!isMouseDown) moveTo += AUTO_SPEED;
      lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
      carousel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
      const angle = ((lastMoveTo % 360) + 360) % 360;
      const shifted = (angle + deg * 0.5) % 360;
      let frontIndex = Math.floor(shifted / deg) % count;
      frontIndex = (count - frontIndex) % count;
      items.forEach((item, idx) => {
        item.classList.toggle("active", idx === frontIndex);
      });
      requestAnimationFrame(update);
    }

    function onResize() { setupCarousel(); }
    function onMouseDown() { isMouseDown = true; carousel.style.cursor = "grabbing"; }
    function onMouseUp() { isMouseDown = false; carousel.style.cursor = "grab"; }
    function onMouseMove(e) {
      if (!isMouseDown) return;
      currentX = e.clientX;
      moveTo += currentX < lastX ? -2 : 2;
      lastX = currentX;
    }

    setupCarousel();
    update();
    window.addEventListener("resize", onResize);
    carousel.addEventListener("mousedown", onMouseDown);
    carousel.addEventListener("mouseup", onMouseUp);
    carousel.addEventListener("mousemove", onMouseMove);
    carousel.addEventListener("touchstart", onMouseDown);
    carousel.addEventListener("touchend", onMouseUp);
    carousel.addEventListener("touchmove", e => onMouseMove(e.touches[0]));
    container.addEventListener("mouseleave", () => (isMouseDown = false));

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [carouselImages.length]);

  return (
    <div className="container">
      <main className="main-content">

        {/* 3D 캐로셀 섹션 */}
        <section className="introduce-section">
          <div ref={containerRef} className="container-carrossel">
            <div ref={carouselRef} className="carrossel">
              {carouselImages.map((src, i) => (
                <div
                  key={i}
                  ref={el => (itemsRef.current[i] = el)}
                  className="carrossel-item"
                >
                  <img src={src} alt={`carousel-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 중간 소개 섹션 추가 */}
        <section className="mid-intro">
          <div className="mid-intro-content">
            <h2>
              <span className="highlight-co">CO</span>ding +{' '}
              <span className="highlight-al">AL</span>gorithm +{' '}
              <span className="highlight-al">A</span>cademic club
            </h2>
            <p>
              COALA는 누구나 쉽고 재미있게 코딩을 배우고,
              <br />
              함께 성장하며 꿈을 실현할 수 있도록 돕습니다.
            </p>
          </div>
        </section>

        {/* 카드 섹션 */}
        <section className="card-section">
          {['notice', 'event', 'board'].map(title => (
            <div className="card" key={title}>
              <div className="card-header"><h3>{title}</h3></div>
              <ul className="card-list">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>• sample sentence {i + 1}…</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 슬라이더 배너 섹션 */}
        <section className="slider-container">
          <button className="slider-btn prev" onClick={prevSlide}>&lt;</button>
          <div className="slider">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slideImages.map((src, i) => (
                <div className="slide" key={i}>
                  <img src={src} alt={`slide-${i}`} className="slide-image" />
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn next" onClick={nextSlide}>&gt;</button>
        </section>

      </main>
    </div>
  );
}
