import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Calculator,
  Calendar,
  CreditCard,
  PackageSearch,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { DashboardLinks, DashboardLinksDropdown } from "./DashboardLinks";
import { SelectEmployee } from "./SelectEmployee";

export const DashboardHeader = () => {
  const [active, setActive] = useState("overview");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
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
              className="dark:hover:bg-accent hover:bg-accent mr-auto"
            />
            <p className="text-muted-foreground bg-background pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-[10px] max-[840px]:hidden">
              Press
              <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex items-center gap-1 rounded border px-1 py-[1px] font-mono text-sm font-medium opacity-100 select-none">
                ⌘<span className="text-[10px]">K</span>
              </kbd>
            </p>
          </div>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Users />
                  <span>Customers</span>
                </CommandItem>
                <CommandItem>
                  <PackageSearch />
                  <span>Product</span>
                </CommandItem>
                <CommandItem>
                  <Calculator />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>

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
