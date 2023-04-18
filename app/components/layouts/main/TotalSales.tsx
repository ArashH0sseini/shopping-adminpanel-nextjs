import React from "react";
import DotsMenu from "../../common/DotsMenu";
import MonthList from "./MonthList";

function TotalSales() {
  return (
    <div className="flex h-48 md:h-full rounded-md shadow-xl bg-white border-[1px] border-gray-200">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-2">
          <h3 className="text-sm font-medium">Total Sales</h3>
          <div className="flex items-center space-x-2">
            <MonthList />
            <DotsMenu />
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
