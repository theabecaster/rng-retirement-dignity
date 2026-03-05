"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "We Educate Before We Recommend",
    body: "We believe informed decisions are better decisions. Our job is to help you understand your options completely before anything else. Knowledge is the foundation of every good plan.",
  },
  {
    number: "02",
    title: "No Pressure, No Rush",
    body: "Planning for retirement and healthcare is deeply personal. We move at your pace and never push products. A good plan built with care is worth more than a fast one built under pressure.",
  },
  {
    number: "03",
    title: "Long-Term Relationships, Not Transactions",
    body: "We're building a resource and community for people navigating aging, retirement, and healthcare with dignity. This isn't a one-time conversation — it's an ongoing relationship.",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/25 group-hover:bg-gold/60 transition-colors duration-500" />

      <div className="pl-8 py-2">
        {/* Number */}
        <span className="font-sora text-[11px] text-gold tracking-[0.3em] uppercase font-medium">
          {pillar.number}
        </span>

        {/* Title */}
        <h3 className="font-cormorant text-2xl lg:text-[1.7rem] text-navy mt-3 mb-4 leading-snug">
          {pillar.title}
        </h3>

        {/* Body */}
        <p className="font-sora text-[15px] text-slate leading-relaxed">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-28 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-sora text-[11px] text-gold tracking-[0.3em] uppercase font-medium mb-5">
              02 — Our Philosophy
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl text-navy leading-tight">
              Education First.
              <br />
              <em className="text-gold">Always.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex items-end"
          >
            <p className="font-sora text-base lg:text-lg text-slate leading-relaxed max-w-xl">
              We work with people who are often underserved and undereducated when
              it comes to retirement, healthcare, and financial planning. Our goal
              is to empower you with clarity and understanding — and only then,
              when appropriate, offer solutions.
            </p>
          </motion.div>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-navy/10 origin-left mb-16"
        />

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
