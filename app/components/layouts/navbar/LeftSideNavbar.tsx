import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../assets/images/falcon.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

function LeftSideNavbar() {
  return (
    <div className="flex space-x-7 items-center">
      <RxHamburgerMenu className="w-10 h-10 cursor-pointer hover:bg-slate-300 rounded-full p-[9px]" />
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="logo" width="40" height="40" />
        <span className="text-blue-500 font-bold text-3xl">falcon</span>
      </div>

      <div>
        <form
          className="flex items-center space-x-2 justify-center rounded-full py-1 px-4 
    bg-white max-w-md mx-auto border-2 border-gray-200"
        >
          <button hidden>Search</button>
          <FaSearch className="w-4 h-4 font-bold text-gray-300" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent
         placeholder:text-gray-300 text-lg font-semibold"
          />
        </form>
      </div>
    </div>
  );
}

export default LeftSideNavbar;
