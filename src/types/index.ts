import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  whoItsFor: string;
  process: string[];
  considerations: string[];
  icon: LucideIcon;
}

export interface MemorialCategory {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  suitableFor: string[];
  customization: string[];
  imageAlt: string;
  /** Path under /public. Omit to show the placeholder box. */
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  imageAlt: string;
  /** Path under /public. Omit to show the placeholder box. */
  image?: string;
}

export type GalleryCategory =
  | "Upright"
  | "Companion"
  | "Flat"
  | "Slant"
  | "Custom"
  | "Lettering"
  | "Restoration";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceArea {
  name: string;
  state: string;
}

export type ContactMethod = "phone" | "email" | "either";

export interface ConsultationFormValues {
  name: string;
  email: string;
  phone: string;
  preferredContact: ContactMethod;
  memorialType: string;
  message: string;
}

export interface FormFieldError {
  field: keyof ConsultationFormValues;
  message: string;
}
