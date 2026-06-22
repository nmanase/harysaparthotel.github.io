import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SeoSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#1C1510] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-[#B8956A] mb-3">{t.seo.title}</h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{t.seo.text}</p>
      </div>
    </section>
  );
}