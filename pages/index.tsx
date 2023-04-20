import Drawer from "@/app/components/layouts/drawer/Drawer";
import Menu from "@/app/components/layouts/drawer/DrawerMenu";
import { Main } from "@/app/components/layouts/main";
import Navbar from "@/app/components/layouts/navbar/Navbar";
import { menuState } from "@/atoms/menuAtom";
import { dropDownState } from "@/atoms/dropDownAtom";
import { Inter } from "next/font/google";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [open, setOpen] = useRecoilState(menuState);
    const [openDropDown, setDropDownOpen] = useRecoilState(dropDownState);

    const isLgUp = useMediaQuery({
      query: "(min-width: 1024px)",
    });
  
    useEffect(() => {
      setOpen(false)
      setDropDownOpen(false)
    }, [isLgUp])


  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        {open ? <Menu /> : null}
        <Drawer />
        <Main />
      </div>
    </div>
  );
}
