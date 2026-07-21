import type { ConsultationFormValues } from "@/types";

export interface FormSubmitResult {
  success: boolean;
  message: string;
}

/**
 * Thin abstraction over "send the consultation form somewhere." Swap the
 * body of this function to call a real provider without touching the
 * form component:
 *
 *   - Resend / email API: POST to an internal API route that sends mail.
 *   - Formspree: POST values directly to your Formspree endpoint.
 *   - HubSpot: POST to the HubSpot Forms API with your portal/form IDs.
 *   - Custom API route: POST to /api/consultation (create under src/app/api).
 *
 * TODO(integration): No backend is connected yet. This currently
 * simulates a network request so the UI can be built and tested end to
 * end; replace the body below when a provider is chosen.
 */
export async function submitConsultationForm(
  values: ConsultationFormValues
): Promise<FormSubmitResult> {
  // TODO(integration): replace with a real fetch() call once a provider
  // (Resend, Formspree, HubSpot, or a custom /api route) is connected.
  await new Promise((resolve) => setTimeout(resolve, 900));
  void values;

  return {
    success: true,
    message:
      "Development mode: form submitted successfully. No message was actually sent — connect an email or CRM provider in src/lib/form-service.ts.",
  };
}
