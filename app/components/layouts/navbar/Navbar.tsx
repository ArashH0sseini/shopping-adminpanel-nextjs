import RightSideNavbar from "./RightSideNavbar";
import LeftSideNavbar from "./LeftSideNavbar";

function Navbar() {
  return (
    <nav className="flex p-4 items-center justify-between px-8 sticky top-0">
      <LeftSideNavbar />
      <RightSideNavbar />
    </nav>
  );
}

export default Navbar;
