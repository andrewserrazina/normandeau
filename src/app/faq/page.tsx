import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "FAQ" },
];

export const metadata = buildMetadata({
  title: "Frequently Asked Questions | Normandeau Memorials",
  description:
    "Answers to common questions about selecting, designing, and caring for a memorial with Normandeau Memorials in West Springfield, MA.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqs} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions families ask when planning a memorial."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <div className="flex flex-col divide-y divide-stone border-y border-stone">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-charcoal marker:content-none">
                  {faq.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="size-5 shrink-0 text-sage transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-[15px] text-taupe leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="We're happy to talk through anything that isn't covered here."
      />
    </>
  );
}
