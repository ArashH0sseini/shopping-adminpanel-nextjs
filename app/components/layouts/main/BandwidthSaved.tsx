import DotsMenu from "../../common/DotsMenu";
import BandwidthSavedMonthList from "./BandwidthSavedMonthList";
import { BsCheck } from "react-icons/bs";
function BandwidthSaved() {
  return (
    <div className="flex items-center justify-between  rounded-md shadow-xl bg-gray-100 dark:bg-[#162231] border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between items-center px-6 py-2">
          <h3 className="text-sm font-medium">Bandwidth Saved</h3>
          <DotsMenu />
        </div>
        <div className="bg-white dark:bg-[#121e2d] cursor-pointer h-full flex flex-col  items-center justify-center">
            <div className="mb-8"><p>نمودار</p></div>
          <div className="flex items-center">
            <BsCheck className="w-7 h-7 text-green-500" />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              35.75 GB saved
            </p>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            38.44 GB total bandwidth
          </span>
        </div>
        <div className="flex items-center justify-between px-6 p-1 cursor-pointer">
          <BandwidthSavedMonthList />
          <button className="text-sm  text-blue-500 hover:underline hover:text-blue-600">
            Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default BandwidthSaved;
