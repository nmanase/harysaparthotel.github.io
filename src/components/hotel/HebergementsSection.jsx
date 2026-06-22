const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { Users, Bed, ChefHat, Bath, Sunset, Thermometer, Wind, Lock, Package, Sofa } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import HebergementModal from "./HebergementModal";
import { useLanguage } from "@/context/LanguageContext";

const hebergementsData = [
  {
    id: 1,
    key: "appart",
    image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/45fff56cd_IMG_20260608_110425.jpg",
    price: "250 000",
    badge: "Idéal famille",
    badgeEn: "Family Ideal",
    badgeColor: "bg-[#B8956A]",
    cardFeatures: [
      { icon: Bed, textFr: "2 chambres", textEn: "2 bedrooms" },
      { icon: ChefHat, textFr: "Cuisine équipée", textEn: "Equipped kitchen" },
      { icon: Users, textFr: "Jusqu'à 5 personnes", textEn: "Up to 5 people" },
    ],
    fullFeatures: [
      { icon: Bed, textFr: "2 chambres", textEn: "2 bedrooms" },
      { icon: ChefHat, textFr: "Cuisine équipée", textEn: "Equipped kitchen" },
      { icon: Users, textFr: "Jusqu'à 5 personnes", textEn: "Up to 5 people" },
      { icon: Bath, textFr: "Salle de bain eau chaude", textEn: "Hot water bathroom" },
      { icon: Thermometer, textFr: "Salon climatisé", textEn: "Air-conditioned living room" },
      { icon: Wind, textFr: "Chambres ventilées", textEn: "Ventilated bedrooms" },
      { icon: Lock, textFr: "Chambres privatives", textEn: "Private bedrooms" },
    ],
    gallery: [
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/45fff56cd_IMG_20260608_110425.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/6df85e358_IMG_20260608_111022.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/ab2ced5d7_IMG_20260608_110850.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/021bc129c_IMG_20260608_111133.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/ae9209e79_IMG_20230710_180911.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/a2d054955_IMG_20230710_180917.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/01472e05e_IMG_20230710_180937.jpg",
    ],
    detailsFr: ["2 chambres séparées avec lits doubles et lits superposés", "Grand salon avec canapés, TV et salle à manger", "Cuisine entièrement équipée : four, gazinière, réfrigérateur, ustensiles", "Salle de bain avec eau chaude et douche", "Salon climatisé, chambres ventilées", "Chambres privatives avec clé", "Accès piscine inclus", "Wi-Fi Starlink inclus"],
    detailsEn: ["2 separate bedrooms with double beds and bunk beds", "Large living room with sofas, TV and dining area", "Fully equipped kitchen: oven, stove, refrigerator, utensils", "Bathroom with hot water and shower", "Air-conditioned living room, ventilated bedrooms", "Private bedrooms with key", "Pool access included", "Starlink Wi-Fi included"],
    matelasFr: "Possibilité d'ajouter un matelas 1 place supplémentaire : 25 000 Ar / nuitée (1 max. par appartement)",
    matelasEn: "Extra single mattress available: 25,000 Ar / night (max. 1 per apartment)",
  },
  {
    id: 2,
    key: "suite",
    image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/3300b737d_IMG-20230712-WA0011.jpg",
    price: "200 000",
    badge: "Coup de cœur",
    badgeEn: "Favorite",
    badgeColor: "bg-[#1C1510]",
    cardFeatures: [
      { icon: Bath, textFr: "Jacuzzi privatif", textEn: "Private jacuzzi" },
      { icon: Sunset, textFr: "Terrasse panoramique", textEn: "Panoramic terrace" },
      { icon: Users, textFr: "2 personnes", textEn: "2 people" },
    ],
    fullFeatures: [
      { icon: Bath, textFr: "Jacuzzi privatif", textEn: "Private jacuzzi" },
      { icon: Sunset, textFr: "Terrasse avec vue", textEn: "Terrace with view" },
      { icon: Users, textFr: "2 personnes", textEn: "2 people" },
      { icon: Thermometer, textFr: "Eau chaude", textEn: "Hot water" },
      { icon: Sofa, textFr: "Mini salon", textEn: "Mini lounge" },
      { icon: Package, textFr: "Mini frigo", textEn: "Mini fridge" },
      { icon: Wind, textFr: "Climatisé", textEn: "Air-conditioned" },
    ],
    gallery: [
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/c71e00388_FB_IMG_1691823740910.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/e1139e5cd_FB_IMG_1691823755598.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/00a47f5ff_FB_IMG_1691823773756.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/5465aec81_FB_IMG_1691823789328.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/5680a3ea7_FB_IMG_1691823906212.jpg",
      "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/3300b737d_IMG-20230712-WA0011.jpg",
    ],
    detailsFr: ["Chambre avec lit baldaquin double et moustiquaire", "Salle de bain ouverte avec jacuzzi pour 2", "Mini salon avec fauteuils confortables", "Mini réfrigérateur inclus", "Terrasse privative avec vue panoramique sur la ville", "Climatisation et eau chaude", "Accès piscine inclus", "Wi-Fi Starlink inclus"],
    detailsEn: ["Bedroom with double canopy bed and mosquito net", "Open bathroom with jacuzzi for 2", "Mini lounge with comfortable armchairs", "Mini refrigerator included", "Private terrace with panoramic city view", "Air conditioning and hot water", "Pool access included", "Starlink Wi-Fi included"],
    matelasFr: null,
    matelasEn: null,
  },
];

