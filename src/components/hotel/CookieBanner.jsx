import React, { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieBanner({ lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hary_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem("hary_cookie_consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("hary_cookie_consent", "declined"); setVisible(false); };

  if (!visible) return null;

  const isFr = lang === "fr";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[300] bg-[#1C1510]/98 backdrop-blur-md border-t border-[#B8956A]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <div className="flex items-start gap-4 flex-1">
          <Cookie className="w-5 h-5 text-[#B8956A] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white text-sm font-medium mb-1">
              {isFr ? "Cookies & Confidentialité" : "Cookies & Privacy"}
            </p>
            <p className="text-white/50 text-xs leading-relaxed max-w-2xl">
              {isFr
                ? "Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant votre navigation, vous acceptez notre politique de confidentialité et l'utilisation de cookies essentiels."
                : "We use cookies to improve your experience on our site. By continuing to browse, you accept our privacy policy and the use of essential cookies."}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={decline} className="px-4 py-2 text-xs tracking-widest uppercase text-white/40 hover:text-white border border-white/20 hover:border-white/40 transition-all">
            {isFr ? "Refuser" : "Decline"}
          </button>
          <button onClick={accept} className="px-5 py-2 text-xs tracking-widest uppercase bg-[#B8956A] text-white hover:bg-[#D4B48A] transition-all">
            {isFr ? "Accepter tout" : "Accept All"}
          </button>
          <button onClick={decline} className="text-white/30 hover:text-white/60 transition-colors ml-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}