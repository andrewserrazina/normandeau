import type { ConsultationFormValues, FormFieldError } from "@/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateConsultationForm(
  values: ConsultationFormValues
): FormFieldError[] {
  const errors: FormFieldError[] = [];

  if (!values.name.trim()) {
    errors.push({ field: "name", message: "Please enter your name." });
  }

  if (!values.email.trim()) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!emailPattern.test(values.email.trim())) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (!values.phone.trim()) {
    errors.push({ field: "phone", message: "Please enter a phone number." });
  }

  if (!values.memorialType.trim()) {
    errors.push({ field: "memorialType", message: "Please select the memorial or service type." });
  }

  if (!values.message.trim()) {
    errors.push({ field: "message", message: "Please share a few details about how we can help." });
  }

  return errors;
}
