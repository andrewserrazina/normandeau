import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="What Families Are Saying" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              attribution={testimonial.attribution}
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-taupe">
          TODO(content): Replace the placeholders above with verified customer
          reviews before launch.
        </p>
      </Container>
    </section>
  );
}
