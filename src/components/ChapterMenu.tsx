"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const chapters = [
  {
    name: "호박씬",
    description: "잣소스 잔새우 닭컨포",
    engTitle: '"THE WHISPER"',
    poem: "첫 번째 한 입이 당신의 저녁을 납치합니다.",
    poemEn: "The first bite will kidnap your evening.",
    category: "Amuse",
  },
  {
    name: "치킨베이컨잼",
    description: "카라멜라이즈드사워도우 베이컨잼 흑초마요 탈캡",
    engTitle: '"THE GOLDEN SIN"',
    poem: "죄책감 없는 죄악. 황금빛으로 포장된.",
    poemEn: "Guilt-free guilt. Wrapped in gold.",
    category: "Snack",
  },
  {
    name: "탑간파테모나카",
    description: "치킨모나카 탑간파테 라벤더살구잼 캔디드피칸",
    engTitle: '"THE SECRET"',
    poem: "닭의 간이 당신에게 비밀을 털어놓습니다.",
    poemEn: "The liver confesses its darkest secrets.",
    category: "Bite",
  },
  {
    name: "킹스파머스계란",
    description: "장작구이닭살 치킨X.O소스 양파장아찌 캐비어 닭껍질칩",
    engTitle: '"THE CORONATION"',
    poem: "왕의 알. 닭껍질로 만든 왕관. 캐비어로 봉인.",
    poemEn: "The king's egg. The crown of crispy skin. Sealed in caviar.",
    category: "First",
  },
  {
    name: "탑김밥",
    description: "장작구이닭껍질 김퓨레 돌멩이장아찌 우니",
    engTitle: '"THE OCEAN INCIDENT"',
    poem: "바다가 불과 사랑에 빠진 날의 기록.",
    poemEn: "The day the ocean fell for fire.",
    category: "Second",
  },
  {
    name: "야채롤",
    description: "매실장아찌 애플민트 로메인 시소",
    engTitle: '"THE INTERMISSION"',
    poem: "숨 고르기. 嵐の前の静けさ.",
    poemEn: "A breath before the storm.",
    category: "Intermezzo",
  },
  {
    name: "장작구이통닭",
    description: "허벅지살 찜닭비호블랑 참나물",
    engTitle: '"THE REVELATION"',
    poem: "드디어, 본 모습을 드러내다.",
    poemEn: "Finally. The whole truth.",
    category: "Main",
  },
  {
    name: "탑비프웰링턴",
    description: "한우안심(1++(9+)) 치킨스터핑 한우라구소스 버섯뒤셀",
    engTitle: '"THE ALLIANCE"',
    poem: "최고의 소가 최고의 닭에게 무릎 꿇다.",
    poemEn: "The finest beef kneels before the chicken.",
    category: "Main",
  },
  {
    name: "써암탑육수",
    description: "쪽파 바질",
    engTitle: '"THE ESSENCE"',
    poem: "모든 것이 타고 남은 것. 이것이 진짜다.",
    poemEn: "What remains when everything burns away.",
    category: "Palate",
  },
  {
    name: "볶은메밀아이스크림",
    description: "볶은메밀 모나카 모찌",
    engTitle: '"THE AFTERLIFE"',
    poem: "닭은 갔다. 하지만 당신은 기억한다.",
    poemEn: "The chicken is gone. But you will remember.",
    category: "Dessert",
  },
];

function FireDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        margin: "0",
      }}
    >
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,69,0,0.3))",
        }}
      />
      <span style={{ fontSize: "0.7rem", opacity: 0.6 }}>🔥</span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to left, transparent, rgba(255,69,0,0.3))",
        }}
      />
    </div>
  );
}

