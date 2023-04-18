import { HiChevronRight } from "react-icons/hi";

function UpgradeStorage() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white dark:bg-[#121e2d] px-6 border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div className="space-y-6">
        <div>
        <p className="text-orange-500 text-lg font-semibold">
          Running out of your space?
        </p>
        <p className="text-sm font-light">
          Your storage will be running out soon. Get more space and powerful
          productivity features.
        </p>
        </div>
        <div className="flex items-center cursor-pointer">
          <p className="text-orange-500 hover:underline text-sm font-semibold">Upgrade Storage</p>
          <HiChevronRight className="text-orange-500 font-bold w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default UpgradeStorage;
