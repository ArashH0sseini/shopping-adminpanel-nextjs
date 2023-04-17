import { TotalOrder, WeeklySales, MarketShare, Weather } from "./";
import RunningProjects from "./RunningProjects";

function Main() {
  return (
    <main className="m-2 mx-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <WeeklySales />
          <TotalOrder />
          <MarketShare />
          <Weather />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RunningProjects />
        </div>
      </div>
    </main>
  );
}

export default Main;
