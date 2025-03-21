import { Button } from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export type DashboardLinkProps = ComponentPropsWithoutRef<"a"> & {
  isCurrent?: boolean;
};

export const DashboardLink = ({
  isCurrent,
  className,
  ...props
}: DashboardLinkProps) => {
  return (
    <a
      {...props}
      className={cn(
        "hover:text-foreground text-sm transition",
        className,
        isCurrent ? "text-foreground" : "text-muted-foreground",
      )}
    ></a>
  );
};

export type DashboardLinksDropdownProps = ComponentPropsWithoutRef<"div"> & {
  active: string;
  setActive: (value: string) => void;
};

export const DashboardLinksDropdown = ({
  active,
  setActive,
  className,
}: DashboardLinksDropdownProps) => {
  return (
    <div className={cn(className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={"default"}
            className="dark:hover:bg-accent bg- dark:bg-input/30 flex items-center gap-2 font-light"
          >
            {active.charAt(0).toUpperCase() + active.slice(1)}
            <ChevronDownIcon className="size-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {["overview", "customers", "products", "settings"].map((item) => (
            <DropdownMenuItem asChild key={item}>
              <DashboardLink
                href="#"
                onClick={() => setActive(item)}
                isCurrent={active === item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </DashboardLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export type DashboardLinksProps = ComponentPropsWithoutRef<"div"> & {
  active: string;
  setActive: (value: string) => void;
};

export const DashboardLinks = (props: DashboardLinksProps) => {
  return (
    <div className={cn("space-x-4 lg:space-x-6", props.className)}>
      <DashboardLink
        href="#"
        onClick={() => props.setActive("overview")}
        isCurrent={props.active === "overview"}
      >
        Overview
      </DashboardLink>
      <DashboardLink
        href="#"
        onClick={() => props.setActive("customers")}
        isCurrent={props.active === "customers"}
      >
        Customers
      </DashboardLink>
      <DashboardLink
        href="#"
        onClick={() => props.setActive("products")}
        isCurrent={props.active === "products"}
      >
        Products
      </DashboardLink>
      <DashboardLink
        href="#"
        onClick={() => props.setActive("settings")}
        isCurrent={props.active === "settings"}
      >
        Settings
      </DashboardLink>
    </div>
  );
};
