import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "../components/Input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { DashboardLink } from "./DashboardLink";
import { SelectEmployee } from "./SelectEmployee";

export const DashboardHeader = () => {
  return (
    <header className="border-border border-b px-4 py-4">
      <div className="flex items-center gap-4">
        <SelectEmployee />
        <DashboardLink href="#" className="text-foreground" isCurrent>
          Overview
        </DashboardLink>
        <DashboardLink href="#">Customers</DashboardLink>
        <DashboardLink href="#">Products</DashboardLink>
        <DashboardLink href="#">Settings</DashboardLink>
        <div className="ml-auto flex items-center gap-4">
          <Input
            placeholder="Search..."
            name="search"
            className="h-9 w-full flex-1"
          />
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
