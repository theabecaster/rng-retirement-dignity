"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, #0C1F3F 0%, #071428 100%)",
      }}
    >
      {/* Subtle warm glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 40% 60% at 20% 50%, #C9A84C, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          {/* Left: Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="font-sora text-[11px] text-gold tracking-[0.3em] uppercase font-medium mb-10">
              05 — About
            </p>

            {/* Quote block */}
            <div className="relative">
              {/* Decorative corner marks */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t border-l border-gold/30" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b border-r border-gold/30" />

              <blockquote className="py-4 px-2">
                <p className="font-cormorant text-3xl lg:text-4xl text-gold-light italic leading-snug mb-8">
                  &ldquo;Trust, education, and credibility come first.&rdquo;
                </p>
                <footer>
                  <div className="w-8 h-px bg-gold/40 mb-4" />
                  <p className="font-sora text-sm text-white/45 tracking-wide">
                    Roberto N. Garcia
                  </p>
                  <p className="font-sora text-xs text-white/25 tracking-wide mt-1">
                    Founder, Retirement Dignity Group
                  </p>
                </footer>
              </blockquote>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            <h2 className="font-cormorant text-4xl lg:text-5xl text-white leading-tight mb-10">
              Meet Roberto
              <br />
              N. Garcia
            </h2>

            <div className="space-y-5 font-sora text-[15px] text-white/55 leading-[1.8] max-w-lg">
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
                Retirement Dignity Group is built on the belief that education and
                trust come first. When people truly understand their options,
                they make better decisions. That&apos;s the whole point.
              </p>
            </div>

            {/* Credential */}
            <div className="mt-10 pt-8 border-t border-white/8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-sora text-sm text-white/70 font-medium">
                    Licensed Insurance Professional
                  </p>
                  <p className="font-sora text-xs text-white/35 mt-0.5">
                    RNG Insurance Group
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
