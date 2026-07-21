import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * TODO(logo): The supplied Normandeau Memorials logo (classical column
 * motif + "NORMANDEAU / MEMORIALS" wordmark) has not been provided in
 * this environment. Once it is placed at /public/images/normandeau-logo.png
 * (see public/images/README.md), replace the markup below with:
 *
 *   <Image src="/images/normandeau-logo.png" alt="Normandeau Memorials"
 *          width={ORIGINAL_WIDTH} height={ORIGINAL_HEIGHT} priority={priority} />
 *
 * Do not redraw, distort, or recreate the supplied artwork — use it as-is.
 */
export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const textColor = variant === "light" ? "text-white" : "text-charcoal";
  const ruleColor = variant === "light" ? "bg-white/40" : "bg-sage";

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Normandeau Memorials — home"
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-11 w-8 flex-col items-center justify-between border-2 py-1",
          variant === "light" ? "border-white/70" : "border-charcoal"
        )}
      >
        <span className={cn("h-px w-full", ruleColor)} />
        <span className={cn("h-5 w-1.5", variant === "light" ? "bg-white/70" : "bg-charcoal")} />
        <span className={cn("h-px w-full", ruleColor)} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-serif text-xl tracking-wide", textColor)}>
          Normandeau
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.35em]",
            variant === "light" ? "text-stone" : "text-taupe"
          )}
        >
          Memorials
        </span>
      </span>
    </Link>
  );
}
