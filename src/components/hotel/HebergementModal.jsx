import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HebergementModal({ hebergement, onClose }) {
  const { t } = useLanguage();
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((p) => (p + 1) % hebergement.gallery.length);
      if (e.key === "ArrowLeft") setActiveImg((p) => (p - 1 + hebergement.gallery.length) % hebergement.gallery.length);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, hebergement.gallery.length]);

  const goPrev = () => setActiveImg((p) => (p - 1 + hebergement.gallery.length) % hebergement.gallery.length);
  const goNext = () => setActiveImg((p) => (p + 1) % hebergement.gallery.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#1C1510]/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="bg-[#FAF8F4] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#F0E6D3]">
          <div>
            <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-1">{hebergement.tagline}</p>
            <h3 className="font-serif text-3xl text-[#1C1510]">{hebergement.name}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 border border-[#1C1510]/20 flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="relative h-72 md:h-[28rem] overflow-hidden bg-[#1C1510]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={hebergement.gallery[activeImg]}
                alt={`${hebergement.name} — ${activeImg + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#1C1510]/60 flex items-center justify-center text-white hover:bg-[#B8956A] transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#1C1510]/60 flex items-center justify-center text-white hover:bg-[#B8956A] transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 right-3 bg-[#1C1510]/60 text-white text-xs px-2 py-1">{activeImg + 1} / {hebergement.gallery.length}</div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto p-3 bg-[#F0E6D3]/50">
            {hebergement.gallery.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-all ${i === activeImg ? "border-[#B8956A]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                <img src={img} alt={`vignette ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#7A6E65] text-sm leading-relaxed mb-6">{hebergement.description}</p>

          {/* Price — inside modal */}
          <div className="inline-flex items-baseline gap-2 bg-[#B8956A] px-5 py-3 mb-6">
            <p className="text-white/70 text-xs tracking-wider uppercase">{t.hebergements.depuis}</p>
            <p className="font-serif text-2xl text-white">{hebergement.price}</p>
            <p className="text-white/70 text-xs">{t.hebergements.nuit}</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {hebergement.fullFeatures.map((f, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-3 border border-[#F0E6D3]">
                <div className="w-8 h-8 bg-[#F0E6D3] flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-4 h-4 text-[#B8956A]" />
                </div>
                <span className="text-[#1C1510] text-xs">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="border-t border-[#F0E6D3] pt-5 mb-4">
            <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-3">{t.hebergements.detailsTitle}</p>
            <ul className="space-y-2">
              {hebergement.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-[#7A6E65] text-sm">
                  <span className="text-[#B8956A] mt-1">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Matelas option — only for appart */}
          {hebergement.matelas && (
            <div className="bg-[#F0E6D3]/60 border border-[#E8E0D4] p-4 mb-6">
              <p className="text-[#1C1510] text-sm">{hebergement.matelas}</p>
            </div>
          )}

          <a href="#contact" onClick={onClose} className="mt-2 inline-flex items-center gap-3 bg-[#1C1510] text-white px-7 py-3.5 text-xs tracking-widest uppercase hover:bg-[#B8956A] transition-colors duration-300">
            {t.hebergements.reserverCet}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}