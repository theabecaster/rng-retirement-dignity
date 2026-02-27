"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 border border-gold/20 rounded-sm p-10">
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold translate-x-2 translate-y-2" />

              <p className="font-playfair text-3xl font-bold text-gold italic leading-snug mb-6">
                &ldquo;Trust, education, and credibility come first.&rdquo;
              </p>
              <div className="w-12 h-0.5 bg-gold mb-4" />
              <p className="font-inter text-white/60 text-sm">— Roberto N. Garcia</p>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gold/5 rounded-sm blur-2xl" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gold text-sm font-inter font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Roberto N. Garcia
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <div className="space-y-4 font-inter text-white/70 leading-relaxed text-base">
              <p>
                Roberto N. Garcia is a licensed insurance professional and
                retirement planning educator serving individuals, families, and
                public servants across the community.
              </p>
              <p>
                His mission is straightforward: help people understand what
                they&apos;re looking at, why it matters, and how it fits into
                their long-term picture — before they ever make a decision.
              </p>
              <p>
                RNG Retirement Dignity is built on the belief that education and
                trust come first. When people truly understand their options,
                they make better decisions. That&apos;s the whole point.
              </p>
            </div>

            {/* Credentials badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-sm px-5 py-3">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-inter text-white/80 text-sm">
                Licensed Insurance Professional · RNG Insurance Group
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
