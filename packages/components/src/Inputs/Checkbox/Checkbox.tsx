import { HTMLAttributes } from "react";

export interface RadioProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Radio({ variant = "primary", ...props }: RadioProps) {
  return <button data-variant={variant} {...props} />;
}
