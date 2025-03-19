import { PropsWithChildren } from "react";
import { cn } from "../cn";

export const Button = ({
  children,
  className,
  size,
  variant,
}: PropsWithChildren & {
  className?: string;
  size?: string;
  variant?: string;
}) => {
  return (
    <button
      className={cn(
        "focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
        variant === "outline" && "bg-foreground text-primary-foreground",
        variant === "ghost" &&
          "border-border text-muted-foreground bg-background border",
        variant === "ghost2" && "text-foreground bg-background",
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 rounded-md px-3",
        size === "lg" && "h-11 rounded-md px-8",
      )}
    >
      {children}
    </button>
  );
};
