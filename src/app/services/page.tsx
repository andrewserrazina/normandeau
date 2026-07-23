import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTASection } from "@/components/ui/CTASection";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

export const metadata = buildMetadata({
  title: "Memorial Services | Normandeau Memorials",
  description:
    "From custom memorial design to cemetery lettering, cleaning, restoration, and repair — explore the services Normandeau Memorials offers Western Massachusetts families.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        title="Support Through Every Stage of a Memorial"
        description="Whether you're designing a new memorial or caring for an existing one, we offer services to help families throughout the process."
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Tell us what's going on and we'll help point you in the right direction."
      />
    </>
  );
}
