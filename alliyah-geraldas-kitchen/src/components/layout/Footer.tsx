"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/about", label: "Our Story" },
  { href: "/catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/referrals", label: "Referral Program" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo-main.png"
                alt="Alliyah & Geralda's Kitchen"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-heading text-lg font-bold">
                  Alliyah &amp; Geralda&apos;s
                </p>
                <p className="text-orange-light text-xs tracking-widest uppercase">
                  Taste of the Caribbean
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A mother-daughter Haitian kitchen bringing authentic homemade
              Caribbean food to Manchester, NH — every weekend.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>560 Candia Rd<br />Manchester, NH</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sat &amp; Sun<br />2:00 PM – 7:00 PM</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@alliyahandgeraldaskitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Never Miss a Menu</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get our weekend menu delivered to your inbox every Thursday.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-navy-light text-white placeholder-gray-400 border border-navy-light focus:border-orange focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange hover:bg-orange-dark text-white font-semibold text-sm py-3 rounded-lg transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "TikTok"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-gray-400 hover:text-orange hover:bg-navy-dark transition-colors cursor-pointer"
                  aria-label={platform}
                >
                  <span className="text-xs font-bold">
                    {platform[0]}
                    {platform === "TikTok" ? "T" : platform === "Facebook" ? "B" : "G"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Alliyah &amp; Geralda&apos;s Kitchen. All rights reserved.</p>
          <p>Proudly serving Manchester, NH</p>
        </div>
      </div>
    </footer>
  );
}
