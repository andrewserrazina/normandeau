import processStepsContent from "@content/process-steps.json";

export interface ProcessStep {
  title: string;
  description: string;
  details: string[];
}

/**
 * Shared five-step process, used on the homepage summary and the full
 * /our-process page. Sourced from content/process-steps.json (editable
 * via the TinaCMS admin at /admin — see README.md). `description` is
 * the short summary; `details` provides the expanded explanation for
 * the full process page.
 */
export const processSteps: ProcessStep[] = processStepsContent.processSteps;
