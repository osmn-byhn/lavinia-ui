import { InputHTMLAttributes } from "react";

export interface FloatingInputProps extends InputHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function FloatingInput({
  variant = "primary",
  ...props
}: FloatingInputProps) {
  return <button data-variant={variant} {...props} />;
}
