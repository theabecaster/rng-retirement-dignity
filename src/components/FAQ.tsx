"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Life insurance is just for when you die.",
    answer:
      "This is one of the most common misconceptions — and one of the most costly. Many modern life insurance policies include living benefits: riders that allow you to access a portion of your death benefit while you're still alive if you experience a serious illness, disability, or long-term care need. Additionally, permanent life insurance can build cash value over time that you can borrow against, use as supplemental retirement income, or pass on as part of your estate. Life insurance is a financial tool with many uses. Whether a specific policy makes sense for your situation depends on your goals — which is why we always start with education.",
  },
  {
    question: "Medicare covers everything I'll need in retirement.",
    answer:
      "Medicare is an excellent foundation, but it has real gaps. Original Medicare (Parts A and B) does not cover dental, vision, or hearing. It also does not cover most long-term care (nursing home care, in-home care for chronic illness). There are deductibles, copays, and coinsurance costs that can add up significantly. Prescription drug coverage requires a separate Part D plan. Medicare Advantage plans (Part C) bundle everything together with a private insurer, which sounds simpler — but comes with network restrictions, prior authorization requirements, and rules that vary widely. Understanding what Medicare covers and doesn't cover — before you need it — is essential to protecting yourself in retirement.",
  },
  {
    question: "Annuities are bad investments.",
    answer:
      "Annuities have a complicated reputation — partly deserved, partly not. Like any financial tool, they're not universally good or bad. They exist on a spectrum: some are complex, expensive, and poorly suited for most people. Others are straightforward, cost-effective, and serve a specific purpose well — primarily, creating guaranteed income you cannot outlive. The real question isn't 'are annuities good or bad?' It's 'does this specific annuity, in this specific structure, make sense for your specific situation?' We help you understand how they actually work so you can make that evaluation yourself.",
  },
  {
    question: "I can figure out retirement income later.",
    answer:
      "Retirement income planning has time-sensitive windows that close whether you're ready or not. Decisions about Social Security timing can permanently affect your monthly benefit — by as much as 30% or more depending on when you claim. Roth conversions are most effective in specific tax windows. Long-term care insurance becomes harder to qualify for and more expensive as you age. The sooner you understand your options, the more flexibility you have. Most people who delay planning wish they hadn't — not because they needed to buy something, but because they needed time to make thoughtful decisions.",
  },
  {
    question: "My employer's group coverage is enough.",
    answer:
      "Group coverage through an employer is valuable — but it comes with limitations most people don't fully understand until it's too late. Employer-sponsored life insurance typically ends when you leave the job, retire, or the company changes providers. The coverage amount is often far below what your family actually needs. Group disability coverage usually replaces only 60% of income and may have exclusions. Health coverage during the gap between retirement and Medicare eligibility (age 65) can be a major expense. Understanding what your group plan actually covers — and where it leaves gaps — is an important part of any long-term plan.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-navy/8 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-7 flex items-start justify-between gap-6 group cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          {/* Number */}
          <span className="font-sora text-[11px] text-gold/60 tracking-wider mt-1.5 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span className="font-cormorant text-lg lg:text-xl text-navy group-hover:text-gold transition-colors duration-300 italic leading-snug">
            &ldquo;{faq.question}&rdquo;
          </span>
        </div>

        {/* Toggle indicator */}
        <span className="flex-shrink-0 mt-1.5 w-5 h-5 flex items-center justify-center">
          <span
            className={`block w-3 h-px bg-gold transition-all duration-300`}
          />
          <span
            className={`absolute block w-px h-3 bg-gold transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 lg:pl-12 pr-8">
              <div className="w-6 h-px bg-gold/30 mb-5" />
              <p className="font-sora text-[15px] text-slate leading-[1.75] max-w-2xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-28 lg:py-36 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-sora text-[11px] text-gold tracking-[0.3em] uppercase font-medium mb-5">
            04 — Common Questions
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-navy leading-tight mb-5">
            What Most People
            <br />
            <em className="text-gold">Aren&apos;t Told</em>
          </h2>
          <p className="font-sora text-base text-slate leading-relaxed max-w-xl">
            These are some of the most common misconceptions we encounter — and
            the fuller picture behind them.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-navy/10 origin-left mb-2"
        />

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
