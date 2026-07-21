import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  label?: string;
}

const aspectStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
} as const;

/**
 * Standing in for real photography until assets are supplied.
 * TODO(content): Replace with next/image once photographs are available —
 * see CONTENT_TODO.md for the full shot list.
 */
export function ImagePlaceholder({
  alt,
  className,
  aspect = "square",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-stone bg-stone/30 text-taupe",
        aspectStyles[aspect],
        className
      )}
    >
      <ImageIcon aria-hidden="true" className="size-8 opacity-60" />
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide opacity-70">
        {label ?? "Photograph placeholder"}
      </span>
    </div>
  );
}
