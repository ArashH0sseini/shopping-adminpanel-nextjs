import { drawerState } from "@/atoms/drawerAtom";
import React from "react";
import { useRecoilState } from "recoil";

interface Prop {
  title: string;
}

function DrawerDivider({ title }: Prop) {
  const [open, setOpen] = useRecoilState(drawerState);

  return (
    <div className="flex items-center space-x-2 mt-5 mb-3">
      {open ? <p className="text-xs font-bold text-gray-400 dark:text-gray-600">{title}</p> : null}
      <span className="w-full h-[2px] rounded-full bg-gray-200 dark:bg-gray-800"></span>
    </div>
  );
}

export default DrawerDivider;
