import React, { createContext, useContext, useState } from "react";

const t = {
  fr: {
    nav: { hebergements: "Hébergements", services: "Services", galerie: "Galerie", contact: "Contact", reserver: "Réserver" },
    hero: { bienvenue: "Bienvenue à", aparthotel: "Aparthotel", tagline: "L'appartement hôtel de qualité à Tuléar", decouvrir: "Découvrir nos hébergements", reserver: "Réserver", defiler: "Défiler" },
    seo: { title: "Hary's Aparthotel — Bien plus qu'un hébergement", text: "Que vous soyez en famille, en couple ou en déplacement professionnel, Hary's Aparthotel à Tuléar vous accueille dans un cadre élégant et entièrement équipé. Ici, chaque séjour est pensé pour allier confort, praticité et sérénité — avec des espaces de vie généreux, des services complets et une hospitalité chaleureuse, au cœur de Madagascar." },
    hebergements: { sectionLabel: "Nos Logements", title: "Hébergements", subtitle: "Deux types d'hébergement soigneusement aménagés pour répondre à toutes vos attentes, que vous voyagiez en famille ou en couple.", enSavoirPlus: "En savoir plus", reserver: "Réserver", depuis: "À partir de", nuit: "Ar / nuit", matelasInfo: "Possibilité d'ajouter un matelas 1 place supplémentaire : 25 000 Ar / nuitée (1 max. par appartement)", detailsTitle: "Détails de l'hébergement", reserverCet: "Réserver cet hébergement", appartName: "Appartement Familial", appartTagline: "Espace & Confort", appartDesc: "Un appartement spacieux et entièrement équipé, pensé pour les familles et les groupes. Profitez d'une vraie cuisine, de deux chambres confortables et d'un séjour chaleureux.", suiteName: "La Suite Exclusive", suiteTagline: "Luxe & Intimité", suiteDesc: "Une suite d'exception conçue pour les couples en quête d'élégance. Jacuzzi privatif, terrasse avec vue panoramique — une expérience de séjour inoubliable." },
    services: { sectionLabel: "Ce que nous offrons", title: "Activités & Services", subtitle: "Bien plus qu'un hébergement — une expérience complète pour votre confort et vos plaisirs.", autresServices: "Autres services inclus" },
    galerie: { sectionLabel: "Découvrir", title: "Galerie", subtitle: "Explorez nos espaces et laissez-vous séduire par l'atmosphère unique de HARY'S Aparthotel.", voirToutes: "Voir toutes les photos" },
    contact: { sectionLabel: "Nous trouver", title: "Contact & Réservation", typeLabel: "Type de demande", disponibilite: "Demande de disponibilité", info: "Demande d'informations", nom: "Nom", tel: "Téléphone", email: "Email", logement: "Logement souhaité", arrivee: "Date d'arrivée", depart: "Date de départ", objet: "Objet", message: "Message", envoyerDispo: "Envoyer ma demande", envoyerInfo: "Envoyer mon message", sent: "Message envoyé !", sentSub: "Nous vous répondrons dans les meilleurs délais.", autreMessage: "Envoyer un autre message", adresse: "Adresse", telephone: "Téléphone", reseaux: "Réseaux sociaux", taglineQuote: "L'appartement hôtel de qualité à Tuléar" },
    footer: { credibility: "L'appartement hôtel de qualité à Tuléar", droits: "Tous droits réservés." },
  },
  en: {
    nav: { hebergements: "Accommodations", services: "Services", galerie: "Gallery", contact: "Contact", reserver: "Book" },
    hero: { bienvenue: "Welcome to", aparthotel: "Aparthotel", tagline: "The quality aparthotel in Tuléar", decouvrir: "Discover our accommodations", reserver: "Book Now", defiler: "Scroll" },
    seo: { title: "Hary's Aparthotel — More than just a stay", text: "Whether you're travelling with family, as a couple, or on a business trip, Hary's Aparthotel in Tuléar welcomes you in an elegant and fully equipped setting. Every stay is designed to combine comfort, practicality and tranquility — with spacious living areas, comprehensive services and warm hospitality, at the heart of Madagascar." },
    hebergements: { sectionLabel: "Our Lodgings", title: "Accommodations", subtitle: "Two types of accommodation carefully designed to meet all your expectations, whether you're traveling with family or as a couple.", enSavoirPlus: "Learn More", reserver: "Book", depuis: "From", nuit: "Ar / night", matelasInfo: "Extra single mattress available: 25,000 Ar / night (max. 1 per apartment)", detailsTitle: "Accommodation Details", reserverCet: "Book this accommodation", appartName: "Family Apartment", appartTagline: "Space & Comfort", appartDesc: "A spacious and fully equipped apartment, designed for families and groups. Enjoy a real kitchen, two comfortable bedrooms and a warm living area.", suiteName: "The Exclusive Suite", suiteTagline: "Luxury & Privacy", suiteDesc: "An exceptional suite designed for couples seeking elegance. Private jacuzzi, panoramic terrace — an unforgettable stay experience." },
    services: { sectionLabel: "What We Offer", title: "Activities & Services", subtitle: "Much more than just accommodation — a complete experience for your comfort and enjoyment.", autresServices: "Other Included Services" },
    galerie: { sectionLabel: "Discover", title: "Gallery", subtitle: "Explore our spaces and let yourself be charmed by the unique atmosphere of HARY'S Aparthotel.", voirToutes: "View all photos" },
    contact: { sectionLabel: "Find Us", title: "Contact & Booking", typeLabel: "Request Type", disponibilite: "Availability Request", info: "Information Request", nom: "Name", tel: "Phone", email: "Email", logement: "Desired accommodation", arrivee: "Arrival date", depart: "Departure date", objet: "Subject", message: "Message", envoyerDispo: "Send my request", envoyerInfo: "Send my message", sent: "Message sent!", sentSub: "We will get back to you as soon as possible.", autreMessage: "Send another message", adresse: "Address", telephone: "Phone", reseaux: "Social Media", taglineQuote: "The quality aparthotel in Tuléar" },
    footer: { credibility: "The quality aparthotel in Tuléar", droits: "All rights reserved." },
  },
};

const LanguageContext = createContext({ lang: "fr", setLang: () => {}, t: t.fr });

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default t;