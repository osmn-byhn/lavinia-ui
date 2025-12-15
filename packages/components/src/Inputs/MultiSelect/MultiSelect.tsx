import { SelectHTMLAttributes } from "react";

export interface MultiSelectProps extends SelectHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function MultiSelect({
  variant = "primary",
  ...props
}: MultiSelectProps) {
  return <button data-variant={variant} {...props} />;
}
