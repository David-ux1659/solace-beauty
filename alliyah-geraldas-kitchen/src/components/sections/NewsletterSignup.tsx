"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 text-orange"
          >
            Stay Connected
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4"
          >
            Never Miss a Weekend Menu
          </motion.h2>

          <motion.div variants={fadeInUp} className="w-16 h-1 rounded-full bg-orange mx-auto mb-4" />

          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-lg mb-8 max-w-lg mx-auto"
          >
            Get our weekend menu delivered to your inbox every Thursday — plus exclusive deals and early access to specials.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green/10 border border-green/20 rounded-xl p-6 max-w-md mx-auto"
            >
              <svg className="w-12 h-12 text-green mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-heading text-xl font-bold text-navy mb-1">You&apos;re In!</p>
              <p className="text-gray-500 text-sm">Check your inbox this Thursday for the weekend menu.</p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 bg-white text-charcoal placeholder-gray-400 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 text-base"
              />
              <button
                type="submit"
                className="bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          )}

          <motion.p variants={fadeInUp} className="text-xs text-gray-400 mt-4">
            No spam ever. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
