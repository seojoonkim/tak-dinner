"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Manifesto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFF8F0",
        padding: "10rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle paper texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Opening ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to right, transparent, #FF4500)" }} />
          <span style={{ fontSize: "1.4rem" }}>🔥</span>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to left, transparent, #FF4500)" }} />
        </motion.div>

        {/* Main manifesto text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "#0D0D0D",
            lineHeight: 2.4,
            letterSpacing: "0.1em",
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          tak은 단순한 레스토랑이 아닙니다.<br />
          장작불 위에서 탄생하는 닭의 우주,<br />
          오너 셰프가 닭 한 마리에서<br />
          열 개의 이야기를 만들어내는 하룻밤.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)",
            fontStyle: "italic",
            color: "#FF4500",
            lineHeight: 1.8,
            letterSpacing: "0.06em",
            marginBottom: "3.5rem",
            textShadow: "0 0 40px rgba(255,69,0,0.15)",
          }}
        >
          닭이 지배하는 밤,<br />당신을 초대합니다.
        </motion.p>

        {/* Closing ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to right, transparent, #FF4500)" }} />
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            color: "#FF4500",
            fontWeight: 700,
          }}>T</span>
          <div style={{ flex: 1, height: "2px", background: "linear-gradient(to left, transparent, #FF4500)" }} />
        </motion.div>
      </div>
    </section>
  );
}
