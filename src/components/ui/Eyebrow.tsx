import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-sage" />
      {children}
    </p>
  );
}
