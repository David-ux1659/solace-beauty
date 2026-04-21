import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CateringForm } from "./CateringForm";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Bring authentic Haitian flavors to your next event. Custom catering from Alliyah & Geralda's Kitchen — Manchester, NH and surrounding areas.",
};

const eventTypes = [
  { title: "Family Gatherings", desc: "Birthday parties, reunions, holiday celebrations" },
  { title: "Corporate Events", desc: "Team lunches, office parties, client appreciation" },
  { title: "Special Occasions", desc: "Weddings, graduations, anniversaries" },
  { title: "Community Events", desc: "Church events, fundraisers, cultural celebrations" },
];

const faqs = [
  { q: "What's the minimum order for catering?", a: "We require a minimum of 20 plates for catering orders. Contact us for smaller group options." },
  { q: "How far in advance should I book?", a: "We recommend booking at least 2 weeks in advance. For large events (50+ guests), 3-4 weeks is ideal." },
  { q: "Do you deliver catering orders?", a: "Yes! We deliver within 25 miles of Manchester, NH. Setup and serving options are also available." },
  { q: "Can you accommodate dietary restrictions?", a: "Many of our dishes are naturally gluten-free. Let us know your needs and we'll work with you to create a menu that works for everyone." },
  { q: "What's included in the catering price?", a: "Pricing includes food preparation, packaging, and utensils. Delivery, setup, and serving staff are available at additional cost." },
];

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/10 text-orange-light">
            Catering Services
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bring Our Kitchen<br />
            <span className="italic text-orange-light">to Your Table</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Elevate your next event with authentic Haitian flavors. From intimate dinners to large celebrations.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Events We Serve" title="Perfect for Any Occasion" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((e) => (
              <div key={e.title} className="bg-cream rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">{e.title}</h3>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Get Started" title="Request a Custom Order" subtitle="Tell us about your event and we'll put together a menu that your guests will talk about for weeks." />
          <CateringForm />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Spreads" title="A Taste of What We Bring" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/food/haitian-plate-takeout.jpg", alt: "Haitian takeout plate" },
              { src: "/images/food/haitian-plate-dinner.jpg", alt: "Haitian dinner plate" },
              { src: "/images/food/haitian-plate-takeout.jpg", alt: "Caribbean spread" },
              { src: "/images/food/haitian-plate-dinner.jpg", alt: "Oxtail plate" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="FAQ" title="Common Questions" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl p-6 shadow-sm group">
                <summary className="font-heading text-lg font-bold text-navy cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-orange shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
