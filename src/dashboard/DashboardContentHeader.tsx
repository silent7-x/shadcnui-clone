import { Calendar } from "lucide-react";
import { Button } from "./Button";
import { Select } from "./Select";

export const DashboardContentHeader = () => {
  return (
    <div className="mt-8 flex items-center gap-4 pr-8 pl-4 lg:mt-12">
      <h1 className="mr-auto px-4 text-3xl font-bold">Dashboard</h1>
      <Select>
        <div className="flex items-center gap-4">
          <Calendar size={20} />
          <span className="text-sm">Mar 18, 2025 - Apr 2, 2025</span>
        </div>
      </Select>
      <Button> Download </Button>
    </div>
  );
};
