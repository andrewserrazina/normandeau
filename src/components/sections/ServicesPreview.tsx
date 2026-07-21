import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-y border-stone">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Support at Every Stage"
          description="Beyond new memorial design, we help families with lettering, inscriptions, cleaning, restoration, and repair."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-10">
          <Button href="/services" variant="text" showArrow>
            View all services
          </Button>
        </div>
      </Container>
    </section>
  );
}
