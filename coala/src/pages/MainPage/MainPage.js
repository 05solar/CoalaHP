// src/pages/MainPage/MainPage.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// src/images 폴더에 있는 파일을 import
import img1 from "../../images/coala1.PNG";
import img2 from "../../images/coala2.PNG";
import img3 from "../../images/coala3.PNG";
import img4 from "../../images/coala4.PNG";
import img5 from "../../images/coala5.PNG";
import img6 from "../../images/coala6.PNG";

import "./MainPage.css";

export default function MainPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  // import 한 이미지를 배열에 담아서 사용
  const carouselImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const container = containerRef.current;
    const carousel = carouselRef.current;
    const items = itemsRef.current;

    // 아이템 개수와 각도 간격을 미리 계산
    const count = carouselImages.length;
    const deg = 360 / count;
    const gap = 20;

    let isMouseDown = false;
    let currentX = 0;
    let lastX = 0;
    let moveTo = 0;
    let lastMoveTo = 0;
    const AUTO_SPEED = 0.2;

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

      // 정면에 위치한 아이템 인덱스 계산
      const angle = ((lastMoveTo % 360) + 360) % 360;
      let frontIndex = Math.round(angle / deg) % count;
      frontIndex = (count - frontIndex) % count;

      items.forEach((item, idx) => {
        item.classList.toggle("active", idx === frontIndex);
      });

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
      moveTo += currentX < lastX ? -2 : 2;
      lastX = currentX;
    }

    // 초기화 및 이벤트 바인딩
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
      // 추가로 바인딩 해제할 이벤트가 있으면 여기서 해제하세요
    };
  }, [carouselImages.length]);

  return (
    <div className="container">
      <main className="main-content">
        {/* Introduce Section */}
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

        {/* Card Section */}
        <section className="card-section">
          {["notice", "event", "board"].map(title => (
            <div className="card" key={title}>
              <div className="card-header">
                <h3>{title}</h3>
              </div>
              <ul className="card-list">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>• sample sentence {i + 1}…</li>
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
