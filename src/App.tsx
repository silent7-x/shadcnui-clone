import { DashboardContentHeader } from "./dashboard content header/DashboardContentHeader";
import { DashboardContent } from "./dashboard content/DashboardContent";
import { DashboardHeader } from "./dashboard header/DashboardHeader";

function App() {
  return (
    <main className="dark bg-background text-foreground flex h-full min-h-screen w-full flex-col items-center p-4">
      <div className="border-border h-full w-full rounded-md border pb-8">
        <DashboardHeader />
        <DashboardContentHeader />
        <DashboardContent />
      </div>
    </main>
  );
}

export default App;
