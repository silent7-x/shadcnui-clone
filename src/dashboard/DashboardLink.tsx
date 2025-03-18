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
        "hover:text-foreground hidden text-sm transition [@media(min-width:810px)]:block" +
        " " +
        className +
        " " +
        (isCurrent ? "text-foreground" : "text-muted-foreground")
      }
    ></a>
  );
};
