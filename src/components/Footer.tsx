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
        background: "var(--charcoal)",
        padding: "8rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gold line */}
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
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
          transformOrigin: "left",
        }}
      />

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Event Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "4rem" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.35em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "2rem",
              opacity: 0.8,
            }}
          >
            Private Dinner Event
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: "var(--gold)",
                  opacity: 0.4,
                }}
              />
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(0.85rem, 2vw, 1rem)",
                  color: "var(--cream)",
                  letterSpacing: "0.15em",
                  fontWeight: 300,
                }}
              >
                한 마리의 닭, 열 개의 이야기
              </p>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: "var(--gold)",
                  opacity: 0.4,
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Divider with rooster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginBottom: "3rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              opacity: 0.3,
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "var(--warm)" }} />
            <span style={{ color: "var(--gold)", fontSize: "1rem" }}>🐓</span>
            <div style={{ flex: 1, height: "1px", background: "var(--warm)" }} />
          </div>
        </motion.div>

        {/* tak logo big */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ marginBottom: "2rem" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 400,
              color: "var(--cream)",
              letterSpacing: "0.2em",
              lineHeight: 1,
              opacity: 0.9,
            }}
          >
            tak
          </h2>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.7rem",
            color: "var(--warm)",
            letterSpacing: "0.2em",
            opacity: 0.5,
          }}
        >
          © tak · All rights reserved
        </motion.p>
      </div>
    </footer>
  );
}
