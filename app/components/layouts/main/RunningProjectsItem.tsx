import React from "react";
import { FaDivide } from "react-icons/fa";

interface Props {
  title: string;
  color: string;
  percent: string;
}

function RunningProjectsItem({ title, color, percent }: Props) {
  const date24 = new Date();
  const data24Time = date24.toLocaleTimeString("en-IT", { hour12: false });
  return (
    <div className="flex group items-center justify-between">
      <div className="flex items-center space-x-4">
        <span
          className={`bg-${color}-100 text-${color}-500 text-lg font-bold rounded-full flex items-center justify-center w-8 h-8`}
        >
          F
        </span>
        <p className="group-hover:underline">{title}</p>
        <span className="flex items-center justify-center bg-slate-100 text-blue-500 text-[12px] rounded-full font-bold w-10 h-5">
          {percent}
        </span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <p>{data24Time}</p>
        <div className="relative bg-blue-100 w-14 h-[6px] flex rounded-full">
          <span style={{width:`${percent}`}} className="absolute top-0 left-0 bg-blue-600 h-[6px] flex rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default RunningProjectsItem;
