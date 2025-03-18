import { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={
        "placeholder:text-muted-foreground border-border bg-background focus:border-foreground rounded-md border px-4 py-2 focus:outline-none " +
        " " +
        className
      }
    />
  );
};
