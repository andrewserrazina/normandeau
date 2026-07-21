"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function closeSoon() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 py-2 text-[15px] font-medium text-charcoal transition-colors hover:text-sage"
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-30 w-80 -translate-x-1/2 pt-3 transition-all duration-150",
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        <ul className="rounded-sm border border-stone bg-white p-2 shadow-md">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block rounded-sm px-4 py-3 transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-sage"
                onClick={() => setOpen(false)}
              >
                <span className="block text-[15px] font-medium text-charcoal">
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-sm text-taupe">
                    {child.description}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
