"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1B2B4B 0%, #111D33 50%, #1E3050 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 75% 75%, #C9A84C 0%, transparent 50%)",
        }}
      />

      {/* Decorative horizontal line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="text-gold/80 text-sm font-inter font-medium tracking-widest uppercase mb-6">
            Education · Clarity · Dignity
          </p>

          {/* Headline */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Understanding Your Future
            <br />
            <span className="text-gold">Shouldn&apos;t Be</span> Complicated
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            We help individuals, families, and public servants navigate life
            insurance, retirement income, Medicare, and long-term planning —
            with clarity, not pressure.
          </p>

          {/* CTA */}
          <motion.a
            href="#mission"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-inter font-semibold px-8 py-4 rounded-sm text-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Learning
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
