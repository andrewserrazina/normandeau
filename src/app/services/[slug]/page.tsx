import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { services, getServiceBySlug } from "@/data/services";
import { faqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} in West Springfield, MA | Normandeau Memorials`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

const faqPreviewQuestions = [
  "What affects the price of a memorial?",
  "How long does the memorial process take?",
  "Do cemeteries have different memorial regulations?",
];

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const previewFaqs = faqs.filter((faq) => faqPreviewQuestions.includes(faq.question));

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero title={service.title} description={service.heroDescription} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <SectionHeading title="Is This Service Right for You?" />
          <p className="mt-4 text-[15px] text-taupe leading-relaxed">{service.whoItsFor}</p>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20 border-y border-stone">
        <Container width="medium">
          <SectionHeading title="Typical Process" />
          <ol className="mt-6 flex flex-col gap-4">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-charcoal text-sm font-medium text-white">
                  {index + 1}
                </span>
                <p className="text-[15px] text-taupe leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container width="medium">
          <SectionHeading title="Things to Keep in Mind" />
          <ul className="mt-6 flex flex-col gap-3">
            {service.considerations.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-taupe leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-sage" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {previewFaqs.length > 0 && (
        <section className="bg-cream py-16 sm:py-20 border-y border-stone">
          <Container width="medium">
            <SectionHeading title="FAQ Preview" />
            <div className="mt-6 flex flex-col gap-6">
              {previewFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-medium text-charcoal">{faq.question}</h3>
                  <p className="mt-1.5 text-[15px] text-taupe leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <Button href="/faq" variant="text" showArrow className="mt-6">
              View all frequently asked questions
            </Button>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Related Services" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <ServiceCard
                key={related.slug}
                title={related.title}
                description={related.shortDescription}
                href={`/services/${related.slug}`}
                icon={related.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to Talk About ${service.title}?`}
        description="Reach out and we'll schedule a time to discuss your memorial's needs."
      />
    </>
  );
}
