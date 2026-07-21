import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbEntry[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-stone bg-cream">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 py-4 text-sm text-taupe">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight aria-hidden="true" className="size-3.5 text-stone" />
                )}
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-charcoal transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-charcoal">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
