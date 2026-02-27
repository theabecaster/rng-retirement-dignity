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

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-navy/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className="font-playfair text-lg font-semibold text-navy group-hover:text-gold transition-colors duration-200">
          &ldquo;{faq.question}&rdquo;
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-navy/20 flex items-center justify-center transition-all duration-200 mt-0.5 ${
            open ? "bg-gold border-gold" : "group-hover:border-gold/50"
          }`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${
              open ? "rotate-180 text-navy" : "text-slate"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-inter text-slate leading-relaxed text-sm pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-inter font-medium tracking-widest uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            What Most People Aren&apos;t Told
          </h2>
          <p className="font-inter text-slate max-w-xl mx-auto text-base leading-relaxed">
            These are some of the most common misconceptions we encounter — and
            the fuller picture behind them.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-100 px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
