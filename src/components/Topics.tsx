"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topics = [
  {
    number: "01",
    title: "Life Insurance",
    body: "What it actually does, what it costs, and what most people misunderstand about it. We go beyond the basics.",
  },
  {
    number: "02",
    title: "Retirement Income Planning",
    body: "How to create reliable income in retirement — what works, what doesn't, and what the math actually looks like for real people.",
  },
  {
    number: "03",
    title: "Annuities",
    body: "One of the most misunderstood financial tools. We break down how they work, when they help, and when they don't — without jargon.",
  },
  {
    number: "04",
    title: "Medicare & Medicare Advantage",
    body: "Navigating Medicare is confusing. We help you understand all your options clearly — before you need to choose — so you can make the right call.",
  },
  {
    number: "05",
    title: "Long-Term Care & Aging",
    body: "Planning for healthcare as you age is one of the most important — and most neglected — parts of retirement. We help you think ahead.",
  },
  {
    number: "06",
    title: "Common Mistakes to Avoid",
    body: "The questions most people don't know to ask, and the decisions they later regret. We help you get ahead of the most common planning errors.",
  },
];

function TopicCard({
  topic,
  index,
}: {
  topic: (typeof topics)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-parchment/60 backdrop-blur-sm border border-forest/8 p-8 lg:p-10 hover:border-copper/30 transition-all duration-500"
    >
      {/* Number */}
      <span className="font-outfit text-[11px] text-sage tracking-[0.3em] uppercase font-medium">
        {topic.number}
      </span>

      {/* Title */}
      <h3 className="font-newsreader text-xl lg:text-2xl text-white mt-4 mb-4 leading-snug group-hover:text-copper-light transition-colors duration-500">
        {topic.title}
      </h3>

      {/* Copper line */}
      <div className="w-8 h-px bg-copper/40 mb-4 group-hover:w-12 transition-all duration-500" />

      {/* Body */}
      <p className="font-outfit text-[14px] text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-500">
        {topic.body}
      </p>
    </motion.div>
  );
}

export default function Topics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="topics"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(175deg, #1C3829 0%, #0F2319 50%, #162E22 100%)",
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, #F4EDE4 80px, #F4EDE4 81px), repeating-linear-gradient(0deg, transparent, transparent 80px, #F4EDE4 80px, #F4EDE4 81px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <p className="font-outfit text-[11px] text-copper tracking-[0.3em] uppercase font-medium mb-5">
              03 — What We Cover
            </p>
            <h2 className="font-newsreader text-4xl lg:text-5xl text-white leading-tight">
              Topics We Help
              <br />
              You <em className="text-copper-light">Understand</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 flex items-end"
          >
            <p className="font-outfit text-base text-white/45 leading-relaxed max-w-lg">
              These are the areas where people most often feel lost, misled, or
              unprepared. We bring clarity to all of them — without jargon,
              without pressure.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-white/10 origin-left mb-16"
        />

        {/* Topic Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {topics.map((topic, i) => (
            <TopicCard key={i} topic={topic} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
