import React from "react";
import Logo from "@/app/assets/images/falcon.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { RxHamburgerMenu } from "react-icons/rx";
import { drawerState } from "@/atoms/drawerAtom";
import { menuState } from "@/atoms/menuAtom";
import { dropDownState } from "@/atoms/dropDownAtom";

function LeftSideNavbar() {
  const [openDrawer, setDrawerOpen] = useRecoilState(drawerState);
  const [openMenu, setMenuOpen] = useRecoilState(menuState)
  const [dropDwon, setDropDwonOpen] = useRecoilState(dropDownState)


  return (
    <div className="flex relative lg:space-x-10 items-center">
      {openDrawer ? (
        <RxHamburgerMenu
          onClick={() => {
            setDrawerOpen(false)
            setDropDwonOpen(false)
          }}
          className="absolute -left-3 hidden lg:flex text-gray-700 dark:text-gray-400 w-10 h-10 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full p-[9px]"
        />
      ) : (
        <HiOutlineMenuAlt1
          onClick={() => {
            setDrawerOpen(true)
            setDropDwonOpen(true)
          }}
          className="absolute -left-3 hidden lg:flex text-gray-700 dark:text-gray-400 w-10 h-10 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full p-[9px]"
        />
      )}
      <RxHamburgerMenu onClick={() => {
        setMenuOpen(!openMenu)
        setDropDwonOpen(true)
      }} className="flex lg:hidden mr-4 text-gray-700 dark:text-gray-400 w-10 h-10 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full p-[9px]" />
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="logo" width="40" height="40" />
        <span className="text-blue-500 font-bold text-3xl">falcon</span>
      </div>

      <div className="hidden lg:flex">
        <form
          className="flex items-center space-x-2 justify-center rounded-full py-1 px-4 
    bg-white dark:bg-[#0B1727] w-80 mx-auto border-2 border-gray-200 dark:border-gray-800"
        >
          <button hidden>Search</button>
          <FaSearch className="w-4 h-4 font-bold text-gray-300 dark:text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent
         placeholder:text-gray-300 dark:placeholder:text-gray-400 text-lg font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default LeftSideNavbar;
