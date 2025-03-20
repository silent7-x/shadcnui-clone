import { Avatar, AvatarImage } from "../components/Avatar";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { DashboardLink } from "./DashboardLink";

export const DashboardHeader = () => {
  return (
    <header className="border-border border-b px-4 py-4">
      <div className="flex items-center gap-4">
        <Select>
          <div className="flex items-center gap-4">
            <div className="size-5 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200"></div>
            <p>Alicia Roch</p>
          </div>
        </Select>
        <DashboardLink href="#" className="text-foreground" isCurrent>
          Overview
        </DashboardLink>
        <DashboardLink href="#">Customers</DashboardLink>
        <DashboardLink href="#">Products</DashboardLink>
        <DashboardLink href="#">Settings</DashboardLink>
        <div className="ml-auto flex items-center gap-2">
          <Input placeholder="Search..." name="search" />
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/lorelei/svg"
              alt="Avatar"
            />
          </Avatar>
        </div>
      </div>
    </header>
  );
};
