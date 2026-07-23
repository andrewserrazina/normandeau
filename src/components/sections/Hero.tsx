import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function Hero() {
  return (
    <section className="border-b border-stone bg-ivory py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium leading-[1.1] text-charcoal text-balance">
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

          <ImagePlaceholder
            alt="Mahogany granite upright monument with etched cross and rose corner details, displayed in our showroom courtyard"
            src="/images/gallery/Mahogany.jpg"
            aspect="video"
            priority
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
