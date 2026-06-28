import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  ...props
}: TextareaProps) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
      </label>

      <textarea
        className={`input ${error ? "input-error" : ""}`}
        {...props}
      />

      {error && (
        <span className="form-error">
          {error}
        </span>
      )}
    </div>
  );
}