import { Compass, Gem, Landmark, PenTool } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  { icon: Compass, label: "Personalized Guidance" },
  { icon: PenTool, label: "Custom Memorial Design" },
  { icon: Gem, label: "Quality Granite" },
  { icon: Landmark, label: "Local Cemetery Experience" },
];

export function TrustBar() {
  return (
    <section className="border-b border-stone bg-cream py-10">
      <Container>
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {trustPoints.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
              <Icon aria-hidden="true" className="size-6 shrink-0 text-sage" />
              <span className="text-sm font-medium text-charcoal">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