function ChapterCard({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isDark = index % 2 !== 0; // odd = dark card

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isDark ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`chapter-card ${isDark ? "chapter-dark" : "chapter-light"}`}
        style={{
          display: "grid",
          gridTemplateColumns: "90px 1fr",
          gap: "1.5rem",
          padding: "2.5rem 1.5rem",
          position: "relative",
          borderRadius: "6px",
          background: isDark ? "#0D0D0D" : "#FFF8F0",
          marginBottom: "0",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Large watermark Roman numeral */}
        <span
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "1rem",
            fontFamily: "'Playfair Display', serif",
            fontSize: "5.5rem",
            fontWeight: 700,
            color: isDark ? "rgba(255,140,0,0.06)" : "rgba(255,69,0,0.06)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {ROMAN[index]}
        </span>

        {/* Left: Roman numeral + category */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "0.2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: isDark ? "#FF8C00" : "#FF4500",
              letterSpacing: "0.05em",
            }}
          >
            {ROMAN[index]}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.58rem",
              color: isDark ? "rgba(255,140,0,0.5)" : "rgba(255,69,0,0.5)",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginTop: "0.25rem",
            }}
          >
            {chapter.category}
          </span>
        </div>

        {/* Right: Content */}
        <div style={{ zIndex: 1 }}>
          {/* English dramatic title */}
          <p
            className="chapter-eng-title"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
              fontStyle: "italic",
              color: isDark ? "#FF8C00" : "#FF4500",
              letterSpacing: "0.15em",
              marginBottom: "0.4rem",
              transition: "color 0.3s ease",
            }}
          >
            {chapter.engTitle}
          </p>

          {/* Korean name */}
          <h3
            className="chapter-name"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: isDark ? "#FFF8F0" : "#0D0D0D",
              letterSpacing: "0.05em",
              marginBottom: "0.5rem",
              transition: "color 0.3s ease",
            }}
          >
            {chapter.name}
          </h3>

          {/* Ingredients */}
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(0.72rem, 1.4vw, 0.85rem)",
              color: isDark ? "rgba(255,248,240,0.5)" : "rgba(13,13,13,0.5)",
              letterSpacing: "0.04em",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: "0.9rem",
            }}
          >
            {chapter.description}
          </p>

          {/* Korean poem */}
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(0.78rem, 1.6vw, 0.9rem)",
              color: isDark ? "rgba(255,248,240,0.85)" : "#0D0D0D",
              letterSpacing: "0.04em",
              lineHeight: 1.8,
              marginBottom: "0.3rem",
              fontWeight: 300,
            }}
          >
            {chapter.poem}
          </p>

          {/* English poem */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
              fontStyle: "italic",
              color: isDark ? "rgba(255,140,0,0.6)" : "rgba(255,69,0,0.6)",
              letterSpacing: "0.06em",
            }}
          >
            {chapter.poemEn}
          </p>
        </div>
      </motion.div>

      {/* Fire divider between items */}
      {index < chapters.length - 1 && <FireDivider />}
    </>
  );
}

export default function ChapterMenu() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      style={{
        background: "#FFF8F0",
        padding: "4rem 0 10rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "5rem", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#0D0D0D",
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
            }}
          >
            The Ten Chapters
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "0.85rem",
              color: "#FF4500",
              letterSpacing: "0.25em",
              marginBottom: "2rem",
            }}
          >
            닭의 열 개의 이야기
          </p>
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #FF4500, #FFD700, #FF4500, transparent)",
              margin: "0 auto",
              boxShadow: "0 0 10px rgba(255,69,0,0.3)",
            }}
          />
        </motion.div>

        {/* Chapter list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {chapters.map((chapter, index) => (
            <ChapterCard key={index} chapter={chapter} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.82rem",
            fontStyle: "italic",
            color: "rgba(13,13,13,0.4)",
            textAlign: "center",
            marginTop: "4rem",
            letterSpacing: "0.1em",
          }}
        >
          메뉴는 식재료 수급 상황에 따라 변경될 수 있습니다
        </motion.p>
      </div>

      <style>{`
        .chapter-card {
          cursor: default;
        }
        .chapter-dark:hover {
          box-shadow: 0 0 0 1px rgba(255,140,0,0.25), 0 8px 40px rgba(255,69,0,0.12);
          transform: translateY(-1px);
        }
        .chapter-light:hover {
          box-shadow: 0 0 0 1px rgba(255,69,0,0.15), 0 8px 40px rgba(255,69,0,0.06);
          transform: translateY(-1px);
        }
        .chapter-dark:hover .chapter-name {
          color: #FF8C00 !important;
        }
        .chapter-light:hover .chapter-name {
          color: #FF4500 !important;
        }
        .chapter-dark:hover .chapter-eng-title {
          color: #FFD700 !important;
        }
        .chapter-light:hover .chapter-eng-title {
          color: #FF4500 !important;
        }
      `}</style>
    </section>
  );
}
