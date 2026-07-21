import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { processSteps } from "@/data/process-steps";

export function ProcessOverview() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-y border-stone">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Our Process"
          description="A clear, five-step path from first conversation to finished memorial."
        />
        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="font-serif text-3xl text-sage">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium text-charcoal">{step.title}</h3>
              <p className="text-[15px] text-taupe leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/our-process" variant="text" showArrow>
            See the full process
          </Button>
        </div>
      </Container>
    </section>
  );
}
