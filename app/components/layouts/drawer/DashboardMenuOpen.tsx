import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { drawerState } from "@/atoms/drawerAtom";
import { dropDownState } from "@/atoms/dropDownAtom";

interface Prop {
  title: string;
}

export default function DashboardMenuOpen({ title }: Prop) {
  const [open, setOpen] = useRecoilState(dropDownState);

  return (
    <div className="w-full pr-4">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full"
      >
        <p className="text-[15px] font-semibold">
          {title}
        </p>
        {open ? (
          <HiChevronDown />
        ) : (
          <HiChevronUp />
        )}
      </div>
      <div
        className={open ? "opacity-1 visible" : "h-0 opacity-0 invisible"}
      >
        <ul className="h-full text-gray-500 dark:text-gray-400 font-semibold text-sm space-y-1  py-2">
          <li className="hover:text-gray-700 dark:hover:text-gray-300">
            Default
          </li>
          <li className="hover:text-gray-700 dark:hover:text-gray-300">
            Analytics
          </li>
          <li className="hover:text-gray-700 dark:hover:text-gray-300">CRM</li>
          <li className="hover:text-gray-700 dark:hover:text-gray-300">
            E commerce
          </li>
          <li className="hover:text-gray-700 dark:hover:text-gray-300">
            Management
          </li>
          <li className="hover:text-gray-700 dark:hover:text-gray-300">Saas</li>
        </ul>
      </div>
    </div>
  );
}
