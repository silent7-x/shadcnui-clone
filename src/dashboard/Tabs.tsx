import { PropsWithChildren } from "react";

export const Tabs = (props: PropsWithChildren) => {
  return (
    <div className="bg-muted ml-4 w-fit rounded-md px-1 py-1 text-sm">
      {props.children}
    </div>
  );
};

export const Tab = (props: PropsWithChildren & { isActive?: boolean }) => {
  return (
    <button
      className={
        "rounded-md px-2.5 py-1 hover:cursor-pointer" +
        " " +
        (props.isActive
          ? "bg-background text-foreground"
          : "text-muted-foreground/60")
      }
    >
      {props.children}
    </button>
  );
};
