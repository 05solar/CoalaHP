import React from "react";
import "./IntroducePage.css";

export default function IntroducePage() {
  return (
    <div className="introduce-page">
      {/* 상단 배너 */}
      <div className="intro-banner" />

      {/* 본문 컨텐츠 */}
      <div className="intro-content">
        <h1 className="intro-title">COALA에 오신 것을 환영합니다</h1>
        <p className="intro-text">
          COALA는 여러분의 코딩 여정을 함께하는 동반자입니다.
          <br />
          다양한 학습 자료와 커뮤니티 기능을 통해 성장할 수 있도록 지원합니다.
        </p>

        <ul className="intro-features">
          <li>✔️ 직관적인 튜토리얼과 예제</li>
          <li>✔️ 실시간 질문/답변 기능</li>
          <li>✔️ 나만의 포트폴리오 관리</li>
        </ul>
      </div>

      {/* ───────────────────────────────────────────── 
         COALA_2025 소개 섹션
      ────────────────────────────────────────────── */}
      <div className="coala-section">
        <h2>COALA_2025</h2>

        <section className="coala-intro">
          <h3>🥕 소개</h3>
          <blockquote>
            <strong>컴퓨터인공지능학부 과동아리 코알라입니다.</strong>
          </blockquote>
          <ul>
            <li>Beginner / Standard / Plus / Pro 과정을 준비했습니다.</li>
            <li>코알라 스티커 굿즈 제공 예정 <small>(수요에 따라 품목 추가 예정)</small></li>
          </ul>
          <div className="coala-image">
            <img src="/images/coala-sticker.png" alt="코알라 스티커 예시" />
          </div>
          <ul>
            <li>모집기간: ~ 2025년 3월 9일(일요일)</li>
            <li>
              🏦 문의링크:{" "}
              <a href="https://open.kakao.com/o/sJTIwj1f" target="_blank" rel="noreferrer">
                ☎️ 문의 오픈채팅
              </a>
            </li>
            <li>
              🥅 지원서:{" "}
              <a href="https://forms.gle/6RGcdVj2r4j5xAkD7" target="_blank" rel="noreferrer">
                🎟️ 2025-1학기 코알라 신입부원 모집
              </a>
            </li>
          </ul>
          <p className="tags">#코딩 #인공지능 #클라우드</p>
          <small className="updated">2025_02_20_updated</small>
        </section>

        <hr />

        <section className="coala-plan">
          <h3>🚗 활동 계획</h3>

          <article>
            <h4>⛽ Base (1학년·비전공자)</h4>
            <img src="/images/base-plan.png" alt="Base 과정 이미지" />
            <ul>
              <li>조별활동(5인-6인)</li>
              <li>목표: 파이썬 기초 이해 및 연습</li>
              <li>진행: 매주 1회 대면 스터디, 과제 제출</li>
            </ul>
            <p>3월~4월: 파이썬 기본 문법 & 연습 (백준 10문제/주)</p>
            <p>5월~6월: 데이터분석 기초 실습 (pandas, numpy)</p>
          </article>

          <article>
            <h4>🛝 Standard (2학년)</h4>
            <img src="/images/standard-plan.png" alt="Standard 과정 이미지" />
            <ul>
              <li>조별활동(3인-4인)</li>
              <li>목표: 머신러닝 이론 학습 및 실습</li>
              <li>진행: Jcloud·Colab 활용 프로젝트</li>
            </ul>
          </article>

          <article>
            <h4>📜 Core (3학년)</h4>
            <img src="/images/core-plan.png" alt="Core 과정 이미지" />
            <ul>
              <li>조별 프로젝트 중심 실습</li>
              <li>목표: AWS Academy 등 클라우드 ML 활용</li>
            </ul>
          </article>

          <article>
            <h4>🎞️ Plus (4학년~)</h4>
            <img src="/images/plus-plan.png" alt="Plus 과정 이미지" />
            <ul>
              <li>자유주제 프로젝트</li>
              <li>목표: 취업·대학원 준비, 오픈소스 기여</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
