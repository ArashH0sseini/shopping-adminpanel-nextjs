import React from "react";
import RunningProjectsList from "./RunningProjectsList";
import { HiChevronRight } from "react-icons/hi";
import RunningProjectsItem from "./RunningProjectsItem";

function RunningProjects() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-gray-100 border-[1px] border-gray-200">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-2">
          <h3 className="text-sm font-medium">Running Projects</h3>
          <RunningProjectsList />
        </div>
        <div className="bg-white cursor-pointer">
         <RunningProjectsItem title="Falcon" keyname="F" percent="38%" />
         <RunningProjectsItem title="Regin" keyname="R" percent="79%" />
         <RunningProjectsItem title="Boots4" keyname="B" percent="90%" />
         <RunningProjectsItem title="Raven" keyname="R" percent="40%" />
         <RunningProjectsItem title="Slick" keyname="S" percent="70%" />
        </div>
        <div className="flex items-center justify-center p-2 cursor-pointer">
          <p className="text-blue-500 hover:underline text-base">Show all projects</p>
          <HiChevronRight className="text-blue-500 font-bold w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default RunningProjects;
