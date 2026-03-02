"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-forest/15 px-0 py-3 font-outfit text-[15px] text-charcoal placeholder:text-stone/40 focus:outline-none focus:border-copper transition-colors duration-300";

  return (
    <section id="contact" className="py-28 lg:py-36 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-outfit text-[11px] text-copper tracking-[0.3em] uppercase font-medium mb-5">
              06 — Contact
            </p>
            <h2 className="font-newsreader text-4xl lg:text-5xl text-forest leading-tight mb-6">
              Have Questions?
              <br />
              <em className="text-copper">Let&apos;s Talk.</em>
            </h2>
            <p className="font-outfit text-base text-stone leading-relaxed mb-10 max-w-sm">
              No sales pitch. No pressure. Just a conversation about your
              questions and what matters to you.
            </p>

            {/* Divider */}
            <div className="w-8 h-px bg-copper/30 mb-8" />

            {/* Contact details */}
            <div className="space-y-4">
              <p className="font-outfit text-sm text-stone/70">
                Prefer to reach out directly?
              </p>
              <p className="font-outfit text-sm text-forest font-medium">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="py-20 text-center lg:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-newsreader text-3xl text-forest mb-3">
                  Thank You
                </h3>
                <p className="font-outfit text-stone text-[15px]">
                  Your message has been received. Roberto will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-outfit text-[11px] text-stone tracking-[0.2em] uppercase mb-3">
                      Your Name <span className="text-copper">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block font-outfit text-[11px] text-stone tracking-[0.2em] uppercase mb-3">
                      Email <span className="text-copper">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-outfit text-[11px] text-stone tracking-[0.2em] uppercase mb-3">
                    Phone{" "}
                    <span className="text-stone/40 normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(305) 000-0000"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block font-outfit text-[11px] text-stone tracking-[0.2em] uppercase mb-3">
                    Your Message <span className="text-copper">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What questions can we help you think through?"
                    className={`${inputClasses} resize-none border border-forest/10 rounded-none px-4 py-4`}
                  />
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    className="group relative inline-flex items-center gap-3 bg-forest hover:bg-forest-light text-parchment font-outfit font-medium px-8 py-4 text-sm tracking-wide transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </div>

                <p className="font-outfit text-xs text-stone/40 pt-2">
                  RNG Insurance Group · Licensed Insurance Professional
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
