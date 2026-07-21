import type { NavItem } from "@/types";

/**
 * Centralized primary navigation. Update labels, hrefs, and dropdown
 * children here — the header and mobile menu both read from this list.
 */
export const primaryNavigation: NavItem[] = [
  { label: "Memorials", href: "/memorials" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Custom Memorial Design",
        href: "/services/custom-memorial-design",
        description: "Personalized monuments shaped around your family's story.",
      },
      {
        label: "Cemetery Lettering",
        href: "/services/cemetery-lettering",
        description: "Precise, cemetery-compliant lettering and dates.",
      },
      {
        label: "Additional Inscriptions",
        href: "/services/additional-inscriptions",
        description: "Adding names, dates, or verses to an existing memorial.",
      },
      {
        label: "Monument Cleaning",
        href: "/services/monument-cleaning",
        description: "Careful, granite-safe cleaning to restore clarity.",
      },
      {
        label: "Monument Restoration",
        href: "/services/monument-restoration",
        description: "Restoring aged or weathered memorials.",
      },
      {
        label: "Monument Repair",
        href: "/services/monument-repair",
        description: "Repair for settling, damage, or foundation issues.",
      },
    ],
  },
  { label: "Our Process", href: "/our-process" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: NavItem[] = [
  { label: "Memorials", href: "/memorials" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/our-process" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Custom Memorial Design", href: "/services/custom-memorial-design" },
  { label: "Cemetery Lettering", href: "/services/cemetery-lettering" },
  { label: "Additional Inscriptions", href: "/services/additional-inscriptions" },
  { label: "Monument Cleaning", href: "/services/monument-cleaning" },
  { label: "Monument Restoration", href: "/services/monument-restoration" },
  { label: "Monument Repair", href: "/services/monument-repair" },
];
