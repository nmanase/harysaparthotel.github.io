import React from "react";
import HeroSection from "@/components/hotel/HeroSection";
import SeoSection from "@/components/hotel/SeoSection";
import HebergementsSection from "@/components/hotel/HebergementsSection";
import ServicesSection from "@/components/hotel/ServicesSection";
import GalerieSection from "@/components/hotel/GalerieSection";
import ContactSection from "@/components/hotel/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SeoSection />
      <HebergementsSection />
      <ServicesSection />
      <GalerieSection />
      <ContactSection />
    </div>
  );
}