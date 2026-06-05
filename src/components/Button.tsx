import { cloneElement, isValidElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-block px-6 py-2 rounded font-medium no-underline",
  {
    variants: {
      variant: {
        primary: "bg-dark text-white",
        ghost: "border border-dark text-dark",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export default function Button({
  asChild,
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = buttonVariants({ variant, className });

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<{ className: string }>, {
      className: cls,
    });
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
