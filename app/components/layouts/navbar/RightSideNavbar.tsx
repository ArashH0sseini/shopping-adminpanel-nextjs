import Avatar from "../../../assets/images/avatar.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import { FaShoppingCart, FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { useTheme } from "next-themes";

function RightSideNavbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center space-x-5">
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className=""
      >
        {theme == "dark" ? (
          <FaSun className="w-8 h-8 text-yellow-400 bg-gray-800 hover:bg-gray-700 cursor-pointer p-2 rounded-full" />
          ) : (
          <FaMoon className="w-8 h-8 text-blue-600 bg-blue-100 hover:bg-slate-300 cursor-pointer p-2 rounded-full" />
        )}
      </button>
      {/* <ReactTooltip
          anchorId="second-app-title"
          place="left"
          content="Switch to dark"
        /> */}
      <div className="relative">
        <FaShoppingCart className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
        <span className="absolute text-xs -top-1 -right-1 w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center">
          1
        </span>
      </div>
      <div className="relative">
        <BsFillBellFill className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer" />
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
  );
}

export default RightSideNavbar;
