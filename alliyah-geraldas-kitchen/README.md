# Alliyah & Geralda's Kitchen — Website

Authentic Haitian food website for a weekend pop-up kitchen in Manchester, NH. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev    # Start development server at http://localhost:3000
npm run build  # Production build
npm start      # Start production server
```

## How to Update the Weekly Menu

Edit the file: `src/content/menu/current-week.json`

You can change:
- **Dish names, prices, descriptions** — edit any field directly
- **Badges** — set to `"MOST POPULAR"`, `"SUNDAY EXCLUSIVE"`, `"NEW"`, `"FREE WITH ORDER"`, or `null`
- **Sold out status** — set `"soldOut": true` to gray out an item with a SOLD OUT stamp
- **Date range** — update `"dateRange"` at the top (e.g., `"April 12–13, 2026"`)
- **Add/remove items** — add a new object to the relevant array (combos, mains, sides, drinks, specials)

Each item needs: `id`, `name`, `price`, `soldOut`. Optional: `creoleName`, `description`, `includes`, `image`, `badge`.

## How to Add Blog Posts

Add a new entry to the `posts` object in `src/app/blog/[slug]/page.tsx` with:
- A unique slug key
- Title, category, date, readTime, image path, and content (supports `## Heading` markdown)

Also add the post to the `posts` array in `src/app/blog/page.tsx` for it to appear in the listing.

## How to Add Photos to the Gallery

Add new image files to `public/images/food/`, `public/images/family/`, or `public/images/gallery/`.

Then add entries to the `photos` array in `src/app/gallery/page.tsx`:
```ts
{ src: "/images/food/your-new-photo.jpg", alt: "Description of the photo", category: "food" }
```

## How to Replace Images

Place your actual photos in:
- `public/images/logo/` — logo files
- `public/images/food/` — food photography
- `public/images/family/` — family and behind-the-scenes photos
- `public/videos/` — video clips (for future hero background)

Keep the same filenames as referenced in the code, or update the paths in the components.

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Home
│   ├── menu/               # Weekly menu
│   ├── order/              # Multi-step order form
│   ├── about/              # Our story
│   ├── catering/           # Catering request form
│   ├── gallery/            # Photo gallery with lightbox
│   ├── blog/               # Blog posts and events
│   ├── contact/            # Contact form and info
│   └── referrals/          # Referral program
├── components/
│   ├── layout/             # Navbar, Footer, MobileCTA
│   ├── sections/           # Home page sections
│   └── ui/                 # Reusable components
├── content/
│   └── menu/               # Weekly menu JSON
└── lib/
    └── animations.ts       # Framer Motion variants
```

## Deployment

Deploy to Vercel:
```bash
npx vercel
```

Or build and serve anywhere that supports Node.js:
```bash
npm run build
npm start
```

## Production Checklist

- [ ] Replace placeholder images with real photos
- [ ] Update phone number in layout.tsx JSON-LD and contact page
- [ ] Add Google Maps embed to contact page
- [ ] Connect forms to a backend (e.g., Formspree, EmailJS, or custom API)
- [ ] Set up email/SMS service for newsletter signups
- [ ] Add Google Analytics or Plausible for analytics
- [ ] Configure a custom domain
