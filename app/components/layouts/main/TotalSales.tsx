import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import MonthList from "./MonthList";

function TotalSales() {
  return (
    <div className="flex rounded-md shadow-xl bg-white border-[1px] border-gray-200">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-2">
          <h3 className="text-sm font-medium">Total Sales</h3>
          <div className="flex items-center space-x-2">
            <MonthList />
            <BiDotsHorizontalRounded className="w-10 h-8 p-1 transition-all delay-75 text-gray-500 hover:shadow-lg hover:border-2 rounded-lg cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-center h-full px-6 py-4 space-y-6 cursor-pointer">
          نمودار
        </div>
      </div>
    </div>
  );
}

export default TotalSales;
