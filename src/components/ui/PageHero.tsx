import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-charcoal py-16 sm:py-20">
      <Container width="medium">
        {eyebrow && <Eyebrow className="text-sage">{eyebrow}</Eyebrow>}
        <h1 className="mt-3 text-4xl sm:text-5xl font-medium text-white text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-stone leading-relaxed text-pretty">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
