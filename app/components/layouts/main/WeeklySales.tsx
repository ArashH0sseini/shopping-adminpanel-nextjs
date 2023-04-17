import React from "react";
import { SlQuestion } from "react-icons/Sl";
import { HiPlusSm } from "react-icons/hi";
import { Tooltip as ReactTooltip } from "react-tooltip";

function WeeklySales() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white px-6 py-4 border-[1px] border-gray-200">
      <div>
        <div className="flex items-center justify-center text-sm font-medium space-x-2">
          <h3>Weekly Sales</h3>
          <ReactTooltip
            anchorId="second-app-title"
            place="top"
            content="Last week sales"
          />
          <SlQuestion id="second-app-title" className="text-gray-400" />
        </div>
        <p className="text-4xl text-gray-600 mt-4 mb-2">$47K</p>
        <div className="flex items-end w-14 bg-green-100 text-green-800 text-[12px] py-[2px] px-1 rounded-full font-bold">
          <HiPlusSm className="w-4 h-4" />
          <span>3.5%</span>
        </div>
      </div>
      <div>نمودار</div>
    </div>
  );
}

export default WeeklySales;
