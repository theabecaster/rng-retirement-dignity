"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-inter font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
            Have Questions? Let&apos;s Talk.
          </h2>
          <p className="font-inter text-slate text-base">
            No sales pitch. No pressure. Just a conversation.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-sm shadow-sm border border-gray-100 p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-2">
                Thank You
              </h3>
              <p className="font-inter text-slate">
                Your message has been received. Roberto will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter text-sm font-medium text-navy mb-2">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-navy mb-2">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-navy mb-2">
                  Phone Number{" "}
                  <span className="text-slate/60 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(305) 000-0000"
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-navy mb-2">
                  Your Message <span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What questions can we help you think through?"
                  className="w-full border border-gray-200 rounded-sm px-4 py-3 font-inter text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy hover:bg-navy-dark text-white font-inter font-semibold py-4 rounded-sm text-sm tracking-wide transition-all duration-200 hover:shadow-md"
              >
                Send Message
              </button>

              <p className="text-center font-inter text-xs text-slate/60">
                RNG Insurance Group · Licensed Insurance Professional
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
