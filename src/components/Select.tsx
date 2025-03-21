import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Select = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "border-border hover hover:bg-muted rounded-md border px-4 py-2 shadow-sm transition hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};
