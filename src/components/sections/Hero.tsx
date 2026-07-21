import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section className="border-b border-stone bg-ivory py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Memorial Craftsmanship in Western Massachusetts</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-medium leading-[1.1] text-charcoal text-balance">
              Creating Lasting Memorials for the Lives That Matter Most
            </h1>
            <p className="mt-6 max-w-xl text-lg text-taupe leading-relaxed text-pretty">
              Normandeau Memorials helps families create meaningful, enduring
              tributes with thoughtful guidance, quality materials, and
              careful craftsmanship.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="large" showArrow>
                Request a Consultation
              </Button>
              <Button href="/memorials" variant="secondary" size="large">
                Explore Memorial Options
              </Button>
            </div>
          </div>

          {/* TODO: Replace with a professionally photographed granite memorial image via next/image. */}
          <ImagePlaceholder
            alt="Professionally photographed granite memorial, to be supplied"
            aspect="portrait"
            label="Granite memorial photograph placeholder"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
