import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { processSteps } from "@/data/process-steps";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Our Process" },
];

export const metadata = buildMetadata({
  title: "Our Memorial Process | Normandeau Memorials",
  description:
    "A clear look at how Normandeau Memorials guides families from initial consultation through design, approval, and installation.",
  path: "/our-process",
});

export default function OurProcessPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        eyebrow="Our Process"
        title="A Clear Path from First Conversation to Finished Memorial"
        description="Every family's memorial is different, but the process we follow stays consistent, transparent, and collaborative."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <ol className="flex flex-col gap-14">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <span className="font-serif text-4xl text-sage sm:w-16 sm:shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-medium text-charcoal">{step.title}</h2>
                  <p className="mt-2 text-[15px] text-taupe leading-relaxed">{step.description}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-[15px] text-taupe leading-relaxed">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-16 rounded-sm border border-stone bg-cream p-6 text-sm text-taupe leading-relaxed">
            Timelines vary based on design complexity, granite availability,
            weather, and each cemetery&rsquo;s own scheduling requirements.
            We&rsquo;ll give you a clearer sense of timing once your specific
            memorial details are finalized.
          </p>
        </Container>
      </section>

      <CTASection
        title="Ready to Begin?"
        description="The first step is a conversation. Reach out to schedule your consultation."
      />
    </>
  );
}
