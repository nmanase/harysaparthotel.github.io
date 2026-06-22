import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  const services = [
    {
      name: "Signature Manicure",
      description: "Our foundational experience featuring meticulous nail shaping, cuticle care, and a flawless polish application.",
      duration: "60 min",
      price: "$85",
      popular: false
    },
    {
      name: "Luxury Gel Extension",
      description: "Expertly sculpted extensions using premium gel systems, customized to your desired length and shape.",
      duration: "90 min",
      price: "$150",
      popular: true
    },
    {
      name: "Bespoke Nail Art",
      description: "Intricate hand-painted designs, 3D embellishments, and custom artwork tailored to your vision.",
      duration: "120 min",
      price: "$200+",
      popular: true
    },
    {
      name: "Bridal Collection",
      description: "A comprehensive bridal package including consultation, trial design, and wedding-day service.",
      duration: "180 min",
      price: "$350",
      popular: false
    },
    {
      name: "Chrome & Specialty",
      description: "Statement-making chrome, holographic, and specialty finish applications.",
      duration: "75 min",
      price: "$120",
      popular: false
    },
    {
      name: "Maintenance & Refill",
      description: "Keep your extensions looking pristine with our professional maintenance service.",
      duration: "60 min",
      price: "$75",
      popular: false
    }
  ];

  const addOns = [
    { name: "Hand Massage", price: "$20" },
    { name: "Paraffin Treatment", price: "$25" },
    { name: "Nail Repair (per nail)", price: "$15" },
    { name: "Design Consultation", price: "Complimentary" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <FadeIn>
            <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
              The Services
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
              Curated<br />Experiences
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[#3D2B1F]/70 leading-relaxed lg:pb-2">
              Each service at Aurelia is designed to be a moment of indulgence. 
              We believe in quality over quantity, taking the time to ensure 
              every detail is perfect.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1}>
              <div className="group relative bg-white p-8 lg:p-10 h-full flex flex-col border border-[#e8e5df] hover:border-[#9C8B7A]/30 transition-colors duration-500">
                {service.popular && (
                  <div className="absolute top-6 right-6">
                    <Sparkles className="w-4 h-4 text-[#D4A5A5]" />
                  </div>
                )}
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-[#e8e5df] pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#9C8B7A]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="font-serif text-2xl text-[#1a1a1a]">
                    {service.price}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="bg-[#1a1a1a] p-10 lg:p-16">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-[#D4A5A5] text-sm tracking-[0.3em] uppercase mb-4">
                  Enhancements
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Add-On Services
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Elevate your experience with our curated selection of 
                  enhancement services.
                </p>
              </div>

              <div className="space-y-4">
                {addOns.map((addon, index) => (
                  <div 
                    key={addon.name}
                    className="flex items-center justify-between py-4 border-b border-white/10"
                  >
                    <span className="text-white">{addon.name}</span>
                    <span className="text-[#D4A5A5] font-serif text-lg">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Policies */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Booking Policy
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                A 50% deposit is required to secure your appointment. 
                Deposits are non-refundable within 48 hours of service.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Cancellations
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Please provide 48 hours notice for cancellations or 
                rescheduling to avoid forfeiting your deposit.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Arrival
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Please arrive 5-10 minutes early to ensure your full 
                service time. Late arrivals may result in shortened services.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Ready to Book?
          </h2>
          <p className="text-[#3D2B1F]/70 mb-10 max-w-md mx-auto">
            Secure your appointment and begin your journey to exquisite nails.
          </p>
          <Link
            to={createPageUrl("Booking")}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors"
          >
            Book Your Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}