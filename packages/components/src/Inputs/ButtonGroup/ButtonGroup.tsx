import { ButtonHTMLAttributes } from "react";

export interface ButtonGroupProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function ButtonGroup({
  variant = "primary",
  ...props
}: ButtonGroupProps) {
  return <button data-variant={variant} {...props} />;
}
