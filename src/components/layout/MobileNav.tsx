"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/config/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-1">
        <a
          href={siteConfig.contact.phoneHref}
          aria-label={`Call ${siteConfig.contact.phoneDisplay}`}
          className="flex size-11 items-center justify-center rounded-sm text-charcoal transition-colors hover:bg-charcoal/5"
        >
          <Phone aria-hidden="true" className="size-5" />
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-sm text-charcoal transition-colors hover:bg-charcoal/5"
        >
          {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[var(--header-h,72px)] bottom-0 z-40 overflow-y-auto bg-ivory"
        >
          <nav aria-label="Mobile" className="flex flex-col px-6 py-6">
            <ul className="flex flex-col divide-y divide-stone">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between py-4 text-lg font-medium text-charcoal"
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn("size-5 transition-transform", servicesOpen && "rotate-180")}
                        />
                      </button>
                      {servicesOpen && (
                        <ul className="mb-3 flex flex-col gap-1 pl-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-sm px-3 py-3 text-[15px] text-taupe hover:bg-cream hover:text-charcoal"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-lg font-medium text-charcoal"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Button href="/contact" size="large" className="mt-6 w-full" onClick={() => setOpen(false)}>
              Request a Consultation
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 text-[15px] font-medium text-charcoal"
            >
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
