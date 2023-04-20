import React from "react";

interface Prop {
  title: string;
  icon: any;
}

function DrawerItem({ title, icon }: Prop) {
  return (
    <div className="flex items-center group space-x-4 py-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
      <div className="w-3 h-3">{icon}</div>
      <p className="text-[15px] font-semibold">{title}</p>
    </div>
  );
}

export default DrawerItem;
