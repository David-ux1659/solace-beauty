"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Hide on the order page itself
  const isOrderPage = pathname === "/order";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isOrderPage) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 safe-area-bottom">
        <Link
          href="/order"
          className="flex items-center justify-center gap-2 w-full bg-orange hover:bg-orange-dark text-white font-bold text-base py-4 rounded-xl transition-colors shadow-lg cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Reserve Your Plate
        </Link>
      </div>
    </div>
  );
}
