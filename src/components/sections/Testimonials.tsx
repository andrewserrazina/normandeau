import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

// TODO(content): These are labeled placeholders, not real customer
// reviews. Replace with verified testimonials before launch.
const placeholderTestimonials = [
  { quote: "Customer testimonial will appear here.", attribution: "Placeholder — verified review pending" },
  { quote: "Customer testimonial will appear here.", attribution: "Placeholder — verified review pending" },
  { quote: "Customer testimonial will appear here.", attribution: "Placeholder — verified review pending" },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Families We've Served"
          title="What Families Are Saying"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {placeholderTestimonials.map((testimonial, index) => (
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
