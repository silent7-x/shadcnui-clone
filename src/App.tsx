import { DashboardContentHeader } from "./dashboard/DashboardContentHeader";
import { DashboardHeader } from "./dashboard/DashboardHeader";

function App() {
  return (
    <main className="dark bg-background text-foreground flex h-screen w-full flex-col items-center justify-center p-4">
      <div className="border-border h-full w-full rounded-md border">
        <DashboardHeader />
        <DashboardContentHeader />
      </div>
    </main>
  );
}

export default App;
