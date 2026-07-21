import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { memorialCategories } from "@/data/memorial-categories";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Memorials" },
];

export const metadata = buildMetadata({
  title: "Memorial Options in Western Massachusetts | Normandeau Memorials",
  description:
    "Explore upright monuments, flat and slant markers, companion memorials, mausoleums, and more. Learn about granite, lettering, and cemetery considerations.",
  path: "/memorials",
});

const educationTopics = [
  {
    title: "Granite Colors",
    description:
      "Granite is quarried in a range of natural colors, from classic grays and blacks to warmer browns, blues, and reds. Color availability can vary, and we'll show you samples in person before you decide.",
  },
  {
    title: "Shapes",
    description:
      "Memorial shapes range from traditional rectangular uprights to serpentine tops, heart shapes, and fully custom profiles. Shape often depends on cemetery guidelines as well as personal preference.",
  },
  {
    title: "Finishes",
    description:
      "Granite can be polished, honed, or given a natural rock-pitched finish. Different finishes affect how lettering and artwork appear and how the memorial weathers over time.",
  },
  {
    title: "Lettering",
    description:
      "Lettering styles range from classic block and script fonts to more decorative options. Depth, spacing, and alignment all affect legibility and how the inscription reads from a distance.",
  },
  {
    title: "Etching",
    description:
      "Laser and hand etching can render detailed portraits, scenes, or artwork onto polished granite surfaces, adding a personal visual element to a memorial.",
  },
  {
    title: "Emblems",
    description:
      "Religious symbols, military branch emblems, fraternal marks, and other meaningful symbols can be added to reflect a person's life and beliefs.",
  },
  {
    title: "Vases",
    description:
      "Attached or companion vases provide a place for flowers and can be matched to the memorial's granite color and finish.",
  },
  {
    title: "Cemetery Regulations",
    description:
      "Cemeteries commonly set their own rules for memorial size, material, foundation type, and installation timing. Final options for any memorial may depend on your specific cemetery's rules and availability.",
  },
];

export default function MemorialsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        eyebrow="Memorial Options"
        title="Find the Right Memorial for Your Family"
        description="From traditional upright monuments to fully custom designs, explore the memorial styles we work with and what makes each one distinct."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-16">
            {memorialCategories.map((category, index) => (
              <div
                key={category.slug}
                id={category.slug}
                className="scroll-mt-28 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <ImagePlaceholder
                    alt={category.imageAlt}
                    aspect="wide"
                    label={category.title}
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <h2 className="text-2xl sm:text-3xl font-medium text-charcoal">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-[15px] text-taupe leading-relaxed">
                    {category.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                        Suitable Use Cases
                      </h3>
                      <ul className="mt-2 flex flex-col gap-1.5 text-[15px] text-taupe">
                        {category.suitableFor.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden="true" className="text-sage">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-charcoal">
                        Customization Possibilities
                      </h3>
                      <ul className="mt-2 flex flex-col gap-1.5 text-[15px] text-taupe">
                        {category.customization.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden="true" className="text-sage">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button href="/contact" className="mt-6" showArrow>
                    Request a Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-y border-stone">
        <Container>
          <SectionHeading
            eyebrow="Education"
            title="Understanding Your Options"
            description="A few of the design elements that shape every memorial. Final availability may depend on your cemetery's rules and current granite supply."
          />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {educationTopics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-lg font-medium text-charcoal">{topic.title}</h3>
                <p className="mt-2 text-[15px] text-taupe leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-taupe">
            Final memorial options, including size, material, and placement,
            may depend on your specific cemetery&rsquo;s regulations and
            availability. We&rsquo;ll help confirm these details as part of
            your consultation.
          </p>
        </Container>
      </section>

      <CTASection
        title="Not Sure Which Memorial Is Right?"
        description="We're glad to walk through the options together and help you find the right fit."
      />
    </>
  );
}
