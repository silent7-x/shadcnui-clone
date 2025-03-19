import { ComponentPropsWithoutRef } from "react";

export const Card = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={
        "bg-card border-border rounded-md border p-6" + " " + props.className
      }
    >
      {props.children}
    </div>
  );
};

export const CardHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={
        "flex items-center justify-between space-y-2" + " " + props.className
      }
    >
      {props.children}
    </div>
  );
};

export const CardTitle = (props: ComponentPropsWithoutRef<"p">) => {
  return (
    <p className={"text-sm font-light" + " " + props.className}>
      {props.children}
    </p>
  );
};

export const CardContent = (props: ComponentPropsWithoutRef<"div">) => {
  return <div className={"" + " " + props.className}>{props.children}</div>;
};
