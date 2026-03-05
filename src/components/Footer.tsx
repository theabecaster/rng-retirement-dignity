"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #071428 0%, #050E1C 100%)",
      }}
    >
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-cormorant text-xl text-white tracking-tight mb-2">
              Retirement{" "}
              <span className="text-gold">Dignity</span>{" "}
              Group
            </p>
            <p className="font-sora text-xs text-white/25 tracking-[0.25em] uppercase">
              Education · Clarity · Dignity
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-4 flex flex-wrap gap-x-10 gap-y-3"
          >
            {[
              ["Philosophy", "#philosophy"],
              ["Topics", "#topics"],
              ["Questions", "#faq"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-sora text-[13px] text-white/30 hover:text-gold transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </motion.nav>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3 lg:text-right"
          >
            <a
              href="#hero"
              className="group inline-flex items-center gap-2 font-sora text-[13px] text-white/25 hover:text-gold transition-colors duration-300"
            >
              Back to top
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-12" />

        {/* Compliance & Legal */}
        <div className="space-y-4">
          <p className="font-sora text-[12px] text-white/20 leading-relaxed max-w-3xl">
            RNG Insurance Group is a licensed insurance entity. This website is
            for educational purposes only and does not constitute financial,
            legal, or insurance advice. Product availability and eligibility vary
            by state. Please consult a licensed professional before making any
            financial or insurance decisions.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="font-sora text-[11px] text-white/12">
              &copy; {new Date().getFullYear()} RNG Insurance Group. All rights
              reserved. Operating as Retirement Dignity Group.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
