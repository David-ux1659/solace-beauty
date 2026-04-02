import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const posts: Record<string, { title: string; category: string; date: string; readTime: string; image: string; content: string }> = {
  "story-behind-soup-joumou": {
    title: "The Story Behind Soup Joumou: Haiti's Freedom Soup",
    category: "Culture",
    date: "March 28, 2026",
    readTime: "6 min",
    image: "/images/food/haitian-plate-takeout.jpg",
    content: `
Every January 1st, Haitians around the world celebrate independence with a bowl of Soup Joumou — a rich, hearty squash soup that represents freedom, resilience, and cultural pride.

## The History

During the colonial period, enslaved Haitians were forbidden from eating Soup Joumou. It was considered a delicacy reserved for French colonizers. When Haiti declared independence on January 1, 1804 — becoming the first free Black republic in the world — the formerly enslaved people celebrated by eating the very soup they had been denied.

## The Recipe

Soup Joumou is built on a base of giraumon (calabaza squash), simmered until velvety smooth. It's loaded with beef, root vegetables like malanga and yam, pasta, cabbage, and seasoned with epis — Haiti's foundational herb blend of scallions, garlic, parsley, thyme, and scotch bonnet pepper.

Every family has their own version. Some add dumplings. Others prefer more pasta. The one constant: it's always made with love and served with pride.

## UNESCO Recognition

In 2021, UNESCO added Soup Joumou to its Representative List of the Intangible Cultural Heritage of Humanity — a recognition of its deep cultural significance to the Haitian people.

## Why We Serve It

At Alliyah & Geralda's Kitchen, Soup Joumou isn't just a menu item — it's a connection to our heritage. Geralda makes it the way her mother taught her, and every Sunday, we share that tradition with Manchester.

When you eat Soup Joumou, you're not just having soup. You're tasting freedom.
    `,
  },
  "what-makes-haitian-oxtail-different": {
    title: "What Makes Haitian Oxtail Different?",
    category: "Recipes",
    date: "March 21, 2026",
    readTime: "5 min",
    image: "/images/food/haitian-plate-dinner.jpg",
    content: `
Oxtail is beloved across Caribbean cuisines, but Haitian oxtail — Ke Bèf — has a character all its own. Here's what makes it special.

## The Epis Foundation

Every great Haitian dish starts with epis — a fresh blend of scallions, garlic, parsley, thyme, bell peppers, and scotch bonnet. It's the DNA of Haitian cooking, and for oxtail, it's the marinade that transforms the meat overnight.

## The Slow Braise

Haitian oxtail is braised low and slow — often for 3-4 hours — until the meat falls off the bone. The sauce reduces into a rich, deeply flavored gravy that clings to every piece.

## The Accompaniments

It's traditionally served with Diri Sos Pwa (rice and beans cooked in bean sauce), fried plantains, and pikliz — the spicy pickled vegetable relish that cuts through the richness perfectly.

## Why It's Our Most Popular Dish

Our oxtail is Geralda's pride. She marinates it for 24 hours, slow-cooks it until it melts, and serves it with rice that's been simmered in the bean broth itself. It's the dish that built our reputation in Manchester.

At $30 for the combo, it's a full meal that feeds the soul.
    `,
  },
  "first-100-plates": {
    title: "Our First 100 Plates: How Manchester Showed Up",
    category: "News",
    date: "March 14, 2026",
    readTime: "4 min",
    image: "/images/family/mother-daughter-portrait.jpg",
    content: `
When we served our first plate, we weren't sure what to expect. Would Manchester embrace Haitian food? Would people even know what oxtail was?

## The Beginning

It started small — cooking for friends, then friends of friends. Geralda's food had always been the star of family gatherings, and Alliyah saw an opportunity: why not share it with the whole community?

## The First Weekend

We made 20 plates. We sold out in 2 hours. The phone didn't stop ringing. People we'd never met were asking when we'd cook again.

## Growing Pains (and Joys)

By plate 50, we had a system. By plate 100, we had a following. People started driving from Nashua, Concord, even Boston to grab our weekend plates. The oxtail was always the first to sell out.

## What We Learned

Manchester was ready. Not just for Haitian food, but for something real — food made from scratch, cooked with love, rooted in culture. No corporate chains. No frozen reheats. Just two women, one kitchen, and recipes that carry the weight of generations.

## What's Next

We're now serving 40+ plates every weekend, launched catering, and are working toward our dream: a permanent location where we can bring even more Haitian culture to New Hampshire. This is just the beginning.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/[#\n]/g, " ").trim(),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-navy">Post Not Found</h1>
        <Link href="/blog" className="text-orange mt-4 inline-block">Back to Blog</Link>
      </section>
    );
  }

  return (
    <article>
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-orange/20 text-orange-light mb-4">{post.category}</span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-300 text-sm">{post.date} &middot; {post.readTime} read</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-orange">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-orange">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{post.title}</span>
          </nav>

          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy prose-a:text-orange prose-strong:text-navy">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="font-heading text-2xl font-bold text-navy mt-10 mb-4">{line.slice(3)}</h2>;
              if (line.trim() === "") return null;
              return <p key={i} className="text-gray-600 leading-relaxed mb-4">{line.trim()}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-cream rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-navy mb-3">Ready to Taste It Yourself?</h3>
            <p className="text-gray-500 mb-6">Order this weekend&apos;s menu — fresh plates, limited quantities.</p>
            <Link href="/order" className="inline-flex bg-orange hover:bg-orange-dark text-white font-bold px-8 py-4 rounded-xl transition-colors cursor-pointer">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
