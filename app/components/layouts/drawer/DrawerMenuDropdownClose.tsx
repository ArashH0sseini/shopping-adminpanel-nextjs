import React, { useState } from "react";
import DashboardMenuClose from "./DashboardMenuClose";

interface Prop {
  title: string;
  icon: any;
  items:any
}

function DrawerMenuDropdownClose({ title, icon,items }: Prop) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex group space-x-4 py-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" onClick={() => setOpen(!open)}>
      <div className="mt-1">{icon}</div>
      <div className=" bg-[#EDF2F9] dark:bg-[#0B1727] w-full">
        <DashboardMenuClose title={title} open={open} items={items} />
      </div>
    </div>
  );
}

export default DrawerMenuDropdownClose;
