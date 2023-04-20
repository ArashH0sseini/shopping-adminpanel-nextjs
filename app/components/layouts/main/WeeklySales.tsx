import React from "react";
import { SlQuestion } from "react-icons/sl";
import { HiPlusSm } from "react-icons/hi";
import { Tooltip as ReactTooltip } from "react-tooltip";

function WeeklySales() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white dark:bg-[#121e2d] px-6 py-4 border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div>
        <div className="flex items-center justify-center text-sm font-medium space-x-2">
          <h3>Weekly Sales</h3>
          <ReactTooltip
            anchorId="second-app-title"
            place="top"
            content="Last week sales"
            className="z-20"
          />
          <SlQuestion id="second-app-title" className="text-gray-400" />
        </div>
        <p className="text-4xl text-gray-600 dark:text-gray-400 mt-4 mb-2">$47K</p>
        <div className="flex items-end w-14 bg-green-100 dark:bg-green-950 dark:text-green-400 text-green-800 text-[12px] py-[2px] px-1 rounded-full font-bold">
          <HiPlusSm className="w-4 h-4" />
          <span>3.5%</span>
        </div>
      </div>
      <div>نمودار</div>
    </div>
  );
}

export default WeeklySales;
