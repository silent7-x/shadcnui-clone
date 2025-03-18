import { PropsWithChildren } from "react";

export const Select = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-border rounded-md border px-4 py-2">{children}</div>
  );
};
