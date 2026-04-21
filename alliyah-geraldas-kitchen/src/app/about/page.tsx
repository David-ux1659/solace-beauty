import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet the mother-daughter duo behind Alliyah & Geralda's Kitchen. Bringing authentic Haitian flavors from our family to yours in Manchester, NH.",
};

const milestones = [
  { year: "2023", title: "The Dream Begins", text: "Geralda starts selling plates to friends and family from her Manchester home kitchen." },
  { year: "2024", title: "Alliyah Joins", text: "Alliyah officially partners with her mother, building the brand and bringing the business online." },
  { year: "2025", title: "Community Favorite", text: "Word spreads — weekend plates sell out within hours. The community shows up every week." },
  { year: "2026", title: "Growing the Kitchen", text: "500+ plates served and counting. Catering launches. The dream of a permanent location takes shape." },
];

const values = [
  { title: "Fresh Ingredients", desc: "Every dish is made from scratch with fresh, quality ingredients. No shortcuts." },
  { title: "Cooked with Love", desc: "These are family recipes passed down through generations. Every plate carries that tradition." },
  { title: "Community First", desc: "We're not just selling food — we're building a bridge between Haitian culture and our Manchester community." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/family/mother-daughter-portrait.jpg"
            alt="Alliyah and Geralda"
            fill
            className="object-cover"
            preload
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full bg-white/10 text-orange-light">
            Our Story
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Two Women. One Kitchen.<br />
            <span className="italic text-orange-light">A Lifetime of Flavor.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From Geralda&apos;s kitchen in Haiti to your table in Manchester, NH.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="font-heading text-3xl font-bold text-navy">
                Byenveni — <span className="italic text-orange">Welcome</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-orange" />
              <p className="text-gray-600 text-lg leading-relaxed">
                Geralda grew up in Haiti, learning to cook at her mother&apos;s side. The kitchen was the heart of the family — where stories were shared, where culture was passed down, and where love was expressed through food.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When she moved to Manchester, New Hampshire, she brought those recipes with her. For years, she cooked for family gatherings, community events, and anyone lucky enough to get an invitation. The flavors of Haiti — bold, aromatic, and soulful — had a way of bringing people together.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Then Alliyah, her daughter, had an idea: what if we shared this with the whole community? Together, they launched Alliyah &amp; Geralda&apos;s Kitchen — a weekend pop-up serving authentic Haitian plates made fresh to order. No freezers. No shortcuts. Just real food, cooked the way it&apos;s been made for generations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, their plates sell out every weekend. The oxtail melts in your mouth. The rice &amp; beans (Diri Sos Pwa) taste like a warm hug from a Haitian grandmother. And the Soup Joumou — Haiti&apos;s freedom soup — tells a story of resilience, culture, and pride in every spoonful.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/family/mother-daughter-portrait.jpg"
                  alt="Alliyah and Geralda cooking together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <AboutClient milestones={milestones} />

      {/* Why Haitian Food */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Culture on a Plate"
            title="Why Haitian Food?"
            subtitle="Haitian cuisine is one of the Caribbean's best-kept secrets — bold, complex, and deeply rooted in history."
          />
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Haitian cooking blends African, French, Taino, and Spanish influences into something entirely its own. Dishes are slow-cooked, deeply seasoned with epis (a fresh herb base), and built around rice, beans, root vegetables, and proteins like oxtail, goat, and chicken.
            </p>
            <p>
              Staples like Diri Djon Djon (black mushroom rice), Griot (fried pork), and Pikliz (spicy pickled vegetables) aren&apos;t just meals — they&apos;re cultural touchstones passed down through families for centuries.
            </p>
            <p>
              And then there&apos;s Soup Joumou — the squash soup that Haitians eat every January 1st to celebrate independence from slavery. It&apos;s more than food. It&apos;s freedom, pride, and history in a bowl. UNESCO recognized it as Intangible Cultural Heritage in 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Promise" title="What You Can Always Expect" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            Ready to Taste the Difference?
          </h2>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
          >
            Order This Weekend&apos;s Menu
          </Link>
        </div>
      </section>
    </>
  );
}
