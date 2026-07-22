import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MemorialCategoryCard } from "@/components/ui/MemorialCategoryCard";
import { Button } from "@/components/ui/Button";
import { memorialCategories } from "@/data/memorial-categories";

const featuredSlugs = [
  "upright-monuments",
  "flat-markers",
  "slant-markers",
  "bevel-markers",
  "companion-monuments",
  "custom-memorials",
];

export function MemorialCategoriesSection() {
  const featured = featuredSlugs
    .map((slug) => memorialCategories.find((category) => category.slug === slug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  return (
    <section className="bg-cream py-16 sm:py-20 border-y border-stone">
      <Container>
        <SectionHeading
          eyebrow="Memorial Options"
          title="Memorial Categories"
          description="Explore the range of memorial styles available, each suited to different cemeteries, budgets, and personal preferences."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category) => (
            <MemorialCategoryCard
              key={category.slug}
              title={category.title}
              description={category.shortDescription}
              href={`/memorials#${category.slug}`}
              imageAlt={category.imageAlt}
              image={category.image}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/memorials" variant="text" showArrow>
            View all memorial options
          </Button>
        </div>
      </Container>
    </section>
  );
}
