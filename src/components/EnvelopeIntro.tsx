"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: Props) {
  const [phase, setPhase] = useState<"sealed" | "opening" | "open" | "exit">("sealed");

  // Auto-open after 2.5s
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("opening"), 2500);
    const t2 = setTimeout(() => setPhase("open"), 4200);
    const t3 = setTimeout(() => {
      setPhase("exit");
      setTimeout(onOpen, 900);
    }, 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onOpen]);

  const handleClick = () => {
    if (phase === "sealed") {
      setPhase("opening");
      setTimeout(() => setPhase("open"), 1700);
      setTimeout(() => {
        setPhase("exit");
        setTimeout(onOpen, 900);
      }, 3500);
    }
  };

  return (
    <motion.div
      key="envelope-root"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0D0D0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: phase === "sealed" ? "pointer" : "default",
        overflow: "hidden",
      }}
    >
      {/* Fire particles from bottom */}
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-20 - i * 12, -180 - i * 15],
            x: Math.sin(i * 0.8) * 80,
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? "3px" : "2px",
            height: i % 3 === 0 ? "3px" : "2px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#FF4500" : "#FFD700",
            left: `${8 + (i / 24) * 84}%`,
            bottom: "5%",
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Bottom fire glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "35%",
          background: "radial-gradient(ellipse at center bottom, rgba(255,69,0,0.18) 0%, rgba(255,140,0,0.08) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Warning badge */}
      <AnimatePresence>
        {phase === "sealed" && (
          <motion.div
            key="warning"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              position: "absolute",
              top: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
              border: "1px solid rgba(255,69,0,0.4)",
              borderRadius: "2px",
              padding: "0.5rem 1.5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#FF4500",
                textTransform: "uppercase",
              }}
            >
              ⚠️ 경고: 이 봉투를 열면 다시는 평범한 닭을 먹을 수 없게 됩니다.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Envelope container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "relative",
          width: "min(480px, 88vw)",
          perspective: "1200px",
        }}
      >
        {/* Envelope body */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "65%",
            background: "linear-gradient(145deg, #FFF8F0, #F0E8D8)",
            borderRadius: "4px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,140,0,0.2), 0 0 60px rgba(255,69,0,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Envelope inner shadow lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, transparent 49.5%, rgba(255,140,0,0.06) 49.5%, rgba(255,140,0,0.06) 50.5%, transparent 50.5%), " +
                "linear-gradient(225deg, transparent 49.5%, rgba(255,140,0,0.06) 49.5%, rgba(255,140,0,0.06) 50.5%, transparent 50.5%)",
            }}
          />

          {/* Wax seal center */}
          <AnimatePresence>
            {phase === "sealed" && (
              <motion.div
                key="seal"
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #FF8C00, #CC3300)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(255,69,0,0.5), 0 0 40px rgba(255,140,0,0.3)",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    color: "#FFF8F0",
                    fontWeight: 700,
                    letterSpacing: "-0.05em",
                  }}
                >
                  T
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card peek out when open */}
          <AnimatePresence>
            {phase === "open" && (
              <motion.div
                key="card-peek"
                initial={{ y: "30%", opacity: 0 }}
                animate={{ y: "-15%", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "8%",
                  right: "8%",
                  background: "linear-gradient(160deg, #FDFAF4, #FFF8F0)",
                  padding: "2rem",
                  borderRadius: "2px",
                  textAlign: "center",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
                  zIndex: 5,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.4em",
                    color: "#FF4500",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                  }}
                >
                  You are invited
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 6vw, 3rem)",
                    color: "#0D0D0D",
                    letterSpacing: "0.2em",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  tak
                </p>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "linear-gradient(90deg, #FF4500, #FFD700)",
                    margin: "0 auto 0.75rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.75rem",
                    color: "#2A2A2A",
                    letterSpacing: "0.2em",
                  }}
                >
                  닭이 왕이 되는 밤
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Envelope flap — folds open */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transformOrigin: "top center",
            zIndex: 20,
          }}
          animate={
            phase === "sealed"
              ? { rotateX: 0 }
              : { rotateX: -160 }
          }
          transition={{ duration: 1.4, ease: [0.34, 1.2, 0.64, 1] }}
        >
          {/* Triangle flap shape */}
          <div
            style={{
              width: "100%",
              paddingBottom: "50%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(170deg, #F0E8D8, #DDD0BE)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(170deg, transparent, rgba(0,0,0,0.06))",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Below envelope: hint text */}
      <AnimatePresence>
        {phase === "sealed" && (
          <motion.p
            key="hint"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              marginTop: "2.5rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.35em",
              color: "#FF8C00",
              textTransform: "uppercase",
            }}
          >
            Touch to open
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "opening" && (
          <motion.p
            key="opening-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: "2.5rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.75rem",
              letterSpacing: "0.35em",
              color: "#FF4500",
              textTransform: "uppercase",
            }}
          >
            당신은 선택받았습니다
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
