import { PropsWithChildren } from "react";

export const Select = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-border hover hover:bg-muted rounded-md border px-4 py-2 transition hover:cursor-pointer">
      {children}
    </div>
  );
};
