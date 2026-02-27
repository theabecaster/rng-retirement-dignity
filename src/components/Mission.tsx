"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "We Educate Before We Recommend",
    body: "We believe informed decisions are better decisions. Our job is to help you understand your options completely before anything else. Knowledge is the foundation of every good plan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "No Pressure, No Rush",
    body: "Planning for retirement and healthcare is deeply personal. We move at your pace and never push products. A good plan built with care is worth more than a fast one built under pressure.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Long-Term Relationships, Not Transactions",
    body: "We're building a resource and community for people navigating aging, retirement, and healthcare with dignity. This isn't a one-time conversation — it's an ongoing relationship.",
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="bg-white rounded-sm p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-gold mb-5">{card.icon}</div>
      <h3 className="font-playfair text-xl font-bold text-navy mb-3">
        {card.title}
      </h3>
      <p className="font-inter text-slate leading-relaxed text-sm">{card.body}</p>
    </motion.div>
  );
}

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mission" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-inter font-medium tracking-widest uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Education First. Always.
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Card key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
