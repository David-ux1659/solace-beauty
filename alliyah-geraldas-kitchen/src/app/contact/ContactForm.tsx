"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green/10 border border-green/20 rounded-2xl p-10 text-center flex items-center justify-center">
        <div>
          <svg className="w-12 h-12 text-green mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-heading text-2xl font-bold text-navy mb-2">Message Sent!</h3>
          <p className="text-gray-500">We&apos;ll get back to you as soon as possible.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-cream rounded-2xl p-8 shadow-sm space-y-5">
      <h3 className="font-heading text-xl font-bold text-navy">Send Us a Message</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className="block text-sm font-semibold text-navy mb-1.5">Name</label>
          <input id="c-name" type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
        </div>
        <div>
          <label htmlFor="c-email" className="block text-sm font-semibold text-navy mb-1.5">Email</label>
          <input id="c-email" type="email" required placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
        </div>
      </div>
      <div>
        <label htmlFor="c-phone" className="block text-sm font-semibold text-navy mb-1.5">Phone (optional)</label>
        <input id="c-phone" type="tel" placeholder="(603) 555-0123" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
      </div>
      <div>
        <label htmlFor="c-subject" className="block text-sm font-semibold text-navy mb-1.5">Subject</label>
        <select id="c-subject" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange focus:outline-none">
          <option value="">Select a topic...</option>
          <option>Order Question</option>
          <option>Catering Inquiry</option>
          <option>Feedback</option>
          <option>Partnership / Press</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-message" className="block text-sm font-semibold text-navy mb-1.5">Message</label>
        <textarea id="c-message" rows={5} required placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 resize-none" />
      </div>
      <button type="submit" className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-4 rounded-xl transition-colors cursor-pointer">
        Send Message
      </button>
    </form>
  );
}
