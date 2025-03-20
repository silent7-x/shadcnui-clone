import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

type ButtonVariantsType = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  "focus-visible:ring-ring  items-center justify-center rounded-md text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-border text-foreground bg-background border hover:bg-accent",
        ghost: "text-foreground bg-background hover:bg-accent",
      },
      // Définir le nom de chaque variation
      size: {
        // Définit les différentes possibilités
        default: "px-4 py-2 h-9",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
    // Définit les valeurs par défaut pour chaque variante
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const Button = ({
  className,
  variant,
  size,
  ...props
}: ComponentPropsWithoutRef<"button"> & ButtonVariantsType) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.children}
    </button>
  );
};
