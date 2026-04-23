"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#1C1917",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      {/* Background grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Fire glow gradient behind everything */}
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "50%",
          background: "radial-gradient(ellipse at center bottom, rgba(184,100,12,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark rooster — large, behind everything */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.04,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <svg
          width="700"
          height="780"
          viewBox="0 0 180 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 120 Q10 90 15 60 Q20 50 25 65 Q15 85 35 110" stroke="#F5F0E8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M28 125 Q5 100 8 70 Q12 58 18 72 Q10 95 30 118" stroke="#F5F0E8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M32 115 Q18 80 22 50 Q28 38 32 55 Q24 78 38 108" stroke="#F5F0E8" strokeWidth="1" fill="none" strokeLinecap="round" />
          <ellipse cx="95" cy="130" rx="45" ry="38" fill="#F5F0E8" opacity="0.3" />
          <path d="M50 135 Q55 95 80 80 Q95 72 115 78 Q138 85 145 110 Q150 130 140 148 Q125 165 100 168 Q72 168 58 152 Q50 143 50 135Z" stroke="#F5F0E8" strokeWidth="1.5" fill="#F5F0E8" fillOpacity="0.2" />
          <path d="M62 120 Q75 100 100 108 Q118 114 125 128" stroke="#F5F0E8" strokeWidth="1" fill="none" />
          <path d="M60 130 Q72 112 98 118 Q116 122 122 136" stroke="#F5F0E8" strokeWidth="0.8" fill="none" />
          <path d="M88 80 Q92 65 96 55 Q100 48 102 55 Q105 65 108 78" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="45" r="18" stroke="#F5F0E8" strokeWidth="1.5" fill="#F5F0E8" fillOpacity="0.15" />
          <path d="M92 30 Q88 20 92 15 Q96 10 98 18 Q99 10 103 8 Q107 10 105 18 Q107 12 111 14 Q114 20 109 27" stroke="#F5F0E8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="107" cy="42" r="2.5" fill="#F5F0E8" />
          <path d="M114 47 L122 45 L118 50 Z" fill="#F5F0E8" />
          <path d="M88 165 L84 185 M84 185 L78 190 M84 185 L88 192 M84 185 L90 190" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M108 165 L112 185 M112 185 L106 190 M112 185 L116 192 M112 185 L118 190" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Foreground rooster — elegant, visible */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: "3rem", zIndex: 1 }}
      >
        <svg
          width="140"
          height="156"
          viewBox="0 0 180 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 120 Q10 90 15 60 Q20 50 25 65 Q15 85 35 110" stroke="#B8960C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M28 125 Q5 100 8 70 Q12 58 18 72 Q10 95 30 118" stroke="#B8960C" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M32 115 Q18 80 22 50 Q28 38 32 55 Q24 78 38 108" stroke="#B8960C" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
          <ellipse cx="95" cy="130" rx="45" ry="38" fill="#F5F0E8" opacity="0.05" />
          <path d="M50 135 Q55 95 80 80 Q95 72 115 78 Q138 85 145 110 Q150 130 140 148 Q125 165 100 168 Q72 168 58 152 Q50 143 50 135Z" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
          <path d="M62 120 Q75 100 100 108 Q118 114 125 128" stroke="#B8960C" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M60 130 Q72 112 98 118 Q116 122 122 136" stroke="#B8960C" strokeWidth="0.8" fill="none" opacity="0.6" />
          <path d="M88 80 Q92 65 96 55 Q100 48 102 55 Q105 65 108 78" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="45" r="18" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
          <path d="M92 30 Q88 20 92 15 Q96 10 98 18 Q99 10 103 8 Q107 10 105 18 Q107 12 111 14 Q114 20 109 27" stroke="#C0392B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M95 60 Q90 68 88 75 Q91 78 94 72 Q96 80 98 74 Q100 68 98 62" stroke="#C0392B" strokeWidth="1" fill="none" />
          <circle cx="107" cy="42" r="2.5" fill="#F5F0E8" />
          <circle cx="107.5" cy="42" r="1.2" fill="#1C1917" />
          <path d="M114 47 L122 45 L118 50 Z" stroke="#B8960C" strokeWidth="1" fill="#B8960C" opacity="0.8" />
          <path d="M88 165 L84 185 M84 185 L78 190 M84 185 L88 192 M84 185 L90 190" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M108 165 L112 185 M112 185 L106 190 M112 185 L116 192 M112 185 L118 190" stroke="#F5F0E8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M80 178 L74 182" stroke="#F5F0E8" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: "center", zIndex: 1 }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(5rem, 14vw, 10rem)",
            fontWeight: 400,
            color: "#F5F0E8",
            letterSpacing: "0.15em",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          tak
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            fontStyle: "italic",
            color: "#D4AA20",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
        >
          dinner
        </motion.p>
      </motion.div>

      {/* Golden divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: "120px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #B8960C, transparent)",
          margin: "2.5rem auto",
          zIndex: 1,
        }}
      />

      {/* Hero poem */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ textAlign: "center", zIndex: 1, maxWidth: "420px" }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontStyle: "italic",
            color: "#A89070",
            letterSpacing: "0.08em",
            lineHeight: 2,
          }}
        >
          어둠이 내려앉은 밤,<br />
          장작불이 피어오른다.<br />
          한 마리의 닭이<br />
          열 개의 우주가 된다.
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.7rem",
            letterSpacing: "0.3em",
            color: "#8B7355",
            textTransform: "uppercase",
          }}
        >
          열 개의 챕터
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #8B7355, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
