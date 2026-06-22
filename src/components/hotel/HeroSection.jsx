const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const heroSlides = [
  { src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/037a3ec98_IMG_20260505_182137.jpg", alt: "Bâtiment illuminé la nuit" },
  { src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/d49ce232f_IMG_20260505_123752.jpg", alt: "Piscine avec enseigne en journée" },
  { src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/3b5770e23_IMG_6072.jpg", alt: "Salle d'événements décorée" },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % heroSlides.length);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[current].src}')` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1510]/70 via-[#1C1510]/40 to-[#1C1510]/60 z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#B8956A] z-20" />

      <button onClick={goPrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center border border-white/20 text-white/50 hover:border-[#B8956A] hover:text-[#B8956A] transition-all duration-300 bg-[#1C1510]/20 backdrop-blur-sm" aria-label="Précédent">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button onClick={goNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center border border-white/20 text-white/50 hover:border-[#B8956A] hover:text-[#B8956A] transition-all duration-300 bg-[#1C1510]/20 backdrop-blur-sm" aria-label="Suivant">
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 ${i === current ? "w-6 h-1 bg-[#B8956A]" : "w-1 h-1 bg-white/30 rounded-full"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[#B8956A] tracking-[0.4em] uppercase mb-6 text-sm">
          {t.hero.bienvenue}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-serif text-7xl md:text-8xl lg:text-[7rem] text-white mb-4 leading-none">
          HARY'S
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="text-[#D4B48A] tracking-[0.35em] uppercase mb-6 font-light text-base">
          {t.hero.aparthotel}
        </motion.p>
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="w-24 h-px bg-[#B8956A] mx-auto mb-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-white/80 md:text-xl font-light italic font-serif mb-12 text-xl">
          "{t.hero.tagline}"
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#hebergements" className="inline-flex items-center justify-center gap-3 bg-[#B8956A] text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-[#D4B48A] transition-all duration-400">
            {t.hero.decouvrir}
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-400">
            {t.hero.reserver}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-white/40 text-[10px] tracking-widest uppercase">{t.hero.defiler}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-[#B8956A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}