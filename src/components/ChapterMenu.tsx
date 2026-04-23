"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const chapters = [
  {
    name: "호박씬",
    description: "잣소스 잔새우 닭컨포",
    subtitle: "첫 번째 속삭임",
    poem: "The evening begins with a whisper.",
    category: "Amuse",
  },
  {
    name: "치킨베이컨잼",
    description: "카라멜라이즈드사워도우 베이컨잼 흑초마요 탈캡",
    subtitle: "황금빛 기억",
    poem: "Sweet smoke, bitter memory.",
    category: "Snack",
  },
  {
    name: "탑간파테모나카",
    description: "치킨모나카 탑간파테 라벤더살구잼 캔디드피칸",
    subtitle: "비밀의 정원",
    poem: "Where lavender meets fire.",
    category: "Bite",
  },
  {
    name: "킹스파머스계란",
    description: "장작구이닭살 치킨X.O소스 양파장아찌 캐비어 닭껍질칩",
    subtitle: "왕의 아침",
    poem: "A king's offering, preserved in salt.",
    category: "First",
  },
  {
    name: "탑김밥",
    description: "장작구이닭껍질 김퓨레 돌멩이장아찌 우니",
    subtitle: "바다와 불의 화해",
    poem: "When the sea forgives the flame.",
    category: "Second",
  },
  {
    name: "야채롤",
    description: "매실장아찌 애플민트 로메인 시소",
    subtitle: "정원의 인터미션",
    poem: "A breath between stories.",
    category: "Intermezzo",
  },
  {
    name: "장작구이통닭",
    description: "허벅지살 찜닭비호블랑 참나물",
    subtitle: "완전한 존재",
    poem: "The whole, finally revealed.",
    category: "Main",
  },
  {
    name: "탑비프웰링턴",
    description: "한우안심(1++(9+)) 치킨스터핑 한우라구소스 버섯뒤셀",
    subtitle: "왕과 닭의 동맹",
    poem: "When the finest beef bows to the chicken.",
    category: "Main",
  },
  {
    name: "써암탑육수",
    description: "쪽파 바질",
    subtitle: "정수",
    poem: "What remains when everything burns away.",
    category: "Palate",
  },
  {
    name: "볶은메밀아이스크림",
    description: "볶은메밀 모나카 모찌",
    subtitle: "마지막 기억",
    poem: "The night ends. The memory begins.",
    category: "Dessert",
  },
];

function GoldenDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "0",
      }}
    >
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(184,150,12,0.4))",
        }}
      />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="2" fill="#B8960C" opacity="0.5" />
      </svg>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(to left, transparent, rgba(184,150,12,0.4))",
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
  const isEven = index % 2 === 0;

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          gap: "2rem",
          padding: "3rem 0",
          position: "relative",
        }}
        className="chapter-card"
      >
        {/* Roman numeral watermark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingTop: "0.2rem",
            position: "relative",
          }}
        >
          {/* Large watermark behind */}
          <span
            style={{
              position: "absolute",
              top: "-1.5rem",
              right: "-1rem",
              fontFamily: "'Playfair Display', serif",
              fontSize: "6rem",
              fontWeight: 700,
              color: "rgba(184,150,12,0.05)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {ROMAN[index]}
          </span>

          {/* Small visible Roman numeral */}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "#B8960C",
              letterSpacing: "0.05em",
              zIndex: 1,
              position: "relative",
            }}
          >
            {ROMAN[index]}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.6rem",
              color: "#A89070",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              zIndex: 1,
              position: "relative",
              marginTop: "0.3rem",
            }}
          >
            {chapter.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ zIndex: 1 }}>
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "#A89070",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            {chapter.subtitle}
          </p>

          {/* Name */}
          <h3
            className="chapter-name"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
              fontWeight: 400,
              color: "#1C1917",
              letterSpacing: "0.05em",
              marginBottom: "0.65rem",
              transition: "color 0.3s ease",
            }}
          >
            {chapter.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.88rem)",
              color: "#8B7355",
              letterSpacing: "0.04em",
              fontWeight: 300,
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            {chapter.description}
          </p>

          {/* Poem line */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.82rem",
              fontStyle: "italic",
              color: "#A89070",
              letterSpacing: "0.06em",
            }}
          >
            {chapter.poem}
          </p>
        </div>
      </motion.div>

      {/* Golden divider between items */}
      {index < chapters.length - 1 && <GoldenDivider />}
    </>
  );
}

export default function ChapterMenu() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      style={{
        background: "#F5F0E8",
        padding: "4rem 0 10rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "6rem", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#1C1917",
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
              color: "#8B7355",
              letterSpacing: "0.25em",
              marginBottom: "2rem",
            }}
          >
            닭의 열 개의 이야기
          </p>
          <div
            style={{
              width: "60px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #B8960C, transparent)",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Chapter list */}
        <div>
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
            color: "#8B7355",
            textAlign: "center",
            marginTop: "4rem",
            letterSpacing: "0.1em",
            opacity: 0.65,
          }}
        >
          메뉴는 식재료 수급 상황에 따라 변경될 수 있습니다
        </motion.p>
      </div>

      <style>{`
        .chapter-card:hover .chapter-name {
          color: #B8960C !important;
        }
        .chapter-card {
          transition: background 0.3s ease;
          border-radius: 4px;
          margin: 0 -1rem;
          padding-left: calc(100px + 3rem);
          padding-right: 1rem;
        }
        .chapter-card {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2rem;
          padding: 3rem 1rem;
          position: relative;
        }
        .chapter-card:hover {
          background: rgba(184,150,12,0.025);
        }
      `}</style>
    </section>
  );
}
