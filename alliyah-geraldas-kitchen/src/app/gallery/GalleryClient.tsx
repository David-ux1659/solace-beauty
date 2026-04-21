"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const tabs = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "family", label: "Behind the Scenes" },
];

export function GalleryClient({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered = filter === "all" ? photos : photos.filter((p) => p.category === filter);

  return (
    <>
      <SectionHeader label="Gallery" title="A Look Inside Our Kitchen" subtitle="The food, the family, the flavor." />

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              filter === tab.key ? "bg-navy text-white" : "bg-white text-gray-500 border border-gray-200 hover:border-orange hover:text-orange"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={filter}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filtered.map((photo, i) => (
          <motion.div
            key={`${photo.src}-${i}`}
            variants={fadeInUp}
            className={`relative overflow-hidden rounded-xl cursor-pointer group ${
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            onClick={() => setLightbox(photo)}
          >
            <div className={`relative ${i % 5 === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full h-auto max-h-[80vh]"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-charcoal hover:bg-gray-100 cursor-pointer"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <p className="text-white text-center mt-4 text-sm">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
