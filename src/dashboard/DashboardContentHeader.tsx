import { Select } from "./Select";

export const DashboardContentHeader = () => {
  return (
    <div className="mt-8 flex items-center gap-4 px-4 lg:mt-12">
      <h1 className="px-4 text-3xl font-bold">Dashboard</h1>
      <Select></Select>
    </div>
  );
};
