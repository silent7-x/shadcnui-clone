import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export type TabsProps = PropsWithChildren;

export const Tabs = ({ children }: TabsProps) => {
  return (
    <div className="bg-muted ml-4 w-fit rounded-md px-1 py-1 text-sm">
      {children}
    </div>
  );
};

export type TabProps = PropsWithChildren & { isActive?: boolean };

export const Tab = ({ children, isActive }: TabProps) => {
  return (
    <button
      className={cn(
        "rounded-md px-2.5 py-1 hover:cursor-pointer",
        isActive ? "bg-background text-foreground" : "text-muted-foreground/60",
      )}
    >
      {children}
    </button>
  );
};
