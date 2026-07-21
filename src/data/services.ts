import {
  PenTool,
  Type,
  PlusSquare,
  Sparkles,
  Hammer,
  Wrench,
} from "lucide-react";
import type { ServiceItem } from "@/types";

/**
 * Centralized service definitions. Each entry drives the services
 * overview page, the individual service detail page, and the Services
 * dropdown in navigation.ts.
 */
export const services: ServiceItem[] = [
  {
    slug: "custom-memorial-design",
    title: "Custom Memorial Design",
    shortDescription:
      "A personalized monument shaped around your family's story, from stone selection through final design.",
    heroDescription:
      "Every memorial we design starts with a conversation about the person being remembered. We combine that guidance with granite selection, shape, lettering, and artwork to create a monument that feels personal rather than off-the-shelf.",
    whoItsFor:
      "Families who want a memorial that reflects a specific life, interests, faith, or family tradition, whether for an individual or a family plot.",
    process: [
      "Discuss the person, the cemetery, and any ideas you already have in mind.",
      "Review granite colors, shapes, and finishes suited to your cemetery's requirements.",
      "Develop a design proof with lettering, layout, and any artwork or emblems.",
      "Refine the proof together until every detail is approved.",
      "Move into production and coordinate installation with the cemetery.",
    ],
    considerations: [
      "Cemetery regulations may limit size, material, or foundation type.",
      "Granite availability can vary by color and quarry source.",
      "More intricate artwork or lettering may involve additional design time.",
    ],
    icon: PenTool,
  },
  {
    slug: "cemetery-lettering",
    title: "Cemetery Lettering",
    shortDescription:
      "Precise, cemetery-compliant lettering for new and existing memorials.",
    heroDescription:
      "Lettering is often the most permanent and visible part of a memorial. We take care to match existing lettering style where applicable and confirm every detail with your family before any work begins.",
    whoItsFor:
      "Families adding a name, date, or inscription to a new memorial, or updating an existing one.",
    process: [
      "Confirm the exact wording, spelling, and dates with your family.",
      "Review the existing memorial style, if applicable, to match lettering.",
      "Confirm cemetery requirements for on-site lettering work.",
      "Complete lettering with careful attention to placement and depth.",
    ],
    considerations: [
      "Some cemeteries require advance notice or scheduling approval for on-site work.",
      "Weather can affect scheduling for on-site lettering.",
      "Older stone surfaces may need evaluation before new lettering is added.",
    ],
    icon: Type,
  },
  {
    slug: "additional-inscriptions",
    title: "Additional Inscriptions",
    shortDescription:
      "Adding a name, date, verse, or emblem to an existing memorial.",
    heroDescription:
      "When a memorial already exists, families often return to us to add a spouse's name, a passing date, or a meaningful verse. We treat this work with the same care as a new memorial.",
    whoItsFor:
      "Families with an existing monument who need to add information after a second passing, or who want to include an inscription that wasn't part of the original design.",
    process: [
      "Provide the existing memorial's details and cemetery location.",
      "Confirm new wording and placement on the stone.",
      "Review cemetery rules for adding inscriptions to an existing memorial.",
      "Complete the inscription to match the memorial's existing style.",
    ],
    considerations: [
      "Available space on the existing memorial may affect layout options.",
      "Matching older lettering styles depends on the stone's condition.",
      "Cemetery approval may be required before work begins.",
    ],
    icon: PlusSquare,
  },
  {
    slug: "monument-cleaning",
    title: "Monument Cleaning",
    shortDescription:
      "Careful, granite-safe cleaning to restore a memorial's clarity and appearance.",
    heroDescription:
      "Over time, memorials can accumulate dirt, biological growth, or staining. We use cleaning methods suited to the specific stone type to refresh a memorial's appearance without damaging its surface.",
    whoItsFor:
      "Families who want to improve the appearance of an existing memorial without altering its lettering or design.",
    process: [
      "Evaluate the memorial's stone type and current condition.",
      "Select a cleaning approach suited to that stone.",
      "Perform cleaning with methods intended to protect the surface.",
      "Review the results with your family.",
    ],
    considerations: [
      "Some staining may be permanent depending on stone porosity and age.",
      "Certain cemeteries have their own policies about on-site cleaning work.",
      "Very old or fragile memorials may require a more conservative approach.",
    ],
    icon: Sparkles,
  },
  {
    slug: "monument-restoration",
    title: "Monument Restoration",
    shortDescription:
      "Restoring aged, weathered, or damaged memorials.",
    heroDescription:
      "Restoration goes beyond cleaning to address wear, lettering that has faded, or structural concerns that develop over the years. We assess each memorial individually to recommend an appropriate approach.",
    whoItsFor:
      "Families caring for an older memorial, including historic family plots, that shows visible age or damage.",
    process: [
      "Inspect the memorial's material, lettering, and structural condition.",
      "Recommend a restoration approach based on that evaluation.",
      "Complete restoration work with attention to the memorial's original character.",
      "Confirm the finished result with your family.",
    ],
    considerations: [
      "Very old memorials may have limitations on what can be restored.",
      "Restoration scope depends on the original stone and its condition.",
      "Some historic cemeteries have specific preservation guidelines.",
    ],
    icon: Hammer,
  },
  {
    slug: "monument-repair",
    title: "Monument Repair",
    shortDescription:
      "Repair for settling, tilting, cracking, or foundation issues.",
    heroDescription:
      "Memorials can shift, crack, or settle over time due to ground movement or weather exposure. We evaluate the cause and recommend a repair suited to the memorial and its foundation.",
    whoItsFor:
      "Families who notice a memorial has shifted, cracked, or become unstable.",
    process: [
      "Assess the memorial and its foundation to identify the cause.",
      "Recommend a repair approach, which may include foundation work.",
      "Complete repairs with care to preserve the memorial's design.",
      "Confirm the memorial is level and stable before completing the visit.",
    ],
    considerations: [
      "Foundation issues may require coordination with the cemetery.",
      "Some damage may affect long-term structural options.",
      "Ground conditions and weather can affect repair scheduling.",
    ],
    icon: Wrench,
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}
