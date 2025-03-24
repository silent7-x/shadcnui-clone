import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { chartData } from "./chartData";

const chartConfig = {
  value: {
    label: "Amount",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export const Chart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => {
            const [day, month, year] = value.split("-");
            const isoString = `${year}-${month}-${day}`;
            const date = new Date(isoString);
            return new Intl.DateTimeFormat("fr-FR", {
              day: "2-digit",
              month: "2-digit",
            }).format(date);
          }}
        />
        <YAxis
          dataKey="value"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(value);
          }}
        />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
