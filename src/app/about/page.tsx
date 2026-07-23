import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CTASection } from "@/components/ui/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site-config";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export const metadata = buildMetadata({
  title: "About Normandeau Memorials | West Springfield, MA",
  description:
    "Learn about Normandeau Memorials' family-centered approach to memorial design, craftsmanship philosophy, and commitment to Western Massachusetts communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Memorial Craftsmanship Rooted in Western Massachusetts"
        description={`Family owned since ${siteConfig.familyOwnedSince}, Normandeau Memorials is based in West Springfield, Massachusetts, working with families across the region to design meaningful, enduring memorials.`}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <SectionHeading
            title="Who We Are"
            description={`Normandeau Memorials has been family owned since ${siteConfig.familyOwnedSince}, designing and crafting granite memorials for families throughout West Springfield, Springfield, and the surrounding Western Massachusetts communities. TODO(content): Add further verified company history or ownership details if the family wants to share more than the founding year.`}
          />
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-y border-stone">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="A Family-Centered Approach"
                description="Every memorial begins with listening. We take the time to understand the person being remembered and the family creating the tribute, so the final design reflects what matters most to you."
              />
            </div>
            <ImagePlaceholder
              alt="Normandeau Memorials workshop or team photograph, to be supplied"
              aspect="video"
              label="Workshop photograph placeholder"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <SectionHeading
            title="Our Craftsmanship Philosophy"
            description="We treat each memorial as a lasting piece of craftsmanship. That means careful attention to granite selection — including grey, pink, mahogany, and black — precise lettering, and a finished product built to stand for generations."
          />
          <p className="mt-6 max-w-2xl text-[15px] text-taupe leading-relaxed">
            {siteConfig.guarantee} Our showroom features Barre Guild
            monuments, benches, and flat markers on display, along with
            catalogs of designs and engravings to help your family plan a
            memorial.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-y border-stone">
        <Container width="medium">
          <SectionHeading
            title="Guidance Through the Memorial Process"
            description="Choosing a memorial involves many decisions — material, shape, wording, and cemetery requirements among them. We walk with your family through each step, explaining options clearly and at a comfortable pace."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <SectionHeading
            title="Commitment to Western Massachusetts"
            description="Based in West Springfield, we're familiar with the cemeteries and communities throughout the Pioneer Valley and remain committed to serving families here with care and attention to detail."
          />
        </Container>
      </section>

      <CTASection
        title="Ready to Talk Through Your Family's Memorial?"
        description="We're happy to answer questions and help you understand your options."
      />
    </>
  );
}
