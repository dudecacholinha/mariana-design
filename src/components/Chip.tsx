import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const chipVariants = cva("inline-block border border-dark rounded-full", {
  variants: {
    size: {
      sm: "px-2 py-0.5 text-xs italic",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base",
    },
  },
  defaultVariants: { size: "md" },
});

type ChipProps<C extends React.ElementType = "span"> = {
  as?: C;
} & VariantProps<typeof chipVariants> &
  Omit<React.ComponentPropsWithoutRef<C>, "as">;

export default function Chip<C extends React.ElementType = "span">({
  as,
  size,
  className,
  children,
  ...props
}: ChipProps<C>) {
  const Tag = (as ?? "span") as React.ElementType;
  return (
    <Tag className={twMerge(chipVariants({ size }), className)} {...props}>
      {children}
    </Tag>
  );
}
