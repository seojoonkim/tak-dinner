"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      style={{
        background: "#1C1917",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #B8960C, transparent)",
          transformOrigin: "left",
        }}
      />

      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        {/* Divider with rooster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(139,115,85,0.4))" }} />
          <svg width="28" height="32" viewBox="0 0 180 200" fill="none" opacity="0.35">
            <path d="M50 135 Q55 95 80 80 Q95 72 115 78 Q138 85 145 110 Q150 130 140 148 Q125 165 100 168 Q72 168 58 152 Q50 143 50 135Z" stroke="#F5F0E8" strokeWidth="3" fill="none" />
            <circle cx="100" cy="45" r="18" stroke="#F5F0E8" strokeWidth="3" fill="none" />
            <path d="M92 30 Q88 20 92 15 Q96 10 98 18 Q103 8 107 14 Q114 20 109 27" stroke="#F5F0E8" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M88 80 Q96 55 108 78" stroke="#F5F0E8" strokeWidth="3" fill="none" />
          </svg>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(139,115,85,0.4))" }} />
        </motion.div>

        {/* tak logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 400,
              color: "#F5F0E8",
              letterSpacing: "0.25em",
              lineHeight: 1,
              opacity: 0.85,
            }}
          >
            tak
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.82rem",
            fontStyle: "italic",
            color: "#A89070",
            letterSpacing: "0.12em",
            marginBottom: "3rem",
          }}
        >
          이 밤을 기억하라
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.65rem",
            color: "#8B7355",
            letterSpacing: "0.25em",
            opacity: 0.45,
            textTransform: "uppercase",
          }}
        >
          © tak · All rights reserved
        </motion.p>
      </div>
    </footer>
  );
}
