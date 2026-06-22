import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar({ currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Portfolio", page: "Home" },
    { name: "Gallery", page: "Gallery" },
    { name: "Services", page: "Services" },
    { name: "About", page: "About" },
    { name: "Book", page: "Booking" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#F5F3EF]/95 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link
            to={createPageUrl("Home")}
            className="font-serif text-2xl tracking-wide text-[#1a1a1a]"
          >
            Aurelia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 hover:text-[#9C8B7A] ${
                  currentPage === link.page
                    ? "text-[#9C8B7A]"
                    : "text-[#1a1a1a]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-[#1a1a1a]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F5F3EF]"
          >
            <div className="flex flex-col h-full px-8 py-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl tracking-wide text-[#1a1a1a]">
                  Aurelia
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#1a1a1a]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.page}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileOpen(false)}
                      className={`text-3xl font-serif tracking-wide transition-colors ${
                        currentPage === link.page
                          ? "text-[#9C8B7A]"
                          : "text-[#1a1a1a]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}