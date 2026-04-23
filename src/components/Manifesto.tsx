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
        background: "#F5F0E8",
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
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #B8960C)" }} />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 0 L10.5 7.5 L18 9 L10.5 10.5 L9 18 L7.5 10.5 L0 9 L7.5 7.5 Z" fill="#B8960C" opacity="0.6" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #B8960C)" }} />
        </motion.div>

        {/* Main manifesto text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            color: "#2C2925",
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
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            fontStyle: "italic",
            color: "#8B7355",
            lineHeight: 1.8,
            letterSpacing: "0.06em",
            marginBottom: "3.5rem",
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
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #B8960C)" }} />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#B8960C", opacity: 0.5 }}>T</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #B8960C)" }} />
        </motion.div>
      </div>
    </section>
  );
}
