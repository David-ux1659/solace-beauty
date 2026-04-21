"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function CateringForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green/10 border border-green/20 rounded-2xl p-8 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-gray-500">We&apos;ll get back to you within 24 hours to discuss your event.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl p-8 shadow-md space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { id: "cat-name", label: "Full Name", type: "text", placeholder: "Your name" },
          { id: "cat-email", label: "Email", type: "email", placeholder: "you@email.com" },
          { id: "cat-phone", label: "Phone", type: "tel", placeholder: "(603) 555-0123" },
          { id: "cat-date", label: "Event Date", type: "date", placeholder: "" },
        ].map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-sm font-semibold text-navy mb-1.5">{f.label}</label>
            <input id={f.id} type={f.type} placeholder={f.placeholder} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cat-event" className="block text-sm font-semibold text-navy mb-1.5">Event Type</label>
          <select id="cat-event" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none bg-white">
            <option value="">Select...</option>
            <option>Birthday Party</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Family Gathering</option>
            <option>Community Event</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cat-guests" className="block text-sm font-semibold text-navy mb-1.5">Estimated Guests</label>
          <input id="cat-guests" type="number" min="20" placeholder="e.g. 50" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20" />
        </div>
      </div>
      <div>
        <label htmlFor="cat-details" className="block text-sm font-semibold text-navy mb-1.5">Details &amp; Special Requests</label>
        <textarea id="cat-details" rows={4} placeholder="Tell us about your event, preferred dishes, dietary needs, etc." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 resize-none" />
      </div>
      <button type="submit" className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-4 rounded-xl transition-colors cursor-pointer">
        Submit Request
      </button>
    </form>
  );
}
