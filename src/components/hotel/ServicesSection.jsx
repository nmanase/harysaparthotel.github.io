const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import FadeIn from "@/components/ui/FadeIn";
import { Waves, Presentation, Coffee, Shirt, Car, Wifi, PlaneTakeoff, MapPin, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const mainServicesFr = [
  { icon: Waves, title: "Piscine", subtitle: "Incluse dans tout séjour", description: "Profitez de notre piscine en accès libre durant votre séjour. Disponible également à la journée pour les visiteurs extérieurs.", price: "12 000 Ar / pers", priceNote: "Accès journée (hors séjour)", highlight: true, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/d49ce232f_IMG_20260505_123752.jpg" },
  { icon: Presentation, title: "Salle d'Événements", subtitle: "Réunions & Cérémonies", description: "Salle climatisée et entièrement équipée pour vos événements professionnels ou privés. Capacité jusqu'à 90 personnes et plus.", price: "À partir de 250 000 Ar", priceNote: "Location à la journée", highlight: false, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/254070db0_IMG_20230722_111552.jpg" },
  { icon: Coffee, title: "Salon de Thé", subtitle: "Sur place", description: "Notre salon de thé vous accueille pour une pause gourmande : pâtisseries maison, snacks variés et glaces artisanales.", price: "Sur carte", priceNote: "Ouvert tous les jours", highlight: false, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/2744053c9_a5fa11df-078f-4ba2-af31-ac66745993bd.png" },
];

const mainServicesEn = [
  { icon: Waves, title: "Swimming Pool", subtitle: "Included in every stay", description: "Enjoy our pool with free access during your stay. Also available for day visitors.", price: "12,000 Ar / person", priceNote: "Day access (outside stay)", highlight: true, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/d49ce232f_IMG_20260505_123752.jpg" },
  { icon: Presentation, title: "Event Room", subtitle: "Meetings & Ceremonies", description: "Air-conditioned, fully equipped room for your professional or private events. Capacity up to 90+ people.", price: "From 250,000 Ar", priceNote: "Daily rental", highlight: false, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/254070db0_IMG_20230722_111552.jpg" },
  { icon: Coffee, title: "Tea Room", subtitle: "On-site", description: "Our tea room welcomes you for a gourmet break: homemade pastries, various snacks and artisanal ice creams.", price: "À la carte", priceNote: "Open every day", highlight: false, image: "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/2744053c9_a5fa11df-078f-4ba2-af31-ac66745993bd.png" },
];

const extraServicesFr = [
  { icon: Shirt, title: "Buanderie", desc: "Service de lavage sur demande" },
  { icon: Car, title: "Chambre chauffeur", desc: "Hébergement dédié à votre chauffeur" },
  { icon: PlaneTakeoff, title: "Navette aéroport", desc: "Transfert depuis/vers l'aéroport — 60 000 Ar" },
  { icon: MapPin, title: "Transport en ville", desc: "Déplacements urbains à partir de 30 000 Ar" },
  { icon: Wifi, title: "Internet Starlink", desc: "Wi-Fi haut débit inclus et gratuit" },
  { icon: Zap, title: "Anti-délestage", desc: "Groupe électrogène — lumière & Wi-Fi garantis même en coupure de courant" },
];

const extraServicesEn = [
  { icon: Shirt, title: "Laundry", desc: "Washing service on demand" },
  { icon: Car, title: "Driver Room", desc: "Dedicated accommodation for your driver" },
  { icon: PlaneTakeoff, title: "Airport Shuttle", desc: "Transfer from/to the airport — 60,000 Ar" },
  { icon: MapPin, title: "City Transport", desc: "Urban trips starting from 30,000 Ar" },
  { icon: Wifi, title: "Starlink Internet", desc: "High-speed Wi-Fi included and free" },
  { icon: Zap, title: "Power Backup", desc: "Generator — lights & Wi-Fi guaranteed even during power cuts" },
];

export default function ServicesSection() {
  const { t, lang } = useLanguage();
  const mainServices = lang === "fr" ? mainServicesFr : mainServicesEn;
  const extraServices = lang === "fr" ? extraServicesFr : extraServicesEn;

  return (
    <section id="services" className="py-28 lg:py-36 bg-[#1C1510] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-4">{t.services.sectionLabel}</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">{t.services.title}</h2>
            <div className="w-16 h-px bg-[#B8956A] mx-auto mb-6" />
            <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">{t.services.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className={`h-full flex flex-col overflow-hidden ${s.highlight ? "bg-[#B8956A]" : "bg-white/5 border border-white/10"} transition-all duration-300 hover:scale-[1.02]`}>
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-[#1C1510]/30" />
                  <div className={`absolute top-4 left-4 w-10 h-10 flex items-center justify-center ${s.highlight ? "bg-white/30" : "bg-[#B8956A]/80"}`}>
                    <s.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className={`text-xs tracking-[0.3em] uppercase mb-2 ${s.highlight ? "text-white/70" : "text-[#B8956A]"}`}>{s.subtitle}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">{s.title}</h3>
                  <p className={`text-base leading-relaxed flex-1 mb-6 ${s.highlight ? "text-white/80" : "text-white/50"}`}>{s.description}</p>
                  <div className={`pt-5 border-t ${s.highlight ? "border-white/30" : "border-white/10"}`}>
                    <p className={`font-serif text-lg ${s.highlight ? "text-white" : "text-[#B8956A]"}`}>{s.price}</p>
                    <p className={`text-xs mt-0.5 ${s.highlight ? "text-white/60" : "text-white/40"}`}>{s.priceNote}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="border border-white/10 p-8 lg:p-10">
            <p className="text-[#B8956A] text-xs tracking-[0.35em] uppercase mb-8">{t.services.autresServices}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {extraServices.map((es) => (
                <div key={es.title} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 bg-white/5 flex items-center justify-center">
                    <es.icon className="w-4 h-4 text-[#B8956A]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">{es.title}</p>
                    <p className="text-white/40 text-xs leading-relaxed">{es.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}