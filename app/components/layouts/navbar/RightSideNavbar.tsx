import Avatar from "../../../assets/images/avatar.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import { FaShoppingCart, FaMoon, FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

function RightSideNavbar() {
  return (
    <div className="flex items-center space-x-5">
        <FaMoon
          id="second-app-title"
          className="w-8 h-8 text-blue-600 bg-blue-100 hover:bg-slate-300 cursor-pointer p-2 rounded-full"
        />
        {/* <ReactTooltip
          anchorId="second-app-title"
          place="left"
          content="Switch to dark"
        /> */}
        <div className="relative">
          <FaShoppingCart className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <span className="absolute text-xs -top-1 -right-1 w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <div className="relative">
          <BsFillBellFill className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <span className="absolute text-xs -top-1 -right-1 w-4 h-4 border-2 border-[#EDF2F9] bg-blue-500 text-white rounded-full flex items-center justify-center"></span>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={Avatar}
            className="cursor-pointer"
            alt="avatar"
            objectFit="cover"
          />
        </div>
      </div>
  )
}

export default RightSideNavbar