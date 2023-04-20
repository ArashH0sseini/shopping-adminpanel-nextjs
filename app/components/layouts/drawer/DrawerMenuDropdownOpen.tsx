import React from "react";
import DashboardMenuOpen from "./DashboardMenuOpen";

interface Prop {
  title: string;
  icon: any;
}

function DrawerMenuDropdownOpen({ title, icon }: Prop) {
  return (
    <div className=" flex group pt-4 space-x-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      <div className="mt-1">{icon}</div>
      <div className=" bg-[#EDF2F9] dark:bg-[#0B1727] w-full">
        <DashboardMenuOpen title={title} />
      </div>
    </div>
  );
}

export default DrawerMenuDropdownOpen;
