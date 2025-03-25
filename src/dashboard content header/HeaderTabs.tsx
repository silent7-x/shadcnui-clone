import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const HeaderTabs = () => {
  return (
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
  );
};
