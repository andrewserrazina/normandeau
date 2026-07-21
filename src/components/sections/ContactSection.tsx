import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container width="narrow">
        <SectionHeading
          align="center"
          eyebrow="Get in Touch"
          title="Start with a Consultation"
          description="Share a few details and we'll follow up to schedule a time to talk."
        />
        <div className="mt-10 rounded-sm border border-stone bg-cream p-6 sm:p-10">
          <ConsultationForm />
        </div>
      </Container>
    </section>
  );
}
