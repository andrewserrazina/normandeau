import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Tag className="text-3xl sm:text-4xl font-medium text-charcoal text-balance">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-taupe leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
