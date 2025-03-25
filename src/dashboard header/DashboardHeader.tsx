import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CommandDialogComp } from "./CommandDialogComp";
import { DashboardLinks, DashboardLinksDropdown } from "./DashboardLinks";
import { SelectEmployee } from "./SelectEmployee";

export const DashboardHeader = () => {
  const [active, setActive] = useState("overview");

  return (
    <header className="border-border border-b px-4 py-4">
      <div className="flex items-center gap-4">
        <SelectEmployee />
        <DashboardLinksDropdown
          className="block md:hidden"
          active={active}
          setActive={setActive}
        />
        <DashboardLinks
          className="hidden md:block"
          active={active}
          setActive={setActive}
        />
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Input
              placeholder="Search..."
              name="search"
              className="dark:hover:bg-accent hover:bg-accent mr-auto h-10"
            />
            <p className="text-muted-foreground bg-background pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-[10px] max-[840px]:hidden">
              Press
              <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex items-center gap-1 rounded border px-1.5 py-[1px] font-mono text-sm font-medium opacity-100 select-none">
                ⌘<span className="text-[10px]">K</span>
              </kbd>
            </p>
          </div>
          <CommandDialogComp />
          <Avatar className="bg-foreground size-10 hover:cursor-pointer">
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg"
              alt="Avatar"
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
