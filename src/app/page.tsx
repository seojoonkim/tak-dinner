"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ChapterMenu from "@/components/ChapterMenu";
import EventInvite from "@/components/EventInvite";
import Footer from "@/components/Footer";

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!envelopeOpened && (
          <EnvelopeIntro key="envelope" onOpen={() => setEnvelopeOpened(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={envelopeOpened ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: envelopeOpened ? "auto" : "none" }}
      >
        <Hero />
        <Manifesto />
        <ChapterMenu />
        <EventInvite />
        <Footer />
      </motion.div>
    </main>
  );
}
