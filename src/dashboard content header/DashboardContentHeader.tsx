import { Calendar } from "lucide-react";
import { Select } from "../components/Select";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

export const DashboardContentHeader = () => {
  return (
    <div className="mt-8 flex flex-col gap-6 pr-8 pl-4 lg:mt-12">
      <div className="flex w-full items-center gap-4">
        <h1 className="mr-auto px-4 text-3xl font-bold">Dashboard</h1>
        <Select>
          <div className="flex items-center gap-4">
            <Calendar size={20} />
            <span className="text-sm">Mar 18, 2025 - Apr 2, 2025</span>
          </div>
        </Select>
        <Button variant={"default"} size={"default"}>
          Download
        </Button>
      </div>
      <Tabs defaultValue="Overview" className="ml-4">
        <TabsList>
          <TabsTrigger
            className="dark:data-[state=active]:bg-background dark:text-muted-foreground/60 font-light hover:cursor-pointer"
            value="Overview"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-[state=active]:bg-background dark:text-muted-foreground/60 font-light hover:cursor-pointer"
            value="Analytics"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-[state=active]:bg-background dark:text-muted-foreground/60 font-light hover:cursor-pointer"
            value="Reports"
          >
            Reports
          </TabsTrigger>
          <TabsTrigger
            className="dark:data-[state=active]:bg-background dark:text-muted-foreground/60 font-light hover:cursor-pointer"
            value="Notifications"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
