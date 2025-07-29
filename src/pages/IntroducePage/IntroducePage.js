import "./IntroducePage.css";
import React, { useState } from "react"; 

import basePlan  from "../../images/base-plan.png";
import StandardPlan  from "../../images/standard-plan.png";
import CorePlan  from "../../images/core-plan.png";
import PlusPlan  from "../../images/plus-plan.png";



const PLANS = [
  {
    key: "base",
    img: basePlan,
    title: "Base",
    subtitle: "1학년 과정",
    details: (
      <>
        <ul>
          <li>조별활동(5인-6인)</li>
          <li>목표: 파이썬 기초 이해 및 연습</li>
          <li>진행: 매주 1회 대면 스터디, 과제 제출</li>
        </ul>
        <p>3~4월: 파이썬 기본 문법 & 연습(백준 10문제/주)</p>
        <p>5~6월: 데이터분석 기초 실습(pandas, numpy)</p>
      </>
    )
  },
  {
    key: "standard",
    img: StandardPlan,
    title: "Standard",
    subtitle: "2학년 과정",
    details: (
      <>
        <ul>
          <li>조별활동(3인-4인)</li>
          <li>목표: 머신러닝 이론 학습 및 실습</li>
          <li>진행: Jcloud·Colab 활용 프로젝트</li>
        </ul>
      </>
    )
  },
  {
    key: "core",
    img: CorePlan,
    title: "Core",
    subtitle: "3학년 과정",
    details: (
      <>
        <ul>
          <li>조별 프로젝트 중심 실습</li>
          <li>목표: AWS Academy 등 클라우드 ML 활용</li>
          <li>예시 : 코알라 동아리 홈페이지 제작 </li>

        </ul>
      </>
    )
  },
  {
    key: "plus",
    img: PlusPlan,
    title: "Plus",
    subtitle: "4학년 이상",
    details: (
      <>
        <ul>
          <li>자유주제 프로젝트</li>
          <li>목표: 취업·대학원 준비, 오픈소스 기여</li>
        </ul>
      </>
    )
  }
];


export default function IntroducePage() {

  const [active, setActive] = useState(null); 

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
          다양한 학습 자료와 커뮤니티 기능을 통해 소통하며 성장할 수 있도록 지원합니다.
        </p>

        <ul className="intro-features">
          <li>✔️ 학년에 맞는 스터디를 통해 단계적 성장 가능</li>
          <li>✔️ 질답게시판으로 실시간 질문/답변 가능</li>
          <li>✔️ 동아리 내 팀프로젝트로 나만의 포트폴리오 관리</li>
        </ul>
      </div>

      {/* ───────────────────────────────────────────── 
         COALA_2025 소개 섹션
      ────────────────────────────────────────────── */}
      <div className="coala-section">
        <h2>COALA_2025</h2>

        <section className="coala-intro">
          <h3> 소개</h3>
          <blockquote>
            <strong>컴퓨터인공지능학부 과동아리 코알라입니다.</strong>
          </blockquote>
          <ul>
            <li>Beginner / Standard / Plus / Pro 과정을 준비했습니다.</li>
          </ul>

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
        </section>

        <hr />

      <div className="coala-plan">
        <h3>활동 계획</h3>
        <div className={`plan-grid ${active !== null ? "has-active" : ""}`}>
          {PLANS.map((plan, i) => (
              <div
                key={plan.key}
                className={`plan-card ${plan.key} ${active === i ? "expanded" : ""}`}
                onClick={() => setActive(active === i ? null : i)}
              >
              <div className="plan-arrow">➔</div>
              <img src={plan.img} alt={plan.title} />
              <div className="plan-label">
                <strong>{plan.title}</strong>
                <span>{plan.subtitle}</span>
              </div>
              {active === i && (
                <div className="plan-details">{plan.details}</div>
              )}
            </div>
          ))}
        </div>
      </div>

         <div className="awards-section">
        <h2>🚩 이력</h2>
        <p className="awards-sub">수상 / 프로젝트</p>
        <div className="awards-list">
          <h3>교내</h3>
          <ul>
            <li>2022 교내 ACM‑ICPC 금상·은상 수상</li>
            <li>2023 교내 제1회 Hacking Contest 특별상 수상</li>
            <li>2024 제2회 오픈소스 해커톤 최우수상 수상</li>
          </ul>
          <h3>교외</h3>
          <ul>
            <li>2020 ACM‑ICPC 국내 본선 49위</li>
            <li>2020 에너지 ICT 융합보안 해킹경진대회 대학생부 1위</li>
            <li>2021 ACM‑ICPC 국내 본선 51위</li>
            <li>2022 부채널정보분석 경진대회 소장상</li>
            <li>2022 암호분석 경진대회 특별상 수상</li>
            <li>2022 지역ICT이노베이션스퀘어 AI코딩 경진대회 최우수상</li>
            <li>2023 전주ICT이노베이션스퀘어 AI코딩대회 대상(1위)/우수상</li>
            <li>2023 제11회 전국 K‑해커톤 우수상 수상</li>
          </ul>
        </div>
      </div>
    </div>
      </div>
  
    
  );
}
