"use client";

import { motion } from "framer-motion";
import { pulse } from "@/lib/animations";

interface BadgeProps {
  text: string;
  variant?: "urgent" | "info" | "success";
  animated?: boolean;
}

export function Badge({ text, variant = "urgent", animated = false }: BadgeProps) {
  const colors = {
    urgent: "bg-red/10 text-red border-red/20",
    info: "bg-orange/10 text-orange border-orange/20",
    success: "bg-green/10 text-green border-green/20",
  };

  const Comp = animated ? motion.span : "span";
  const props = animated ? { variants: pulse, animate: "animate" } : {};

  return (
    <Comp
      {...props}
      className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${colors[variant]}`}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      {text}
    </Comp>
  );
}
