import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, User, Phone, MessageSquare, Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FadeIn from "@/components/ui/FadeIn";

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "Signature Manicure",
    "Luxury Gel Extension",
    "Bespoke Nail Art",
    "Bridal Collection",
    "Chrome & Specialty",
    "Maintenance & Refill"
  ];

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6"
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-[#9C8B7A]/10 rounded-full">
            <Check className="w-10 h-10 text-[#9C8B7A]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Request Received
          </h1>
          <p className="text-[#3D2B1F]/70 max-w-md mx-auto mb-8">
            Thank you for your inquiry. We'll review your request and 
            get back to you within 24 hours to confirm your appointment.
          </p>
          <p className="text-[#9C8B7A] text-sm tracking-widest uppercase">
            We look forward to seeing you
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
              Begin Your Journey
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
              Book Your<br />Session
            </h1>
            <p className="text-[#3D2B1F]/70 leading-relaxed max-w-md">
              Complete the form below to request your appointment. 
              We'll confirm your booking within 24 hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="lg:pl-12 space-y-8">
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Location</h3>
                <p className="text-[#3D2B1F]/70">
                  8423 Melrose Place<br />
                  Los Angeles, CA 90069
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Hours</h3>
                <p className="text-[#3D2B1F]/70">
                  Tuesday – Saturday<br />
                  10:00 AM – 6:00 PM
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-2">Contact</h3>
                <p className="text-[#3D2B1F]/70">
                  hello@aurelia-nails.com<br />
                  (310) 555-0123
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <FadeIn direction="left" className="hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden sticky top-32">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
                alt="Luxury nails"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Your Details
                </h3>
                
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C8B7A]" />
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C8B7A]" />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C8B7A]" />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none"
                    required
                  />
                </div>
              </div>

              {/* Appointment */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Appointment Details
                </h3>

                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({...formData, service: value})}
                >
                  <SelectTrigger className="py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9C8B7A]" />
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                      className="pl-12 py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none"
                      required
                    />
                  </div>

                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData({...formData, preferredTime: value})}
                  >
                    <SelectTrigger className="py-6 bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none">
                      <Clock className="w-5 h-5 text-[#9C8B7A] mr-2" />
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#1a1a1a] pb-4 border-b border-[#e8e5df]">
                  Additional Notes
                </h3>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#9C8B7A]" />
                  <Textarea
                    placeholder="Tell us about your vision, inspiration, or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="pl-12 pt-4 min-h-[150px] bg-white border-[#e8e5df] focus:border-[#9C8B7A] rounded-none resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-6 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors rounded-none"
              >
                Request Appointment
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>

              <p className="text-[#3D2B1F]/50 text-xs text-center">
                By submitting this form, you agree to our booking policies. 
                A 50% deposit will be required to confirm your appointment.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}