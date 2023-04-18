import {
  TotalOrder,
  WeeklySales,
  MarketShare,
  Weather,
  TotalSales,
  UsingStorage,
  UpgradeStorage,
  BestSellingProducts,
  SharedFiles,
  ActiveUsers,
  BandwidthSaved
} from "./";
import RunningProjects from "./runningProjects/RunningProjects";

function Main() {
  return (
    <main className="mx-6 m-2">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <WeeklySales />
          <TotalOrder />
          <MarketShare />
          <Weather />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RunningProjects />
          <TotalSales />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UsingStorage />
          <UpgradeStorage />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          <BestSellingProducts />
          <SharedFiles />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ActiveUsers />
          <BandwidthSaved />
        </div>
      </div>
    </main>
  );
}

export default Main;
