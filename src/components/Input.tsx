import { forwardRef } from "react";

export const inputClass =
  "border border-dark/20 rounded px-4 py-2 focus:outline-none focus:border-purple w-full";

const Input = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={inputClass + (className ? ` ${className}` : "")}
    {...props}
  />
));

Input.displayName = "Input";
export default Input;
