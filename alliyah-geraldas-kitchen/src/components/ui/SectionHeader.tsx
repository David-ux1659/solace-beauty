"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export function SectionHeader({ label, title, subtitle, light = false, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full ${
            light ? "bg-white/10 text-orange-light" : "bg-orange/10 text-orange"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className={`w-16 h-1 rounded-full ${center ? "mx-auto" : ""} bg-orange mb-4`} />
      {subtitle && (
        <p className={`text-lg max-w-xl ${center ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
