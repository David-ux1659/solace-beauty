"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MenuCard } from "@/components/ui/MenuCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import menuData from "@/content/menu/current-week.json";

type Tab = "combos" | "mains" | "sides" | "drinks" | "specials";

const tabs: { key: Tab; label: string }[] = [
  { key: "combos", label: "Combos" },
  { key: "mains", label: "Main Dishes" },
  { key: "sides", label: "Sides" },
  { key: "drinks", label: "Drinks" },
  { key: "specials", label: "Specials" },
];

export function MenuPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>("combos");

  const currentItems = menuData[activeTab] || [];

  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Limited Quantities Available"
            title={menuData.weekLabel}
            subtitle={`${menuData.dateRange} &middot; ${menuData.note}`}
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-navy text-white shadow-md"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-orange hover:text-orange"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentItems.map((item: Record<string, unknown>) => {
              if (activeTab === "drinks") {
                return (
                  <motion.div
                    key={item.id as string}
                    variants={fadeInUp}
                    className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between ${
                      item.soldOut ? "opacity-60" : ""
                    }`}
                  >
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">{item.name as string}</h3>
                    </div>
                    <span className="font-heading text-xl font-bold text-orange">${item.price as number}</span>
                  </motion.div>
                );
              }

              return (
                <MenuCard
                  key={item.id as string}
                  name={item.name as string}
                  creoleName={item.creoleName as string | undefined}
                  price={item.price as number}
                  description={item.description as string | undefined}
                  includes={(item as Record<string, unknown>).includes as string | undefined}
                  image={(item.image as string) || "/images/food/haitian-plate-takeout.jpg"}
                  badge={item.badge as string | null}
                  soldOut={item.soldOut as boolean}
                />
              );
            })}
          </motion.div>

          {/* Soup Joumou Spotlight */}
          {activeTab === "specials" &&
            menuData.specials
              .filter((s) => s.culturalNote)
              .map((special) => (
                <motion.div
                  key={special.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-16 bg-gradient-to-r from-orange/5 to-cream rounded-2xl p-8 lg:p-12 border border-orange/10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={special.image}
                        alt={special.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div>
                      <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full bg-red/10 text-red">
                        UNESCO Cultural Heritage
                      </span>
                      <h3 className="font-heading text-3xl font-bold text-navy mb-2">
                        {special.name}{" "}
                        <span className="italic text-orange text-2xl">&mdash; The Taste of Freedom</span>
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{special.culturalNote}</p>
                      <p className="text-gray-500">{special.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>

      {/* Sticky Mobile Order Button */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3">
        <Link
          href="/order"
          className="flex items-center justify-center gap-2 w-full bg-orange text-white font-bold py-4 rounded-xl cursor-pointer"
        >
          Order Now
        </Link>
      </div>
    </>
  );
}
