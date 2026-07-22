import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Normandeau Memorials — home"
    >
      <Image
        src="/images/normandeau-logo.png"
        alt="Normandeau Memorials"
        width={1024}
        height={1024}
        priority={priority}
        className="h-14 w-14 object-contain"
      />
    </Link>
  );
}
