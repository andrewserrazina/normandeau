import { HeartHandshake, Landmark, Palette, Gem } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Thoughtful, Personal Guidance",
    description:
      "We take the time to understand your family's wishes and explain each option clearly, at a pace that feels comfortable.",
  },
  {
    icon: Palette,
    title: "Detailed Design Process",
    description:
      "From initial sketch to final proof, every design detail is reviewed with your family before production begins.",
  },
  {
    icon: Gem,
    title: "Quality Stone and Craftsmanship",
    description:
      "We work with quality granite and give careful attention to lettering, finish, and construction.",
  },
  {
    icon: Landmark,
    title: "Familiarity with Local Cemeteries",
    description:
      "We are familiar with common memorial requirements at cemeteries across Western Massachusetts and help you navigate them.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Guidance You Can Rely On"
          description="Choosing a memorial is a significant decision. Here is how we support families through it."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-sage/10 text-sage">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-medium text-charcoal">{title}</h3>
                <p className="mt-1.5 text-[15px] text-taupe leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
