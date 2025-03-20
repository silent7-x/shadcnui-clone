import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

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
        "hover:text-foreground hidden text-sm transition [@media(min-width:810px)]:block",
        className,
        isCurrent ? "text-foreground" : "text-muted-foreground",
      )}
    ></a>
  );
};
