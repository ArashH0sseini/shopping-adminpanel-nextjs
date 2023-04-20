import { useRecoilState } from "recoil";
import { drawerState } from "@/atoms/drawerAtom";
import DrawerItems from "./DrawerItems";

function Drawer() {
  const [open, setOpen] = useRecoilState(drawerState);
  return (
    <div className="hidden lg:block group px-4 cursor-pointer">
      <div
        className={
          open
            ? "bg-[#EDF2F9] dark:bg-[#0B1727] w-52 h-screen overflow-y-scroll scrollbar-hide hover:scrollbar-default sticky left-0 top-0"
            : "bg-[#EDF2F9] dark:bg-[#0B1727] w-5 h-screen  hover:w-52 overflow-y-scroll scrollbar-hide hover:scrollbar-default fixed z-10"
        }
      >
      <DrawerItems />
      </div>
    </div>
  );
}

export default Drawer;
