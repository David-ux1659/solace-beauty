"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuCard } from "@/components/ui/MenuCard";
import menuData from "@/content/menu/current-week.json";

export function MenuPreview() {
  const featured = [...menuData.combos, ...menuData.specials.filter((s) => !s.soldOut)].slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Limited Quantities Available"
          title={menuData.weekLabel}
          subtitle={menuData.note}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featured.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              creoleName={item.creoleName}
              price={item.price}
              description={item.description}
              includes={"includes" in item ? item.includes : undefined}
              image={item.image}
              badge={item.badge}
              soldOut={item.soldOut}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-orange hover:text-orange-dark font-semibold text-lg transition-colors group cursor-pointer"
          >
            View Full Menu
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
