import { HeaderTabs } from "./HeaderTabs";

import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "./DateRangePicker";

export const DashboardContentHeader = () => {
  return (
    <div className="mt-8 flex flex-col gap-6 pr-8 pl-4 lg:mt-12">
      <div className="flex w-full items-center gap-4">
        <h1 className="mr-auto px-4 text-3xl font-bold">Dashboard</h1>
        <DatePickerWithRange className="dark:hover:bg-muted rounded-md transition" />
        <Button variant={"default"} size={"default"}>
          Download
        </Button>
      </div>
      <HeaderTabs />
    </div>
  );
};
