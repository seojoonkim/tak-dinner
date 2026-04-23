"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function EventInvite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "radial-gradient(ellipse at center bottom, #3A0E00 0%, #1A0500 40%, #000 100%)",
        padding: "10rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fire glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "50%",
          background: "radial-gradient(ellipse at center bottom, rgba(255,69,0,0.2) 0%, rgba(255,140,0,0.08) 35%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top fire embers */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -200 - i * 15],
            x: Math.sin(i * 1.5) * 60,
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#FF4500" : "#FFD700",
            left: `${20 + (i / 12) * 60}%`,
            bottom: "15%",
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Background watermark rooster */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.04,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <svg width="600" height="668" viewBox="0 0 180 200" fill="none">
          <path d="M30 120 Q10 90 15 60 Q20 50 25 65 Q15 85 35 110" stroke="#FFF8F0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M50 135 Q55 95 80 80 Q95 72 115 78 Q138 85 145 110 Q150 130 140 148 Q125 165 100 168 Q72 168 58 152 Q50 143 50 135Z" stroke="#FFF8F0" strokeWidth="1.5" fill="#FFF8F0" fillOpacity="0.3" />
          <circle cx="100" cy="45" r="18" stroke="#FFF8F0" strokeWidth="1.5" fill="#FFF8F0" fillOpacity="0.2" />
          <path d="M92 30 Q88 20 92 15 Q96 10 98 18 Q99 10 103 8 Q107 10 105 18 Q107 12 111 14 Q114 20 109 27" stroke="#FFF8F0" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "4rem",
            justifyContent: "center",
          }}
        >
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to right, transparent, #FF4500)" }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              color: "#FF4500",
              textTransform: "uppercase",
            }}
          >
            Private Dinner
          </span>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to left, transparent, #FF4500)" }} />
        </motion.div>

        {/* Witness text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            fontStyle: "italic",
            color: "rgba(255,248,240,0.5)",
            letterSpacing: "0.15em",
            marginBottom: "2rem",
          }}
        >
          오늘 밤 당신은 목격자가 됩니다
        </motion.p>

        {/* Invitation card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid rgba(255,69,0,0.3)",
            borderRadius: "6px",
            padding: "4rem 3rem",
            position: "relative",
            background: "rgba(255,248,240,0.03)",
            boxShadow: "inset 0 0 60px rgba(255,69,0,0.04)",
          }}
        >
          {/* Corner ornaments */}
          {(["top-left", "top-right", "bottom-left", "bottom-right"] as const).map((corner) => (
            <div
              key={corner}
              style={{
                position: "absolute",
                [corner.includes("top") ? "top" : "bottom"]: "12px",
                [corner.includes("left") ? "left" : "right"]: "12px",
                width: "16px",
                height: "16px",
                borderTop: corner.includes("top") ? "1px solid #FF4500" : "none",
                borderBottom: corner.includes("bottom") ? "1px solid #FF4500" : "none",
                borderLeft: corner.includes("left") ? "1px solid #FF4500" : "none",
                borderRight: corner.includes("right") ? "1px solid #FF4500" : "none",
                opacity: 0.5,
              }}
            />
          ))}

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#FF4500",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            You are cordially invited
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              fontWeight: 700,
              color: "#FFF8F0",
              letterSpacing: "0.2em",
              lineHeight: 1,
              marginBottom: "2rem",
              textShadow: "0 0 60px rgba(255,140,0,0.3)",
            }}
          >
            TAK
          </h2>

          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #FF4500, #FFD700, #FF4500, transparent)",
              margin: "0 auto 2.5rem",
              boxShadow: "0 0 12px rgba(255,69,0,0.5)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "24px", height: "1px", background: "rgba(255,69,0,0.4)" }} />
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: "#FFF8F0",
                  letterSpacing: "0.15em",
                  fontWeight: 300,
                }}
              >
                2026년 4월 23일 목요일
              </p>
              <div style={{ width: "24px", height: "1px", background: "rgba(255,69,0,0.4)" }} />
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                fontStyle: "italic",
                color: "rgba(255,140,0,0.7)",
                letterSpacing: "0.1em",
              }}
            >
              Thursday, April 23, 2026
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "0.85rem",
                color: "rgba(255,248,240,0.5)",
                letterSpacing: "0.15em",
                fontWeight: 300,
                marginTop: "0.5rem",
              }}
            >
              10 Courses · Wood-Fire Kitchen
            </p>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,69,0,0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                fontStyle: "italic",
                color: "rgba(255,248,240,0.65)",
                letterSpacing: "0.08em",
                lineHeight: 2,
                marginBottom: "1rem",
              }}
            >
              한 마리의 닭이 열 개의 우주가 되는 밤.<br />
              이 밤을 누군가에게 설명하려 하지 마세요.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                fontStyle: "italic",
                color: "rgba(255,69,0,0.6)",
                letterSpacing: "0.08em",
              }}
            >
              당신도 믿지 않을 테니까.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
