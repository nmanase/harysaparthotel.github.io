const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { MapPin, Phone, Mail, Facebook, Instagram, Send, CheckCircle } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const LOGEMENTS = lang === "fr" ? ["L'Appartement Familial", "La Suite Exclusive"] : ["Family Apartment", "The Exclusive Suite"];
  const TYPES = [
    { value: "disponibilite", label: t.contact.disponibilite },
    { value: "info", label: t.contact.info },
  ];

  const [type, setType] = useState("disponibilite");
  const [form, setForm] = useState({ nom: "", email: "", tel: "", logement: LOGEMENTS[0], dateArrivee: "", dateDepart: "", objet: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let body = "";
      if (type === "disponibilite") {
        body = `${lang === "fr" ? "Nouvelle demande de disponibilité" : "New availability request"} — HARY'S Aparthotel\n\n` +
          `${t.contact.nom} : ${form.nom}\n${t.contact.email} : ${form.email}\n${t.contact.tel} : ${form.tel}\n` +
          `${t.contact.logement} : ${form.logement}\n${t.contact.arrivee} : ${form.dateArrivee}\n${t.contact.depart} : ${form.dateDepart}`;
      } else {
        body = `${lang === "fr" ? "Nouvelle demande d'informations" : "New information request"} — HARY'S Aparthotel\n\n` +
          `${t.contact.nom} : ${form.nom}\n${t.contact.email} : ${form.email}\n${t.contact.tel} : ${form.tel}\n` +
          `${t.contact.objet} : ${form.objet}\n${t.contact.message} :\n${form.message}`;
      }
      await db.integrations.Core.SendEmail({
        to: "harysaparthotel@gmail.com",
        from_name: "HARY'S Aparthotel - Website",
        subject: type === "disponibilite"
          ? `${lang === "fr" ? "Demande de disponibilité" : "Availability request"} — ${form.logement}`
          : `${lang === "fr" ? "Demande d'infos" : "Info request"} — ${form.objet}`,
        body,
      });
      setSent(true);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#FAF8F4] px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[#B8956A] text-xs tracking-[0.4em] uppercase mb-4">{t.contact.sectionLabel}</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#1C1510] mb-4">{t.contact.title}</h2>
            <div className="w-16 h-px bg-[#B8956A] mx-auto" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn direction="left">
            <div>
              <p className="text-[#7A6E65] text-xs tracking-[0.3em] uppercase mb-8">{lang === "fr" ? "Informations" : "Information"}</p>

              <div className="flex gap-5 mb-8">
                <div className="w-10 h-10 bg-[#F0E6D3] flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-[#B8956A]" /></div>
                <div>
                  <p className="text-[#1C1510] font-medium text-sm mb-1">{t.contact.adresse}</p>
                  <p className="text-[#7A6E65] text-base leading-relaxed">Cité Seimad, Andabizy<br />Tuléar, Madagascar</p>
                </div>
              </div>

              <div className="flex gap-5 mb-8">
                <div className="w-10 h-10 bg-[#F0E6D3] flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-[#B8956A]" /></div>
                <div>
                  <p className="text-[#1C1510] font-medium text-sm mb-1">{t.contact.telephone}</p>
                  <a href="tel:+261389686264" className="text-[#7A6E65] text-sm hover:text-[#B8956A] transition-colors">+261 38 968 62 64</a>
                </div>
              </div>

              <div className="flex gap-5 mb-8">
                <div className="w-10 h-10 bg-[#F0E6D3] flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-[#B8956A]" /></div>
                <div>
                  <p className="text-[#1C1510] font-medium text-sm mb-1">{t.contact.email}</p>
                  <a href="mailto:harysaparthotel@gmail.com" className="text-[#7A6E65] text-sm hover:text-[#B8956A] transition-colors break-all">harysaparthotel@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-5 mb-10">
                <div className="w-10 h-10 bg-[#F0E6D3] flex items-center justify-center flex-shrink-0"><Instagram className="w-4 h-4 text-[#B8956A]" /></div>
                <div>
                  <p className="text-[#1C1510] font-medium text-sm mb-2">{t.contact.reseaux}</p>
                  <div className="flex gap-4">
                    <a href="https://facebook.com/harysaparthotel" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#7A6E65] text-sm hover:text-[#B8956A] transition-colors">
                      <Facebook className="w-3.5 h-3.5" /> @harysaparthotel
                    </a>
                    <a href="https://instagram.com/harysapart" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#7A6E65] text-sm hover:text-[#B8956A] transition-colors">
                      <Instagram className="w-3.5 h-3.5" /> @harysapart
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="overflow-hidden border border-[#E8E0D4]" style={{ borderRadius: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8915.496419324207!2d43.6868456053294!3d-23.36429772200354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f647dbb53dd069d%3A0xbb40031dc3386920!2sHary&#39;s%20Aparthotel!5e1!3m2!1sen!2sus!4v1781516514551!5m2!1sen!2sus"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HARY'S Aparthotel — Localisation"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-white p-8 lg:p-10 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 bg-[#F0E6D3] flex items-center justify-center rounded-full"><CheckCircle className="w-7 h-7 text-[#B8956A]" /></div>
                  <h3 className="font-serif text-2xl text-[#1C1510]">{t.contact.sent}</h3>
                  <p className="text-[#7A6E65] text-sm">{t.contact.sentSub}</p>
                  <button onClick={() => setSent(false)} className="mt-4 text-xs tracking-widest uppercase text-[#B8956A] border-b border-[#B8956A] pb-0.5">{t.contact.autreMessage}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-[#7A6E65] text-xs tracking-[0.25em] uppercase mb-3">{t.contact.typeLabel}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {TYPES.map(tt => (
                        <button key={tt.value} type="button" onClick={() => setType(tt.value)} className={`py-3 px-4 text-xs tracking-wide text-center transition-all duration-200 ${type === tt.value ? "bg-[#1C1510] text-white" : "bg-[#F5F3EF] text-[#7A6E65] hover:bg-[#F0E6D3]"}`}>{tt.label}</button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#E8E0D4]" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.nom} *</label>
                      <input name="nom" required value={form.nom} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" placeholder={lang === "fr" ? "Votre nom" : "Your name"} />
                    </div>
                    <div>
                      <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.tel}</label>
                      <input name="tel" value={form.tel} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" placeholder="+261..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.email} *</label>
                    <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" placeholder="votre@email.com" />
                  </div>
                  {type === "disponibilite" && (
                    <>
                      <div>
                        <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.logement} *</label>
                        <select name="logement" value={form.logement} onChange={handleChange} required className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors">
                          {LOGEMENTS.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.arrivee} *</label>
                          <input name="dateArrivee" type="date" required value={form.dateArrivee} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" />
                        </div>
                        <div>
                          <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.depart} *</label>
                          <input name="dateDepart" type="date" required value={form.dateDepart} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" />
                        </div>
                      </div>
                    </>
                  )}
                  {type === "info" && (
                    <>
                      <div>
                        <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.objet} *</label>
                        <input name="objet" required value={form.objet} onChange={handleChange} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors" placeholder={lang === "fr" ? "Objet de votre message" : "Message subject"} />
                      </div>
                      <div>
                        <label className="block text-[#7A6E65] text-xs tracking-wider uppercase mb-1.5">{t.contact.message} *</label>
                        <textarea name="message" required value={form.message} onChange={handleChange} rows={5} className="w-full border border-[#E8E0D4] bg-[#FAF8F4] px-4 py-3 text-sm text-[#1C1510] focus:outline-none focus:border-[#B8956A] transition-colors resize-none" placeholder={lang === "fr" ? "Votre message..." : "Your message..."} />
                      </div>
                    </>
                  )}
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-3 bg-[#1C1510] text-white py-4 text-xs tracking-widest uppercase hover:bg-[#B8956A] transition-colors duration-300 disabled:opacity-60">
                    {loading ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <><Send className="w-3.5 h-3.5" /> {type === "disponibilite" ? t.contact.envoyerDispo : t.contact.envoyerInfo}</>}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}