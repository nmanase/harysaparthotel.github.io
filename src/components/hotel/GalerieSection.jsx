const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const allPhotos = [
  { id: 2, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/037a3ec98_IMG_20260505_182137.jpg", alt: "Bâtiment illuminé la nuit", cat: "Hôtel" },
  { id: 3, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/d49ce232f_IMG_20260505_123752.jpg", alt: "Piscine & enseigne en journée", cat: "Piscine" },
  { id: 4, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/45fff56cd_IMG_20260608_110425.jpg", alt: "Salon appartement", cat: "Hébergement" },
  { id: 5, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/6df85e358_IMG_20260608_111022.jpg", alt: "Salon & salle à manger", cat: "Hébergement" },
  { id: 6, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/2744053c9_a5fa11df-078f-4ba2-af31-ac66745993bd.png", alt: "Salon de thé", cat: "Salon de Thé" },
  { id: 7, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/3b5770e23_IMG_6072.jpg", alt: "Salle de réception décorée", cat: "Événements" },
  { id: 8, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/3300b737d_IMG-20230712-WA0011.jpg", alt: "Suite Exclusive — vue nuit", cat: "Suite" },
  { id: 9, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/c71e00388_FB_IMG_1691823740910.jpg", alt: "Suite — salon & jacuzzi", cat: "Suite" },
  { id: 10, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/e1139e5cd_FB_IMG_1691823755598.jpg", alt: "Suite — chambre & coin salon", cat: "Suite" },
  { id: 11, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/00a47f5ff_FB_IMG_1691823773756.jpg", alt: "Suite — salle de bain jacuzzi", cat: "Suite" },
  { id: 12, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/5465aec81_FB_IMG_1691823789328.jpg", alt: "Suite — vue depuis le lit", cat: "Suite" },
  { id: 13, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/5680a3ea7_FB_IMG_1691823906212.jpg", alt: "Terrasse panoramique", cat: "Suite" },
  { id: 14, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/94fb0ae34_IMG_20260608_110741.jpg", alt: "Vue depuis la suite", cat: "Suite" },
  { id: 15, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/ab2ced5d7_IMG_20260608_110850.jpg", alt: "Salon lumineux", cat: "Hébergement" },
  { id: 16, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/021bc129c_IMG_20260608_111133.jpg", alt: "Séjour vue panoramique", cat: "Hébergement" },
  { id: 17, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/2ca986c06_IMG_6009.jpg", alt: "Terrasse panoramique", cat: "Hôtel" },
  { id: 18, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/ae9209e79_IMG_20230710_180911.jpg", alt: "Appartement — salon vert", cat: "Hébergement" },
  { id: 19, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/a2d054955_IMG_20230710_180917.jpg", alt: "Cuisine équipée", cat: "Hébergement" },
  { id: 20, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/01472e05e_IMG_20230710_180937.jpg", alt: "Salle de bain", cat: "Hébergement" },
  { id: 21, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/676ffc345_Harysfront.jpg", alt: "Façade Hary's Aparthotel", cat: "Hôtel" },
  { id: 22, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/c2fb9b3cb_IMG_6012.jpg", alt: "Suite Exclusive", cat: "Suite" },
  { id: 23, src: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/44b129e5c_IMG_5943.jpg", alt: "Suite — chambre", cat: "Suite" },
];

const gridPhotos = allPhotos.slice(0, 9);

export default function GalerieSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);
  const thumbsRef = useRef(null);

  const selectedIndex = selected !== null ? allPhotos.findIndex((p) => p.id === selected.id) : -1;

  const goNext = () => { const next = (selectedIndex + 1) % allPhotos.length; setSelected(allPhotos[next]); };
  const goPrev = () => { const prev = (selectedIndex - 1 + allPhotos.length) % allPhotos.length; setSelected(allPhotos[prev]); };

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, selectedIndex]);

  useEffect(() => {
    if (thumbsRef.current && selectedIndex >= 0) {
      const thumb = thumbsRef.current.children[selectedIndex];
      if (thumb) thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [selectedIndex]);

  return (
    <section id="galerie" className="py-28 lg:py-36 bg-[#FAF8F4] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-4">{t.galerie.sectionLabel}</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1C1510] mb-4">{t.galerie.title}</h2>
            <div className="w-16 h-px bg-[#B8956A] mx-auto mb-6" />
            <p className="text-[#7A6E65] max-w-md mx-auto text-base leading-relaxed">{t.galerie.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {gridPhotos.map((photo, i) => (
            <FadeIn key={photo.id} delay={i * 0.06}>
              <button onClick={() => setSelected(photo)} className="group relative overflow-hidden w-full aspect-square bg-[#F0E6D3] focus:outline-none focus:ring-2 focus:ring-[#B8956A]">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1C1510]/0 group-hover:bg-[#1C1510]/50 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <ZoomIn className="w-6 h-6 text-white" />
                    <span className="text-white text-xs tracking-widest uppercase">{photo.cat}</span>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8">
            <button onClick={() => setSelected(allPhotos[0])} className="border border-[#B8956A] text-[#B8956A] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#B8956A] hover:text-white transition-all duration-300">
              {t.galerie.voirToutes} ({allPhotos.length})
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#1C1510]/97 backdrop-blur-sm flex flex-col" onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-all">
              <X className="w-5 h-5" />
            </button>

            <div className="flex-1 flex items-center justify-center relative px-12 py-4 min-h-0">
              <button onClick={goPrev} className="absolute left-3 md:left-4 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-all z-10">
                <ChevronLeft className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div key={selected.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} className="flex flex-col items-center max-w-5xl w-full">
                  <img src={selected.src} alt={selected.alt} className="max-h-[70vh] w-full object-contain" />
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-6 h-px bg-[#B8956A]" />
                    <p className="text-white/60 text-xs tracking-widest uppercase">{selected.cat}</p>
                    <span className="text-white/30 text-xs">—</span>
                    <p className="text-white/60 text-xs">{selected.alt}</p>
                    <span className="text-white/30 text-xs ml-2">{selectedIndex + 1}/{allPhotos.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button onClick={goNext} className="absolute right-3 md:right-4 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-all z-10">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#1C1510] border-t border-white/10 py-3 px-4">
              <div ref={thumbsRef} className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>
                {allPhotos.map((photo, i) => (
                  <button key={photo.id} onClick={() => setSelected(photo)} className={`flex-shrink-0 w-14 h-14 overflow-hidden border-2 transition-all ${photo.id === selected.id ? "border-[#B8956A] opacity-100" : "border-transparent opacity-40 hover:opacity-80"}`}>
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}