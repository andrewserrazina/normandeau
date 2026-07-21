import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceAreas } from "@/data/service-areas";

export function ServiceAreaSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-y border-stone">
      <Container>
        <SectionHeading
          eyebrow="Where We Serve"
          title="Service Area and Location"
          description="Normandeau Memorials is located in West Springfield, Massachusetts, and serves families throughout the Pioneer Valley and surrounding communities."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {serviceAreas.map((area) => (
            <li
              key={area.name}
              className="flex items-center gap-2 rounded-sm border border-stone bg-white px-4 py-2 text-sm font-medium text-charcoal"
            >
              <MapPin aria-hidden="true" className="size-3.5 text-sage" />
              {area.name}, {area.state}
            </li>
          ))}
          <li className="flex items-center gap-2 rounded-sm border border-dashed border-stone px-4 py-2 text-sm text-taupe">
            and surrounding Western Massachusetts communities
          </li>
        </ul>
      </Container>
    </section>
  );
}
