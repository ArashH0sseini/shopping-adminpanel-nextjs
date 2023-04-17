import React from "react";

interface Props {
  title: string;
  keyname: string;
  percent: string;
}

function RunningProjectsItem({ title, percent, keyname }: Props) {

  return (
    <div className="flex group items-center justify-between w-full px-6 py-4 border-gray-200 border-b-[1px]">
      <div className="flex items-center space-x-4">
        <span
          className={`bg-blue-100 text-blue-500 font-bold rounded-full flex items-center justify-center w-8 h-8`}
        >
          {keyname}
        </span>
        <p className="group-hover:underline">{title}</p>
        <span className="flex items-center justify-center bg-slate-100 text-blue-500 text-[12px] rounded-full font-bold w-10 h-5">
          {percent}
        </span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <p className="text-sm">31:20:00</p>
        <div className="relative bg-blue-100 w-14 h-[6px] flex rounded-full">
          <span style={{width:`${percent}`}} className="absolute top-0 left-0 bg-blue-600 h-[6px] flex rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default RunningProjectsItem;
