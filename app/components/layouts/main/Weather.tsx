import Image from "next/image";
import React from "react";
import Sun from "../../../assets/images/weather-icon.png";
import DotsMenu from "../../common/DotsMenu";

function Weather() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-white px-6 py-4 border-[1px] border-gray-200">
      <div className="w-full">
        <div className="flex items-center justify-between text-sm font-medium space-x-2">
          <h3>Weather</h3>
          <DotsMenu />
        </div>
        <div className="mt-4 mb-2 flex items-center space-x-4">
          <Image src={Sun} width="60" height="60" alt="sun" />
          <div>
            <h3 className="text-sm mb-2">New York City</h3>
            <p className="text-red-500 text-xs">Sunny</p>
            <p className="text-gray-600 text-xs">Precipitation: 50%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
