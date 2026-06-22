const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Phone, Mail, ChevronUp, Moon, Sun, FileText, Shield, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import CookieBanner from "@/components/hotel/CookieBanner";
import PrivacyModal from "@/components/hotel/PrivacyModal";

const LOGO_URL = "https://media.db.com/images/public/6a2bc0e39dde11c1027ce33e/491bc9060_logobig1.png";
const TEL = "+261389686264";
const EMAIL = "harysaparthotel@gmail.com";
const REGLEMENT_PDF = "https://media.db.com/files/public/6a2bc0e39dde11c1027ce33e/0ee0b18b0_RglementIntrieur.pdf";

const navLinks = [
  { key: "hebergements", href: "#hebergements" },
  { key: "services", href: "#services" },
  { key: "galerie", href: "#galerie" },
  { key: "contact", href: "#contact" },
];

export default function Layout({ children, currentPageName }) {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dm = darkMode;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dm ? "bg-[#0F0D0A]" : "bg-[#FAF8F4]"}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');
        body { font-family: 'Jost', sans-serif; font-size: 16px; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        ::selection { background-color: #F0E6D3; color: #1C1510; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${dm ? "#0F0D0A" : "#FAF8F4"}; }
        ::-webkit-scrollbar-thumb { background: #B8956A; border-radius: 3px; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Top contact bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#1C1510] border-b border-white/5 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0 pointer-events-none" : "h-9 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Left: Language + Dark mode */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="flex items-center gap-1 text-white/60 hover:text-[#B8956A] transition-colors text-[10px] tracking-widest uppercase"
            >
              <span className={lang === "fr" ? "text-[#B8956A]" : ""}>FR</span>
              <span className="text-white/30">/</span>
              <span className={lang === "en" ? "text-[#B8956A]" : ""}>EN</span>
            </button>
            <button
              onClick={() => setDarkMode(!dm)}
              className="flex items-center gap-1 text-white/60 hover:text-[#B8956A] transition-colors"
              title={dm ? "Mode clair" : "Mode sombre"}
            >
              {dm ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Right: contact */}
          <div className="flex items-center gap-5">
            <a href={`tel:${TEL}`} className="flex items-center gap-1.5 text-white/60 hover:text-[#B8956A] transition-colors text-xs" title={TEL}>
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">{TEL}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 text-white/60 hover:text-[#B8956A] transition-colors text-xs" title={EMAIL}>
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "top-0 bg-[#1C1510]/95 backdrop-blur-md py-2 shadow-xl" : "top-9 bg-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={LOGO_URL} alt="HARY'S Aparthotel" className="h-16 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-white/80 hover:text-[#B8956A] text-sm tracking-widest uppercase transition-colors duration-300">
                {t.nav[link.key]}
              </a>
            ))}
            <a href="#contact" className="bg-[#B8956A] text-white px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-[#D4B48A] transition-colors duration-300">
              {t.nav.reserver}
            </a>
          </nav>
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#1C1510]/98 backdrop-blur-md border-t border-white/10 px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-[#B8956A] text-sm tracking-widest uppercase transition-colors">
                {t.nav[link.key]}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#B8956A] text-white px-6 py-3 text-xs tracking-widest uppercase text-center">
              {t.nav.reserver}
            </a>
          </div>
        )}
      </header>

      <main className={`pt-9 transition-colors duration-300 ${dm ? "[&_section]:bg-[#0F0D0A] [&_.bg-\\[\\#FAF8F4\\]]:bg-[#0F0D0A] [&_.bg-white]:bg-[#1A1714] [&_.text-\\[\\#1C1510\\]]:text-[#F0E6D3] [&_.text-\\[\\#7A6E65\\]]:text-[#A89E95] [&_.border-\\[\\#F0E6D3\\]]:border-[#3A3530] [&_.bg-\\[\\#F0E6D3\\]]:bg-[#2A2520] [&_.border-\\[\\#E8E0D4\\]]:border-[#3A3530] [&_.bg-\\[\\#FAF8F4\\]]:bg-[#1A1714]" : ""}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className={`${dm ? "bg-[#080605]" : "bg-[#1C1510]"} text-white/70 py-14 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div className="flex flex-col">
              <img src={LOGO_URL} alt="HARY'S Aparthotel" className="h-20 w-auto object-contain mb-3" />
              <p className="text-white/40 text-xs max-w-xs leading-relaxed">{t.footer.credibility}</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#B8956A] text-xs tracking-[0.3em] uppercase mb-2">{t.contact.telephone}</p>
              <a href={`tel:${TEL}`} className="flex items-center gap-3 text-white/60 hover:text-[#B8956A] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#B8956A]" />{TEL}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/60 hover:text-[#B8956A] transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#B8956A]" />{EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/harysaparthotel" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/harysapart" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B8956A] hover:text-[#B8956A] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-white/30">© 2026 HARY'S Aparthotel. {t.footer.droits}</p>
              <div className="flex items-center gap-6">
                <a href={REGLEMENT_PDF} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-white/40 hover:text-[#B8956A] transition-colors text-xs">
                  <FileText className="w-3.5 h-3.5" />
                  {lang === "fr" ? "Règlement intérieur" : "House Rules"}
                </a>
                <button onClick={() => setShowPrivacy(true)} className="flex items-center gap-1.5 text-white/40 hover:text-[#B8956A] transition-colors text-xs">
                  <Shield className="w-3.5 h-3.5" />
                  {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top — bigger & modern */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-[#B8956A] hover:bg-[#1C1510] text-white px-4 py-3 shadow-xl transition-all duration-300 text-xs tracking-widest uppercase ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-4 h-4" />
        <span className="hidden sm:inline">{lang === "fr" ? "Haut" : "Top"}</span>
      </button>

      {/* Privacy Modal */}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} lang={lang} />}

      {/* Cookie Banner */}
      <CookieBanner lang={lang} />
    </div>
  );
}