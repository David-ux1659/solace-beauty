"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface MenuCardProps {
  name: string;
  creoleName?: string;
  price: number;
  description?: string;
  includes?: string;
  image: string;
  badge?: string | null;
  soldOut?: boolean;
}

export function MenuCard({ name, creoleName, price, description, includes, image, badge, soldOut }: MenuCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${
        soldOut ? "opacity-70 grayscale" : ""
      }`}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`absolute top-4 right-4 z-10 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
            badge === "MOST POPULAR"
              ? "bg-orange text-white"
              : badge === "SUNDAY EXCLUSIVE"
              ? "bg-red text-white"
              : badge === "FREE WITH ORDER"
              ? "bg-green text-white"
              : badge === "NEW"
              ? "bg-navy text-white"
              : "bg-orange/10 text-orange"
          }`}
        >
          {badge}
        </span>
      )}

      {/* Sold Out Overlay */}
      {soldOut && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/60">
          <span className="text-red font-heading text-3xl font-bold -rotate-12 border-4 border-red px-6 py-2">
            SOLD OUT
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-navy mb-1">{name}</h3>
        {creoleName && (
          <p className="font-heading italic text-sm text-orange mb-2">{creoleName}</p>
        )}
        <p className="text-2xl font-heading font-bold text-orange mb-2">
          {price === 0 ? "FREE" : `$${price % 1 === 0 ? price : price.toFixed(2)}`}
        </p>
        {includes && (
          <div className="bg-cream rounded-lg px-4 py-3 mb-3">
            <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mb-1">Includes:</p>
            <p className="text-sm text-charcoal">{includes}</p>
          </div>
        )}
        {description && !includes && (
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
