import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

interface MemorialCategoryCardProps {
  title: string;
  description: string;
  href: string;
  imageAlt: string;
}

export function MemorialCategoryCard({
  title,
  description,
  href,
  imageAlt,
}: MemorialCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-sm border border-stone bg-cream shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-sage"
    >
      <ImagePlaceholder alt={imageAlt} aspect="video" className="rounded-none border-0 border-b border-stone" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-medium text-charcoal">{title}</h3>
        <p className="mt-2 flex-1 text-[15px] text-taupe leading-relaxed">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
          Explore option
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
