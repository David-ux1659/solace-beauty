"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

function useCountdown(targetDay: number) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function getNextTarget() {
      const now = new Date();
      const target = new Date(now);
      target.setDate(now.getDate() + ((targetDay - now.getDay() + 7) % 7 || 7));
      target.setHours(14, 0, 0, 0);
      if (target <= now) target.setDate(target.getDate() + 7);
      return target;
    }

    const tick = () => {
      const diff = getNextTarget().getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [targetDay]);

  return timeLeft;
}

export function UrgencyBanner() {
  const countdown = useCountdown(6); // Saturday

  const units = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Badge text="High Demand Expected" variant="urgent" animated />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-8"
          >
            This Weekend Only —<br />
            <span className="italic text-orange-light">Don&apos;t Miss Out</span>
          </motion.h2>

          {/* Countdown */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 sm:gap-6 mb-10"
          >
            {units.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-2">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            Only 40 plates available each weekend. Once we sell out, ordering closes until next week.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Reserve Your Plate Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
