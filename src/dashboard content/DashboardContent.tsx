import { Activity, CreditCard, DollarSign, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { SalesLine } from "./SalesLine";
import { salesLineData } from "./SalesLineData";

import { Chart } from "./Chart";

export const DashboardContent = () => {
  return (
    <div className="m-auto mt-4 flex flex-col gap-4 px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-light">Total Revenue</CardTitle>
            <DollarSign size={16} className="text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">$45,231.89</p>
            <p className="text-muted-foreground text-xs">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-light">Subscriptions</CardTitle>
            <User size={16} className="text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">+2350</p>
            <p className="text-muted-foreground text-xs">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-light">Sales</CardTitle>
            <CreditCard size={16} className="text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">+12,234</p>
            <p className="text-muted-foreground text-xs">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm font-light">Active Now</CardTitle>
            <Activity size={16} className="text-muted-foreground" />
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">+573</p>
            <p className="text-muted-foreground text-xs">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Card className="flex-[3]">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
        <Card className="flex-[2]">
          <CardHeader className="flex-col items-start pb-6">
            <CardTitle>Recent Sales</CardTitle>
            <p className="text-muted-foreground text-sm">
              You made 265 sales this month.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {salesLineData.map((data, index) => (
              <SalesLine key={index} {...data} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
