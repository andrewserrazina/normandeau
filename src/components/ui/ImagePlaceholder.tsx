import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  label?: string;
  /** Real photo path under /public. Omit to render the placeholder box. */
  src?: string;
  sizes?: string;
  priority?: boolean;
}

const aspectStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
} as const;

const defaultSizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

/**
 * Renders a real photo via next/image when `src` is supplied. Otherwise
 * stands in for photography that hasn't been supplied yet — see
 * CONTENT_TODO.md for the remaining shot list.
 */
export function ImagePlaceholder({
  alt,
  className,
  aspect = "square",
  label,
  src,
  sizes = defaultSizes,
  priority,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-sm border border-stone bg-stone/10",
          aspectStyles[aspect],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

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
