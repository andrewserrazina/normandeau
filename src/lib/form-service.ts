import type { ConsultationFormValues } from "@/types";

export interface FormSubmitResult {
  success: boolean;
  message: string;
}

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const SUCCESS_MESSAGE =
  "Thank you — your consultation request has been sent. We'll be in touch soon.";
const MISCONFIGURED_MESSAGE =
  "This form isn't connected yet. Please call us directly to reach someone right away.";
const ERROR_MESSAGE =
  "Something went wrong while submitting. Please try again or call us directly.";

/**
 * Submits the consultation form to Formspree
 * (https://formspree.io/f/{form_id}). Set NEXT_PUBLIC_FORMSPREE_ENDPOINT to
 * that URL as a build-time environment variable (it's inlined into the
 * client bundle, same as NEXT_PUBLIC_TINA_CLIENT_ID).
 */
export async function submitConsultationForm(
  values: ConsultationFormValues
): Promise<FormSubmitResult> {
  if (!FORMSPREE_ENDPOINT) {
    console.error(
      "NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set; consultation form cannot submit."
    );
    return { success: false, message: MISCONFIGURED_MESSAGE };
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    return { success: false, message: ERROR_MESSAGE };
  }

  return { success: true, message: SUCCESS_MESSAGE };
}
