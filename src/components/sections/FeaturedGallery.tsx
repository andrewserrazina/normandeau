import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { galleryItems } from "@/data/gallery-items";

export function FeaturedGallery() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Craftsmanship"
          title="Featured Craftsmanship Gallery"
          description="A look at the range of memorial styles and finishes we work with."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <ImagePlaceholder
              key={item.id}
              alt={item.imageAlt}
              src={item.image}
              aspect="square"
              label={item.title}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/gallery" variant="secondary" showArrow>
            View the Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
