import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export type DashboardLinkProps = ComponentPropsWithoutRef<"a"> & {
  isCurrent?: boolean;
};

export const DashboardLink = ({
  isCurrent,
  className,
  ...props
}: DashboardLinkProps) => {
  return (
    <a
      {...props}
      className={cn(
        "hover:text-foreground hidden text-sm transition [@media(min-width:768px)]:block",
        className,
        isCurrent ? "text-foreground" : "text-muted-foreground",
      )}
    ></a>
  );
};
