"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export function OurStoryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/family/mother-daughter-portrait.jpg"
                alt="Alliyah and Geralda — mother and daughter behind Alliyah & Geralda's Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-orange text-white rounded-xl p-5 shadow-lg max-w-[200px]">
              <p className="font-heading text-3xl font-bold">500+</p>
              <p className="text-sm opacity-90">Plates served and counting</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-orange/10 text-orange">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
              A Mother &amp; Daughter<br />
              <span className="italic text-orange">Haitian Kitchen</span>
            </h2>
            <div className="w-16 h-1 rounded-full bg-orange mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              What started in Geralda&apos;s kitchen — cooking family recipes passed down through generations in Haiti — has grown into something the Manchester community looks forward to every weekend.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Now, with her daughter Alliyah by her side, they&apos;re bringing the bold, soulful flavors of Haitian cuisine to New Hampshire. Every plate is cooked from scratch with fresh ingredients, love, and a deep respect for the culture that shaped them.
            </p>
            <p className="font-heading text-xl italic text-orange mb-8">
              &ldquo;Manje Lakay&rdquo; — Homemade food, made with heart.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-orange hover:text-orange-dark font-semibold transition-colors group cursor-pointer"
            >
              Read Our Full Story
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
