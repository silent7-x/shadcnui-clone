import { PropsWithChildren } from "react";
import { cn } from "../cn";

export const Button = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <button
      className={cn(
        "focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
    >
      {children}
    </button>
  );
};
