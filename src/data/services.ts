import {
  PenTool,
  Type,
  PlusSquare,
  Sparkles,
  Hammer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/types";
import servicesContent from "@content/services.json";

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Type,
  PlusSquare,
  Sparkles,
  Hammer,
  Wrench,
};

/**
 * Centralized service definitions, sourced from content/services.json
 * (editable via the TinaCMS admin at /admin — see README.md). Icons
 * aren't serializable to JSON, so each entry stores an icon *name*
 * that's mapped to a component here.
 */
export const services: ServiceItem[] = servicesContent.services.map((service) => ({
  ...service,
  icon: iconMap[service.icon] ?? PenTool,
}));

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}
