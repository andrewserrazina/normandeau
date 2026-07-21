import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-sm border border-stone bg-cream p-6 sm:p-8 shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-sage"
    >
      <span className="flex size-11 items-center justify-center rounded-sm bg-charcoal/5 text-charcoal">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-medium text-charcoal">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] text-taupe leading-relaxed">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal">
        Learn more
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
