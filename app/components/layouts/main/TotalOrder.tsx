import React from "react";
import { SlQuestion } from "react-icons/Sl";
import { TiArrowSortedUp } from "react-icons/ti";

function TotalOrder() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white px-6 py-4 border-[1px] border-gray-200">
      <div>
        <h3 className="text-sm font-medium">Total Order</h3>
        <p className="text-4xl text-gray-600 mt-4 mb-2">58.4K</p>
        <div className="flex items-end w-16 bg-slate-100 text-blue-600 text-[12px] py-[2px] px-2 rounded-full font-bold">
          <TiArrowSortedUp className="w-4 h-4" />
          <span>13.6%</span>
        </div>
      </div>
      <div>نمودار</div>
    </div>
  );
}

export default TotalOrder;
