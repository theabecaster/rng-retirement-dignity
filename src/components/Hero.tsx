"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-end overflow-hidden pb-28 lg:pb-36"
      style={{
        background:
          "linear-gradient(160deg, #0C1F3F 0%, #071428 40%, #0F2545 70%, #071428 100%)",
      }}
    >
      {/* Geometric diamond pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px), repeating-linear-gradient(-45deg, transparent, transparent 60px, #C9A84C 60px, #C9A84C 61px)",
        }}
      />

      {/* Warm gold radial glow */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 75% 65%, #C9A84C, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        {/* Section number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sora text-[11px] text-gold/60 tracking-[0.3em] uppercase mb-8"
        >
          01 — Welcome
        </motion.p>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] text-white font-normal tracking-tight"
          >
            Understanding
            <br />
            Your Future{" "}
            <em className="text-gold-light not-italic font-light">
              Shouldn&apos;t
            </em>
            <br />
            Be Complicated
          </motion.h1>
        </div>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md h-px bg-gold/40 origin-left my-10"
        />

        {/* Subtext */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-sora text-base lg:text-lg text-white/50 max-w-lg leading-relaxed"
          >
            We help individuals, families, and public servants navigate life
            insurance, retirement income, Medicare, and long-term planning —
            with clarity, not pressure.
          </motion.p>

          <motion.a
            href="#philosophy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="group flex items-center gap-3 text-gold-light/70 hover:text-gold-light transition-colors duration-300"
          >
            <span className="font-sora text-[13px] tracking-wide uppercase">
              Explore Below
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Bottom edge gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
