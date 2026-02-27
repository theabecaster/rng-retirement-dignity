"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topics = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Life Insurance",
    body: "What it actually does, what it costs, and what most people misunderstand about it. We go beyond the basics.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Retirement Income Planning",
    body: "How to create reliable income in retirement — what works, what doesn't, and what the math actually looks like for real people.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Annuities",
    body: "One of the most misunderstood financial tools. We break down how they work, when they help, and when they don't — without jargon.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Medicare & Medicare Advantage",
    body: "Navigating Medicare is confusing. We help you understand all your options clearly — before you need to choose — so you can make the right call.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Long-Term Care & Aging",
    body: "Planning for healthcare as you age is one of the most important — and most neglected — parts of retirement. We help you think ahead.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Common Mistakes to Avoid",
    body: "The questions most people don't know to ask, and the decisions they later regret. We help you get ahead of the most common planning errors.",
  },
];

function TopicCard({ topic, index }: { topic: typeof topics[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group bg-cream rounded-sm p-7 border border-navy/8 hover:border-gold/30 hover:shadow-md transition-all duration-300"
    >
      <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
        {topic.icon}
      </div>
      <h3 className="font-playfair text-lg font-bold text-navy mb-2">
        {topic.title}
      </h3>
      <p className="font-inter text-slate text-sm leading-relaxed">{topic.body}</p>
    </motion.div>
  );
}

export default function Topics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="topics" className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-inter font-medium tracking-widest uppercase mb-4">
            What We Cover
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Topics We Help You Understand
          </h2>
          <p className="font-inter text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            These are the areas where people most often feel lost, misled, or
            unprepared. We bring clarity to all of them.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((topic, i) => (
            <TopicCard key={i} topic={topic} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
