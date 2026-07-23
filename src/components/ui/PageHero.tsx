import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  description?: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-charcoal py-16 sm:py-20">
      <Container width="medium">
        <h1 className="text-4xl sm:text-5xl font-medium text-white text-balance">
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
