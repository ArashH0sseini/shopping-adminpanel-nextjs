import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

function MarketShare() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white px-6 py-4 border-[1px] border-gray-200">
      <div>
        <div className="flex items-center justify-center text-sm font-medium space-x-2">
          <h3>Market Share</h3>
        </div>
        <div className="mt-4 mb-2">
          <p className="text-4xl text-gray-600">58.4K</p>
        </div>
        <div className="flex items-end w-16 bg-slate-100 text-blue-600 text-[12px] py-[2px] px-2 rounded-full font-bold">
          <TiArrowSortedUp className="w-4 h-4" />
          <span>13.6%</span>
        </div>
      </div>
      <div>نمودار</div>
    </div>
  );
}

export default MarketShare;
