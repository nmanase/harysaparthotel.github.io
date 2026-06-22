import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Award, Heart, Gem } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  const values = [
    {
      icon: Gem,
      title: "Precision",
      description: "Every stroke, every detail is executed with unwavering precision and care."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for nail artistry drives us to continuously evolve and innovate."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every service we provide."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                alt="Aurelia Chen - Nail Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
                The Artist
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">
                Aurelia Chen
              </h1>
              <div className="space-y-6 text-[#3D2B1F]/70 leading-relaxed">
                <p>
                  With over a decade of experience in luxury nail artistry, 
                  Aurelia has cultivated a distinctive style that blends 
                  traditional elegance with contemporary edge.
                </p>
                <p>
                  Trained in both Paris and Tokyo, her work has graced the 
                  pages of Vogue, Elle, and Harper's Bazaar. She has been 
                  the go-to nail artist for Fashion Week runways and 
                  celebrity red carpet moments.
                </p>
                <p>
                  "I believe nails are the ultimate accessory. They're personal, 
                  intimate, and infinitely expressive. My goal is to create 
                  designs that feel like an extension of your identity."
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-[#e8e5df]">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">12+</p>
                    <p className="text-[#9C8B7A] text-sm mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">5K+</p>
                    <p className="text-[#9C8B7A] text-sm mt-1">Happy Clients</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">50+</p>
                    <p className="text-[#9C8B7A] text-sm mt-1">Editorial Features</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-[#1a1a1a] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[#D4A5A5] text-sm tracking-[0.3em] uppercase mb-8">
              The Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-8">
              We don't just create nails.
              <br />
              We craft <span className="italic text-[#D4A5A5]">wearable art</span>.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Every appointment at Aurelia begins with understanding—your style, 
              your story, your vision. We believe that the best designs emerge 
              from genuine connection and creative collaboration.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
                What Guides Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
                Our Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#9C8B7A]/30 rounded-full">
                    <value.icon className="w-6 h-6 text-[#9C8B7A]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#3D2B1F]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Studio Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80"
                alt="The Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                alt="The Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
        
        <FadeIn>
          <div className="mt-12 text-center">
            <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4">
              The Studio
            </h3>
            <p className="text-[#3D2B1F]/70 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Los Angeles, our intimate studio space 
              was designed to feel like a sanctuary. From the moment you step 
              in, you're enveloped in calm, sophistication, and creative energy.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Press */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <FadeIn>
          <div className="border-y border-[#e8e5df] py-12">
            <p className="text-center text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-8">
              As Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 text-[#1a1a1a]/30">
              <span className="font-serif text-2xl">VOGUE</span>
              <span className="font-serif text-2xl">ELLE</span>
              <span className="font-serif text-2xl">HARPER'S BAZAAR</span>
              <span className="font-serif text-2xl">ALLURE</span>
              <span className="font-serif text-2xl">GLAMOUR</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Let's Create Together
          </h2>
          <p className="text-[#3D2B1F]/70 mb-10 max-w-md mx-auto">
            Ready to bring your nail vision to life? I'd love to hear from you.
          </p>
          <Link
            to={createPageUrl("Booking")}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}