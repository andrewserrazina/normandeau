import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { footerNavigation, footerServiceLinks } from "@/data/navigation";
import { serviceAreaStatement } from "@/data/service-areas";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;

  return (
    <footer className="bg-graphite text-stone">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone/90">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Explore
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone/90 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone/90 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
              Visit or Contact Us
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-stone/90">
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.city}, {contact.address.state} {contact.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-sage" />
                <span>
                  <a href={contact.phoneHref} className="hover:text-white transition-colors">
                    {contact.phoneDisplay}
                  </a>
                  {" or "}
                  <a href={contact.phoneAltHref} className="hover:text-white transition-colors">
                    {contact.phoneAltDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-sage" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
            <ul className="mt-4 flex flex-col gap-1 text-sm text-stone/80">
              {contact.hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-4">
                  <span>{entry.days}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-sm text-stone/80">{serviceAreaStatement}</p>
          <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-stone/70">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <Link href="/privacy-policy" className="text-xs text-stone/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
