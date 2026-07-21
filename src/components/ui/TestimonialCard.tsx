import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-sm border border-stone bg-cream p-8 shadow-sm">
      <div>
        <Quote aria-hidden="true" className="size-6 text-sage" />
        <blockquote className="mt-4 text-lg text-charcoal leading-relaxed text-pretty">
          {quote}
        </blockquote>
      </div>
      <figcaption className="mt-6 text-sm font-medium uppercase tracking-wide text-taupe">
        {attribution}
      </figcaption>
    </figure>
  );
}
