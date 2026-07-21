"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled
          ? "border-stone bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/90 shadow-sm"
          : "border-transparent bg-ivory"
      )}
    >
      <Container>
        <div className={cn("flex items-center justify-between transition-[height] duration-200", scrolled ? "h-[68px]" : "h-20")}>
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNavigation.map((item) =>
                item.children ? (
                  <li key={item.href}>
                    <NavDropdown item={item} />
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="py-2 text-[15px] font-medium text-charcoal transition-colors hover:text-sage"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-2 text-[15px] font-medium text-charcoal transition-colors hover:text-sage"
            >
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.contact.phoneDisplay}
            </a>
            <Button href="/contact">Request a Consultation</Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
