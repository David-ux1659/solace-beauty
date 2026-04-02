"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeInUp } from "@/lib/animations";

const reviews = [
  {
    name: "Marie D.",
    text: "Best Haitian food in New Hampshire, hands down. The oxtail melts in your mouth and the rice & beans taste just like my grandmother used to make back in Port-au-Prince.",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "James P.",
    text: "Ordered the lasagna combo for a family dinner — everyone was fighting over the last piece. The pikliz is the real deal. Will be ordering every weekend now.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Sofia R.",
    text: "I've never had Haitian food before and now I'm hooked. The flavors are incredible and you can tell everything is made fresh with love. The plantains are perfection.",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    name: "David L.",
    text: "Soup Joumou on Sunday was a spiritual experience. Rich, hearty, and full of flavor. Alliyah and Geralda are keeping Haitian culture alive in Manchester.",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Tamika W.",
    text: "The portions are generous, the food is authentic, and the service is warm. This is what real Caribbean cooking tastes like. Already told all my friends.",
    rating: 5,
    date: "2 weeks ago",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trusted & Authentic"
          title="What Manchester Is Saying"
        />

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl italic text-navy leading-relaxed mb-6 max-w-2xl mx-auto">
                &ldquo;{reviews[current].text}&rdquo;
              </blockquote>

              <p className="font-semibold text-charcoal">{reviews[current].name}</p>
              <p className="text-sm text-gray-400">{reviews[current].date} &middot; Google Review</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "bg-orange w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
