import { cn } from "@/lib/utils";

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const fieldBaseStyles =
  "w-full rounded-sm border bg-white px-4 text-[15px] text-charcoal placeholder:text-warm-gray transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-sage";

function fieldBorder(error?: string) {
  return error ? "border-red-600" : "border-stone";
}

export function TextField({
  id,
  label,
  error,
  required,
  className,
  ...rest
}: BaseFieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
        {required && <span aria-hidden="true" className="text-sage"> *</span>}
      </label>
      <input
        id={id}
        className={cn(fieldBaseStyles, fieldBorder(error), "h-12")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({
  id,
  label,
  error,
  required,
  className,
  ...rest
}: BaseFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
        {required && <span aria-hidden="true" className="text-sage"> *</span>}
      </label>
      <textarea
        id={id}
        className={cn(fieldBaseStyles, fieldBorder(error), "min-h-32 py-3 resize-y")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function SelectField({
  id,
  label,
  error,
  required,
  className,
  children,
  ...rest
}: BaseFieldProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
        {required && <span aria-hidden="true" className="text-sage"> *</span>}
      </label>
      <select
        id={id}
        className={cn(fieldBaseStyles, fieldBorder(error), "h-12")}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
