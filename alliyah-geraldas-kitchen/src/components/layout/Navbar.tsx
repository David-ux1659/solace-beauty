"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "About" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen((v) => !v);
    document.body.style.overflow = isOpen ? "" : "hidden";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md"
            : "bg-cream/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/logo-main.png"
              alt="Alliyah & Geralda's Kitchen logo"
              width={56}
              height={56}
              className="rounded-full"
              preload
            />
            <span className="hidden sm:block font-heading text-xl font-bold text-navy">
              Alliyah & Geralda&apos;s
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  pathname === link.href ? "text-orange" : "text-navy hover:text-orange"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/order"
            className="hidden lg:inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            Order Now
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream pt-20"
          >
            <nav className="flex flex-col items-center gap-6 py-12">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`font-heading text-3xl font-bold transition-colors ${
                      pathname === link.href ? "text-orange" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 }}
              >
                <Link
                  href="/order"
                  className="mt-4 inline-flex items-center gap-2 bg-orange text-white font-semibold text-lg px-10 py-4 rounded-lg"
                >
                  Order Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
