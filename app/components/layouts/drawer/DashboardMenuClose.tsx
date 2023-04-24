import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

interface Prop {
  title: string;
  open: boolean;
  items: any;
}

export default function DashboardMenuOpen({ title, open, items }: Prop) {
  return (
    <div className="w-full pr-4">
      <div className="flex justify-between items-center w-full">
        <p className="text-[15px] font-semibold">{title}</p>
        {open ? <HiChevronDown /> : <HiChevronUp />}
      </div>
      <div className={open ? "opacity-1 visible" : "h-0 opacity-0 invisible"}>
        <ul className="h-full text-gray-500 dark:text-gray-400 font-semibold text-sm space-y-1 py-2">
          {items.map((item: any, index: number) => (
            <Link key={index} href={`${item}`}>
              <li className="hover:text-gray-700 dark:hover:text-gray-300">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
