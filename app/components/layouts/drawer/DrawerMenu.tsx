import React from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { menuState } from "@/atoms/menuAtom";
import {
  BsFillCalendarEventFill,
  BsFillKanbanFill,
  BsFillPinFill,
} from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChartPie,
  FaFlag,
  FaLock,
  FaQuestionCircle,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoShareSocialSharp, IoWarning } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import DrawerDivider from "./DrawerDivider";
import DrawerItem from "./DrawerItem";
import DrawerMenuDropdownClose from "./DrawerMenuDropdownClose";
import DrawerMenuDropdownOpen from "./DrawerMenuDropdownOpen";
import DrawerItems from "./DrawerItems";

type Props = {};

export default function Menu({}: Props) {
  const [open, setOpen] = useRecoilState(menuState);

  return (
    <>
      <motion.div
        initial={{
          y: -800,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 0.96,
        }}
        transition={{
          duration: 0.8,
        }}
        className="bg-[#EDF2F9] dark:bg-[#0B1727] w-full h-full fixed z-10"
      >
        <div className="group px-4 h-full cursor-pointer overflow-y-scroll scrollbar-hide w-full">
          <div
            className={
              open
                ? "bg-[#EDF2F9] dark:bg-[#0B1727] w-full"
                : "bg-[#EDF2F9] dark:bg-[#0B1727] w-3 hover:absolute hover:w-40"
            }
          >
           <DrawerItems />
          </div>
        </div>
      </motion.div>
    </>
  );
}
