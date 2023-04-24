import Drawer from "@/app/components/layouts/drawer/Drawer";
import Menu from "@/app/components/layouts/drawer/DrawerMenu";
import Navbar from "@/app/components/layouts/navbar/Navbar";
import '../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { menuState } from "@/atoms/menuAtom";
import { dropDownState } from "@/atoms/dropDownAtom";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import BigCalendar from "react-big-calendar";

// const localizer = BigCalendar.momentLocalizer(moment);

function Calender() {
  const [open, setOpen] = useRecoilState(menuState);
  const [openDropDown, setDropDownOpen] = useRecoilState(dropDownState);

  const isLgUp = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    setOpen(false);
    setDropDownOpen(false);
  }, [isLgUp]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        {open ? <Menu /> : null}
        <Drawer />
        {/* <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        /> */}
      </div>
    </div>
  );
}

export default Calender;
