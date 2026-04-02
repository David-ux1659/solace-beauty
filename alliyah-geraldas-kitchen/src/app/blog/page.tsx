import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Blog & Events",
  description: "Stories, recipes, Haitian culture, and news from Alliyah & Geralda's Kitchen in Manchester, NH.",
};

const posts = [
  {
    slug: "story-behind-soup-joumou",
    title: "The Story Behind Soup Joumou: Haiti's Freedom Soup",
    excerpt: "Every January 1st, Haitians celebrate independence with a bowl of Soup Joumou. Here's why this UNESCO-recognized dish means so much — and why we serve it every Sunday.",
    image: "/images/food/haitian-plate-takeout.jpg",
    category: "Culture",
    date: "March 28, 2026",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "what-makes-haitian-oxtail-different",
    title: "What Makes Haitian Oxtail Different?",
    excerpt: "It's not just the slow cook time — it's the epis, the scotch bonnet, and a technique passed down through generations. Here's what sets Haitian oxtail apart.",
    image: "/images/food/haitian-plate-dinner.jpg",
    category: "Recipes",
    date: "March 21, 2026",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "first-100-plates",
    title: "Our First 100 Plates: How Manchester Showed Up",
    excerpt: "When we sold our first plate, we weren't sure if Manchester was ready for Haitian food. Turns out, they were more than ready — they were hungry for it.",
    image: "/images/family/mother-daughter-portrait.jpg",
    category: "News",
    date: "March 14, 2026",
    readTime: "4 min",
    featured: false,
  },
];

const featuredPost = posts.find((p) => p.featured)!;
const otherPosts = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Featured Post Hero */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-orange/10 text-orange">{featuredPost.category}</span>
                  <span className="text-xs text-gray-400">Featured</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mb-3 group-hover:text-orange transition-colors">{featuredPost.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{featuredPost.date}</span>
                  <span>&middot;</span>
                  <span>{featuredPost.readTime} read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2">
          {["All", "Recipes", "Culture", "News", "Events"].map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${cat === "All" ? "bg-navy text-white" : "bg-white text-gray-500 border border-gray-200 hover:border-orange hover:text-orange"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative aspect-video">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold tracking-wider uppercase text-orange">{post.category}</span>
                    <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-orange transition-colors">{post.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Upcoming" title="Events & Pop-Ups" />
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-orange text-white rounded-xl p-4 text-center shrink-0 min-w-[80px]">
                <p className="font-heading text-2xl font-bold">5-6</p>
                <p className="text-xs uppercase">Apr</p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">Easter Weekend Special</h3>
                <p className="text-gray-500 text-sm mb-2">Extended menu with exclusive Easter dishes. Pre-order required. Limited to 40 plates per day.</p>
                <p className="text-xs text-gray-400">560 Candia Rd, Manchester, NH &middot; Sat & Sun 2-7 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-12 bg-navy text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-3">Follow Us for Daily Updates</h2>
          <p className="text-gray-300 mb-6">Behind-the-scenes cooking, menu previews, and community highlights.</p>
          <div className="flex justify-center gap-4">
            {["Instagram", "Facebook", "TikTok"].map((p) => (
              <a key={p} href="#" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer">
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
