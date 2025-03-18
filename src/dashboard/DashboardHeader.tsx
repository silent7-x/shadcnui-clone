import { Avatar, AvatarImage } from "./Avatar";
import { DashboardLink } from "./DashboardLink";
import { Input } from "./Input";
import { Select } from "./Select";

export const DashboardHeader = () => {
  return (
    <header className="border-border border-b py-4">
      <div className="flex items-center gap-4 px-4">
        <Select>
          <div className="flex items-center gap-4">
            <div className="size-4 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-200"></div>
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
          <Input placeholder="Search..." />
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
