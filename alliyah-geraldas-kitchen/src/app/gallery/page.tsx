import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Alliyah & Geralda's Kitchen — our food, our family, our community in Manchester, NH.",
};

const photos = [
  { src: "/images/food/haitian-plate-takeout.jpg", alt: "Haitian plate with jerk chicken, rice & beans, fried plantain and pikliz", category: "food" },
  { src: "/images/food/haitian-plate-dinner.jpg", alt: "Haitian dinner plate with fried chicken, Diri Djon Djon, beet salad and avocado", category: "food" },
  { src: "/images/family/mother-daughter-portrait.jpg", alt: "Alliyah and Geralda — the mother-daughter team behind the kitchen", category: "family" },
  { src: "/images/family/mascot-kitchen.jpg", alt: "Alliyah & Geralda's Kitchen animated mascot", category: "family" },
  /* TODO: Add image — close-up of oxtail dish */
  /* TODO: Add image — lasagna being served */
  /* TODO: Add image — soup joumou in a bowl */
  /* TODO: Add image — kitchen prep / behind the scenes */
  /* TODO: Add image — catering event spread */
  /* TODO: Add image — pikliz close-up */
  /* TODO: Add image — customers enjoying food */
];

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient photos={photos} />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-cream text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-navy mb-3">Follow Us for Daily Updates</h2>
          <p className="text-gray-500 mb-6">See what&apos;s cooking before anyone else.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-8 py-4 rounded-xl transition-colors cursor-pointer">
            Follow on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
