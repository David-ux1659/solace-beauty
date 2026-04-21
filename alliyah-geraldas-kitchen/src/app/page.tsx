import { HeroSection } from "@/components/sections/HeroSection";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { Testimonials } from "@/components/sections/Testimonials";
import { OurStoryPreview } from "@/components/sections/OurStoryPreview";
import { CateringBanner } from "@/components/sections/CateringBanner";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuPreview />
      <HowToOrder />
      <Testimonials />
      <OurStoryPreview />
      <CateringBanner />
      <NewsletterSignup />
      <UrgencyBanner />
    </>
  );
}
