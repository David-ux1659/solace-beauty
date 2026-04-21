"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CateringBanner() {
  return (
    <section className="py-20 lg:py-28 bg-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/10 text-orange-light"
          >
            Bring Our Kitchen to You
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Elevate Your Next Event with<br />
            <span className="italic text-orange-light">Authentic Haitian Flavors</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-300 mb-10 max-w-xl mx-auto"
          >
            From family gatherings to corporate events, we bring the warmth and flavor of our kitchen straight to your table.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            >
              Request a Custom Order
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
