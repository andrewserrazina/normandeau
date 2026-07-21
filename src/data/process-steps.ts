export interface ProcessStep {
  title: string;
  description: string;
  details: string[];
}

/**
 * Shared five-step process, used on the homepage summary and the full
 * /our-process page. `description` is the short summary; `details`
 * provides the expanded explanation for the full process page.
 */
export const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description:
      "We begin with a conversation about the person being remembered, the cemetery, and your family's preferences.",
    details: [
      "We discuss the person being remembered, your family's wishes, and any ideas you already have.",
      "We ask about the cemetery so we can plan around its specific requirements from the start.",
      "You'll leave with a clear sense of the options available and what happens next.",
    ],
  },
  {
    title: "Cemetery and Memorial Considerations",
    description:
      "We review memorial types, granite colors, and finishes suited to your cemetery and your family's vision.",
    details: [
      "Cemeteries often set their own rules for memorial size, material, and foundation type.",
      "We help confirm section and lot requirements before finalizing a design direction.",
      "This step narrows the field to memorial types that are both meaningful and permitted.",
    ],
  },
  {
    title: "Stone and Design Selection",
    description:
      "Lettering, layout, artwork, and any emblems are drafted into a detailed design proof for your review.",
    details: [
      "We review granite colors, finishes, and shapes together, often with physical samples.",
      "Lettering style, layout, artwork, and emblems are drafted into an initial design concept.",
      "This step is collaborative — we want the design to feel like it reflects your family.",
    ],
  },
  {
    title: "Proofing and Approval",
    description:
      "We refine the proof together until every detail, from wording to spacing, is approved by your family.",
    details: [
      "You'll review a detailed proof showing wording, layout, spacing, and any artwork.",
      "We revise the proof as many times as needed until every detail is correct.",
      "Nothing moves to production until your family has given final approval.",
    ],
  },
  {
    title: "Production, Delivery, and Installation",
    description:
      "Once approved, the memorial moves into production and installation is coordinated with the cemetery.",
    details: [
      "Once approved, your memorial moves into production according to the finalized design.",
      "We coordinate delivery and installation timing directly with the cemetery.",
      "Installation follows the cemetery's specific foundation and placement requirements.",
    ],
  },
];
