"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, float } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/food/haitian-plate-takeout.jpg"
          alt="Authentic Haitian food spread"
          fill
          className="object-cover"
          preload
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeInUp}>
            <Badge text="Only 40 plates available — once we sell out, ordering closes" variant="urgent" animated />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mt-6 mb-4 leading-[1.1]"
          >
            Authentic Haitian Food —{" "}
            <span className="text-orange italic">This Weekend Only</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-3 leading-relaxed max-w-lg"
          >
            Fresh homemade Haitian plates &bull; Serving Manchester, NH &bull; Limited availability
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base text-gray-400 mb-8"
          >
            Easter weekend special — make your weekend meal easy
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Reserve Your Plate
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              View Menu
            </Link>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-gray-400 mt-4">
            Reserve your plate in under 60 seconds
          </motion.p>
        </motion.div>
      </div>

      {/* Floating badge */}
      <motion.div
        variants={float}
        animate="animate"
        className="hidden lg:block absolute bottom-12 right-12 z-10"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 max-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-orange">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-navy">4.9</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            &ldquo;Best Haitian food in New Hampshire. The oxtail is incredible!&rdquo;
          </p>
          <p className="text-[10px] text-gray-400 mt-1">— Google Review</p>
        </div>
      </motion.div>
    </section>
  );
}
