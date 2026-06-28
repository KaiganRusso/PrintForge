import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
      </label>

      <input
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