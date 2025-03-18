import { ComponentPropsWithoutRef } from "react";

export const DashboardLink = ({
  isCurrent,
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { isCurrent?: boolean }) => {
  return (
    <a
      {...props}
      className={
        "hover:text-foreground text-sm transition " +
        " " +
        className +
        " " +
        (isCurrent ? "text-foreground" : "text-muted-foreground")
      }
    ></a>
  );
};
