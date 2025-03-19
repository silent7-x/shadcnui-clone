import { Calendar } from "lucide-react";
import { Button } from "./Button";
import { Select } from "./Select";
import { Tab, Tabs } from "./Tabs";

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
        <Button size="sm" variant="ghost2">
          {" "}
          Download{" "}
        </Button>
      </div>
      <Tabs>
        <Tab isActive>Overview</Tab>
        <Tab>Analytics</Tab>
        <Tab>Reports</Tab>
        <Tab>Notifications</Tab>
      </Tabs>
    </div>
  );
};
