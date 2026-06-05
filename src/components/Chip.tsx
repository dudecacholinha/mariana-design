import { cva, type VariantProps } from "class-variance-authority";

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

type ChipProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof chipVariants> & {
    as?: React.ElementType;
  };

export default function Chip({
  as: Tag = "span",
  size,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <Tag className={chipVariants({ size, className })} {...props}>
      {children}
    </Tag>
  );
}
