import { PropsWithChildren } from "react";
import { cn } from "../cn";

export const Select = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "border-border hover hover:bg-muted rounded-md border px-4 py-2 transition hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};
