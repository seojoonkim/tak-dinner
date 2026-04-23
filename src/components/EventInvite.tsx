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
        background: "#1C1917",
        padding: "10rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gold glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(184,150,12,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Background watermark rooster */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.025,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <svg width="600" height="668" viewBox="0 0 180 200" fill="none">
          <path d="M30 120 Q10 90 15 60 Q20 50 25 65 Q15 85 35 110" stroke="#F5F0E8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M50 135 Q55 95 80 80 Q95 72 115 78 Q138 85 145 110 Q150 130 140 148 Q125 165 100 168 Q72 168 58 152 Q50 143 50 135Z" stroke="#F5F0E8" strokeWidth="1.5" fill="#F5F0E8" fillOpacity="0.3" />
          <circle cx="100" cy="45" r="18" stroke="#F5F0E8" strokeWidth="1.5" fill="#F5F0E8" fillOpacity="0.2" />
          <path d="M92 30 Q88 20 92 15 Q96 10 98 18 Q99 10 103 8 Q107 10 105 18 Q107 12 111 14 Q114 20 109 27" stroke="#F5F0E8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M88 80 Q92 65 96 55 Q100 48 102 55 Q105 65 108 78" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
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
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #B8960C)" }} />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              color: "#B8960C",
              textTransform: "uppercase",
            }}
          >
            Private Dinner
          </span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #B8960C)" }} />
        </motion.div>

        {/* Invitation card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: "1px solid rgba(184,150,12,0.25)",
            borderRadius: "4px",
            padding: "4rem 3rem",
            position: "relative",
            background: "rgba(245,240,232,0.03)",
          }}
        >
          {/* Corner ornaments */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map((corner) => (
            <div
              key={corner}
              style={{
                position: "absolute",
                [corner.includes("top") ? "top" : "bottom"]: "12px",
                [corner.includes("left") ? "left" : "right"]: "12px",
                width: "16px",
                height: "16px",
                borderTop: corner.includes("top") ? "1px solid #B8960C" : "none",
                borderBottom: corner.includes("bottom") ? "1px solid #B8960C" : "none",
                borderLeft: corner.includes("left") ? "1px solid #B8960C" : "none",
                borderRight: corner.includes("right") ? "1px solid #B8960C" : "none",
                opacity: 0.5,
              }}
            />
          ))}

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#B8960C",
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
              fontWeight: 400,
              color: "#F5F0E8",
              letterSpacing: "0.2em",
              lineHeight: 1,
              marginBottom: "2rem",
            }}
          >
            tak
          </h2>

          <div
            style={{
              width: "50px",
              height: "1px",
              background: "#B8960C",
              margin: "0 auto 2.5rem",
              opacity: 0.6,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#8B7355", opacity: 0.5 }} />
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: "#F5F0E8",
                  letterSpacing: "0.15em",
                  fontWeight: 300,
                }}
              >
                2026년 4월 23일 목요일
              </p>
              <div style={{ width: "24px", height: "1px", background: "#8B7355", opacity: 0.5 }} />
            </div>

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                fontStyle: "italic",
                color: "#A89070",
                letterSpacing: "0.1em",
              }}
            >
              Thursday, April 23, 2026
            </p>

            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "0.85rem",
                color: "#8B7355",
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
              borderTop: "1px solid rgba(184,150,12,0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.9rem",
                fontStyle: "italic",
                color: "#A89070",
                letterSpacing: "0.08em",
                lineHeight: 1.8,
              }}
            >
              한 마리의 닭이 열 개의 우주가 되는 밤.<br />
              이 밤을 기억하라.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
