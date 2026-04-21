"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface Milestone {
  year: string;
  title: string;
  text: string;
}

export function AboutClient({ milestones }: { milestones: Milestone[] }) {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Our Journey" title="From Home Kitchen to Community Favorite" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/20 hidden sm:block" />

          <div className="space-y-8">
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                variants={fadeInUp}
                className="flex gap-6 items-start"
              >
                <div className="hidden sm:flex shrink-0 w-12 h-12 bg-orange text-white rounded-full items-center justify-center font-heading font-bold text-sm z-10">
                  {m.year.slice(-2)}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
                  <span className="text-xs font-bold text-orange uppercase tracking-wider">{m.year}</span>
                  <h3 className="font-heading text-xl font-bold text-navy mt-1 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
