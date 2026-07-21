"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { TextField, TextareaField, SelectField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { validateConsultationForm } from "@/lib/validation";
import { submitConsultationForm } from "@/lib/form-service";
import type { ConsultationFormValues, FormFieldError } from "@/types";

const initialValues: ConsultationFormValues = {
  name: "",
  email: "",
  phone: "",
  preferredContact: "either",
  memorialType: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ConsultationForm() {
  const [values, setValues] = useState<ConsultationFormValues>(initialValues);
  const [errors, setErrors] = useState<FormFieldError[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function fieldError(field: keyof ConsultationFormValues) {
    return errors.find((error) => error.field === field)?.message;
  }

  function updateField<K extends keyof ConsultationFormValues>(
    field: K,
    value: ConsultationFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Honeypot: a hidden field real visitors never fill in.
    // TODO(spam-protection): add a production-grade guard (e.g. hCaptcha,
    // reCAPTCHA, or a server-side rate limit) before connecting a real backend.
    const honeypot = (event.currentTarget.elements.namedItem("company") as HTMLInputElement | null)?.value;
    if (honeypot) {
      return;
    }

    const validationErrors = validateConsultationForm(values);
    setErrors(validationErrors);
    if (validationErrors.length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitConsultationForm(values);
      setStatus(result.success ? "success" : "error");
      setStatusMessage(result.message);
      if (result.success) {
        setValues(initialValues);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong while submitting. Please try again or call us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-sm border border-sage/40 bg-sage/10 p-8 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="size-8 text-sage" />
        <p className="text-lg font-medium text-charcoal">Thank you for reaching out.</p>
        <p className="max-w-md text-[15px] text-taupe">{statusMessage}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          name="name"
          label="Name"
          required
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField("name", event.target.value)}
          error={fieldError("name")}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          error={fieldError("email")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          id="phone"
          name="phone"
          type="tel"
          label="Phone"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          error={fieldError("phone")}
        />
        <SelectField
          id="preferredContact"
          name="preferredContact"
          label="Preferred Contact Method"
          value={values.preferredContact}
          onChange={(event) =>
            updateField("preferredContact", event.target.value as ConsultationFormValues["preferredContact"])
          }
        >
          <option value="either">No preference</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </SelectField>
      </div>

      <SelectField
        id="memorialType"
        name="memorialType"
        label="Type of Memorial or Service"
        required
        value={values.memorialType}
        onChange={(event) => updateField("memorialType", event.target.value)}
        error={fieldError("memorialType")}
      >
        <option value="">Select an option</option>
        <option value="New memorial — upright, flat, slant, or bevel">
          New memorial — upright, flat, slant, or bevel
        </option>
        <option value="Companion memorial">Companion memorial</option>
        <option value="Custom memorial design">Custom memorial design</option>
        <option value="Cemetery lettering">Cemetery lettering</option>
        <option value="Additional inscription">Additional inscription</option>
        <option value="Monument cleaning">Monument cleaning</option>
        <option value="Monument restoration">Monument restoration</option>
        <option value="Monument repair">Monument repair</option>
        <option value="Not sure yet / general inquiry">Not sure yet / general inquiry</option>
      </SelectField>

      <TextareaField
        id="message"
        name="message"
        label="Message"
        required
        rows={5}
        placeholder="Tell us about the cemetery, timeline, or anything else that would help us prepare for your consultation."
        value={values.message}
        onChange={(event) => updateField("message", event.target.value)}
        error={fieldError("message")}
      />

      <p className="text-sm text-taupe">
        By submitting this form, you agree to be contacted by Normandeau
        Memorials about your inquiry. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-charcoal">
          Privacy Policy
        </Link>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {statusMessage}
        </p>
      )}

      <Button type="submit" size="large" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Request a Consultation"
        )}
      </Button>
    </form>
  );
}
