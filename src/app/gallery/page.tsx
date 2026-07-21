import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Gallery" },
];

export const metadata = buildMetadata({
  title: "Memorial Gallery | Normandeau Memorials",
  description:
    "Browse memorial styles by category, including upright, companion, flat, slant, custom designs, lettering, and restoration work.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        eyebrow="Gallery"
        title="A Look at Our Craftsmanship"
        description="Browse memorial styles by category. Photographs shown here are placeholders until real project photography is added."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <CTASection
        title="See Something You Like?"
        description="Let's talk about how a similar design could work for your family."
      />
    </>
  );
}
