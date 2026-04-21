"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [link] = useState("alliyahandgeraldaskitchen.com/ref/" + Math.random().toString(36).slice(2, 8));

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl p-8 shadow-md text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-xl font-bold text-navy mb-3">You&apos;re In!</h3>
        <p className="text-gray-500 text-sm mb-4">Share your unique link with friends:</p>
        <div className="bg-cream rounded-lg p-3 flex items-center gap-2">
          <input type="text" value={link} readOnly className="flex-1 bg-transparent text-sm text-navy font-mono focus:outline-none" />
          <button
            onClick={() => navigator.clipboard.writeText(link)}
            className="bg-orange text-white text-xs font-bold px-3 py-2 rounded-lg cursor-pointer hover:bg-orange-dark transition-colors"
          >
            Copy
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl p-8 shadow-md space-y-4">
      <div>
        <label htmlFor="ref-name" className="block text-sm font-semibold text-navy mb-1.5">Your Name</label>
        <input id="ref-name" type="text" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
      </div>
      <div>
        <label htmlFor="ref-email" className="block text-sm font-semibold text-navy mb-1.5">Email</label>
        <input id="ref-email" type="email" required placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
      </div>
      <div>
        <label htmlFor="ref-phone" className="block text-sm font-semibold text-navy mb-1.5">Phone</label>
        <input id="ref-phone" type="tel" required placeholder="(603) 555-0123" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
      </div>
      <button type="submit" className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-4 rounded-xl transition-colors cursor-pointer">
        Get My Referral Link
      </button>
    </form>
  );
}
