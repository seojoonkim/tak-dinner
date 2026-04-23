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
        background: "#1C1917",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: phase === "sealed" ? "pointer" : "default",
        overflow: "hidden",
      }}
    >
      {/* Background particles — subtle gold flicker */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.25, 0],
            y: [20 + i * 10, -60 - i * 8],
            x: Math.sin(i) * 60,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%",
            background: "#B8960C",
            left: `${10 + (i / 18) * 80}%`,
            bottom: "10%",
          }}
        />
      ))}

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
            background: "linear-gradient(145deg, #F5F0E8, #EDE7D5)",
            borderRadius: "4px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,150,12,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Envelope inner shadow lines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, transparent 49.5%, rgba(184,150,12,0.08) 49.5%, rgba(184,150,12,0.08) 50.5%, transparent 50.5%), " +
                "linear-gradient(225deg, transparent 49.5%, rgba(184,150,12,0.08) 49.5%, rgba(184,150,12,0.08) 50.5%, transparent 50.5%)",
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
                  background: "radial-gradient(circle at 35% 35%, #D4AA20, #8B6914)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    color: "#1C1917",
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
                  background: "linear-gradient(160deg, #FDFAF4, #F5F0E8)",
                  padding: "2rem",
                  borderRadius: "2px",
                  textAlign: "center",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                  zIndex: 5,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.4em",
                    color: "#B8960C",
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
                    color: "#1C1917",
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
                    background: "#B8960C",
                    margin: "0 auto 0.75rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "0.75rem",
                    color: "#8B7355",
                    letterSpacing: "0.2em",
                  }}
                >
                  한 마리의 닭, 열 개의 우주
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
                background: "linear-gradient(170deg, #EDE7D5, #D8D0BE)",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              }}
            />
            {/* Flap inner shadow */}
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
              color: "#8B7355",
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
              color: "#B8960C",
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
