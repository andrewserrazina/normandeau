import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Introduction } from "@/components/sections/Introduction";
import { MemorialCategoriesSection } from "@/components/sections/MemorialCategoriesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { FeaturedGallery } from "@/components/sections/FeaturedGallery";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CompassionateCTA } from "@/components/sections/CompassionateCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Custom Memorials in West Springfield, MA | Normandeau Memorials",
  description:
    "Normandeau Memorials helps families throughout West Springfield and Western Massachusetts design meaningful granite memorials with thoughtful guidance and quality craftsmanship.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <MemorialCategoriesSection />
      <WhyChooseUs />
      <ProcessOverview />
      <FeaturedGallery />
      <ServicesPreview />
      <CompassionateCTA />
      <Testimonials />
      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}
