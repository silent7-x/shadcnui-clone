import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

export const Card = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-card border-border rounded-md border p-6",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export const CardHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between space-y-2",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export const CardTitle = (props: ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={cn("text-sm font-light", props.className)}>
      {props.children}
    </p>
  );
};

export const CardContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("", props.className)}>{props.children}</div>;
};
