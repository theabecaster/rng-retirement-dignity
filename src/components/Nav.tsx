"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Topics", href: "#topics" },
  { label: "Questions", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-parchment/95 backdrop-blur-md border-b border-forest/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="font-newsreader text-lg tracking-tight">
              <span className={`font-semibold transition-colors duration-500 ${scrolled ? "text-forest" : "text-white"}`}>
                RNG
              </span>
              <span className={`transition-colors duration-500 ${scrolled ? "text-copper" : "text-copper-light"}`}>
                {" "}Retirement Dignity
              </span>
            </span>
            <span
              className="absolute -bottom-1 left-0 h-px bg-copper transition-all duration-300 group-hover:w-full"
              style={{ width: 0 }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-outfit font-medium tracking-wide uppercase transition-colors duration-300 group ${
                  scrolled
                    ? "text-stone hover:text-forest"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 w-full h-px transition-all duration-300 ${
                  scrolled ? "bg-forest" : "bg-white"
                } ${menuOpen ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1/2 w-full h-px transition-all duration-300 ${
                  scrolled ? "bg-forest" : "bg-white"
                } ${menuOpen ? "opacity-0 translate-x-2" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 w-full h-px transition-all duration-300 ${
                  scrolled ? "bg-forest" : "bg-white"
                } ${menuOpen ? "top-1/2 -rotate-45" : "top-full"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-18 bg-parchment overflow-hidden"
          >
            <div className="flex flex-col justify-center items-center h-full -mt-18 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="font-newsreader text-3xl text-forest hover:text-copper transition-colors duration-300 py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 w-12 h-px bg-copper"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-4 font-outfit text-xs text-stone tracking-widest uppercase"
              >
                Education · Clarity · Dignity
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
