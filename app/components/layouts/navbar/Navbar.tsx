import RightSideNavbar from "./RightSideNavbar";
import LeftSideNavbar from "./LeftSideNavbar";

function Navbar() {
  return (
    <nav className="flex z-20 p-4 items-center justify-between px-8 sticky top-0 bg-[#EDF2F9] dark:bg-[#0B1727]">
      <LeftSideNavbar />
      <RightSideNavbar />
    </nav>
  );
}

export default Navbar;
