"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const menuItems = [
  {
    number: "01",
    name: "호박씬",
    description: "잣소스 잔새우 닭컨포",
    category: "Amuse",
  },
  {
    number: "02",
    name: "치킨베이컨잼",
    description: "카라멜라이즈드사워도우 베이컨잼 흑초마요 탈캡",
    category: "Snack",
  },
  {
    number: "03",
    name: "탑간파테모나카",
    description: "치킨모나카 탑간파테 라벤더살구잼 캔디드피칸",
    category: "Bite",
  },
  {
    number: "04",
    name: "킹스파머스계란",
    description: "장작구이닭살 치킨X.O소스 양파장아찌 캐비어 닭껍질칩",
    category: "First",
  },
  {
    number: "05",
    name: "탑김밥",
    description: "장작구이닭껍질 김퓨레 돌멩이장아찌 우니",
    category: "Second",
  },
  {
    number: "06",
    name: "야채롤",
    description: "매실장아찌 애플민트 로메인 시소",
    category: "Intermezzo",
  },
  {
    number: "07",
    name: "장작구이통닭",
    description: "허벅지살 찜닭비호블랑 참나물",
    category: "Main",
  },
  {
    number: "08",
    name: "탑비프웰링턴",
    description: "한우안심(1++(9+)) 치킨스터핑 한우라구소스 버섯뒤셀",
    category: "Main",
  },
  {
    number: "09",
    name: "써암탑육수",
    description: "쪽파 바질",
    category: "Palate",
  },
  {
    number: "10",
    name: "볶은메밀아이스크림",
    description: "볶은메밀 모나카 모찌",
    category: "Dessert",
  },
];

function MenuItem({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: (index % 4) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        padding: "2.5rem 0",
        borderBottom: "1px solid rgba(184,150,12,0.2)",
        display: "grid",
        gridTemplateColumns: "3rem 1fr auto",
        gap: "1.5rem",
        alignItems: "start",
        cursor: "default",
      }}
      className="menu-item"
    >
      {/* Number */}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.85rem",
          color: "var(--gold)",
          letterSpacing: "0.05em",
          paddingTop: "0.25rem",
          fontStyle: "italic",
        }}
      >
        {item.number}
      </span>

      {/* Name + Description */}
      <div>
        <h3
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontWeight: 400,
            color: "var(--charcoal)",
            letterSpacing: "0.05em",
            marginBottom: "0.5rem",
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
            color: "var(--warm)",
            letterSpacing: "0.05em",
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Category */}
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.7rem",
          color: "var(--warm-light)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontStyle: "italic",
          paddingTop: "0.3rem",
          opacity: 0.7,
          whiteSpace: "nowrap",
        }}
      >
        {item.category}
      </span>
    </motion.div>
  );
}

export default function Menu() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "8rem 0",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "5rem", textAlign: "center" }}
        >
          {/* Korean chicken motif */}
          <div
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              opacity: 0.4,
              letterSpacing: "0.5em",
            }}
          >
            ✦ ✦ ✦
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}
          >
            Course Menu
          </h2>
          <p
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "0.9rem",
              color: "var(--warm)",
              letterSpacing: "0.2em",
            }}
          >
            10코스 디너
          </p>

          <div
            style={{
              width: "60px",
              height: "1px",
              background: "var(--gold)",
              margin: "2rem auto 0",
              opacity: 0.6,
            }}
          />
        </motion.div>

        {/* Menu items */}
        <div>
          {menuItems.map((item, index) => (
            <MenuItem key={item.number} item={item} index={index} />
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
            fontSize: "0.85rem",
            fontStyle: "italic",
            color: "var(--warm)",
            textAlign: "center",
            marginTop: "4rem",
            letterSpacing: "0.1em",
            opacity: 0.7,
          }}
        >
          메뉴는 식재료 수급 상황에 따라 변경될 수 있습니다
        </motion.p>
      </div>

      <style>{`
        .menu-item:hover h3 {
          color: var(--gold) !important;
          transition: color 0.3s ease;
        }
        .menu-item {
          transition: background 0.3s ease;
        }
        .menu-item:hover {
          background: rgba(184,150,12,0.03);
        }
      `}</style>
    </section>
  );
}
