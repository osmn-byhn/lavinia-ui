import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Input({ variant = "primary", ...props }: InputProps) {
  return <button data-variant={variant} {...props} />;
}