export default function HebergementsSection() {
  const { t, lang } = useLanguage();
  const [modalItem, setModalItem] = useState(null);

  const buildHebergement = (data) => ({
    id: data.id,
    key: data.key,
    name: data.key === "appart" ? t.hebergements.appartName : t.hebergements.suiteName,
    tagline: data.key === "appart" ? t.hebergements.appartTagline : t.hebergements.suiteTagline,
    description: data.key === "appart" ? t.hebergements.appartDesc : t.hebergements.suiteDesc,
    price: data.price,
    image: data.image,
    badge: lang === "fr" ? data.badge : data.badgeEn,
    badgeColor: data.badgeColor,
    cardFeatures: data.cardFeatures.map((f) => ({ icon: f.icon, text: lang === "fr" ? f.textFr : f.textEn })),
    fullFeatures: data.fullFeatures.map((f) => ({ icon: f.icon, text: lang === "fr" ? f.textFr : f.textEn })),
    gallery: data.gallery,
    details: lang === "fr" ? data.detailsFr : data.detailsEn,
    matelas: lang === "fr" ? data.matelasFr : data.matelasEn,
  });

  return (
    <section id="hebergements" className="py-28 lg:py-36 bg-[#FAF8F4] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-4">{t.hebergements.sectionLabel}</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1C1510] mb-4">{t.hebergements.title}</h2>
            <div className="w-16 h-px bg-[#B8956A] mx-auto mb-6" />
            <p className="text-[#7A6E65] max-w-xl mx-auto text-sm leading-relaxed">{t.hebergements.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {hebergementsData.map((data, i) => {
            const item = buildHebergement(data);
            return (
              <FadeIn key={data.id} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <div className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/50 to-transparent" />
                    <span className={`absolute top-5 left-5 ${item.badgeColor} text-white text-[10px] tracking-widest uppercase px-3 py-1.5`}>{item.badge}</span>
                  </div>
                  <div className="p-8">
                    <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-2">{item.tagline}</p>
                    <h3 className="font-serif text-3xl text-[#1C1510] mb-3">{item.name}</h3>
                    <p className="text-[#7A6E65] text-sm leading-relaxed mb-5">{item.description}</p>

                    {/* Card features — one line */}
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                      {item.cardFeatures.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#1C1510]">
                          <div className="w-7 h-7 bg-[#F0E6D3] flex items-center justify-center">
                            <f.icon className="w-3.5 h-3.5 text-[#B8956A]" />
                          </div>
                          <span className="text-xs">{f.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button onClick={() => setModalItem(item)} className="inline-flex items-center gap-2 border border-[#B8956A] text-[#B8956A] px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#B8956A] hover:text-white transition-colors duration-300">
                        {t.hebergements.enSavoirPlus}
                      </button>
                      <a href="#contact" className="inline-flex items-center gap-3 bg-[#1C1510] text-white px-7 py-3 text-xs tracking-widest uppercase hover:bg-[#B8956A] transition-colors duration-300">
                        {t.hebergements.reserver}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modalItem && <HebergementModal hebergement={modalItem} onClose={() => setModalItem(null)} />}
      </AnimatePresence>
    </section>
  );
}