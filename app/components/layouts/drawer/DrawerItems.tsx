import {
  BsFillCalendarEventFill,
  BsFillKanbanFill,
  BsFillPinFill,
} from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChartLine,
  FaChartPie,
  FaFire,
  FaFlag,
  FaGulp,
  FaLayerGroup,
  FaLock,
  FaMap,
  FaPalette,
  FaPuzzlePiece,
  FaQuestionCircle,
  FaRocket,
  FaShoppingCart,
  FaTable,
  FaUser,
} from "react-icons/fa";
import { HiDocumentText, HiMailOpen } from "react-icons/hi";
import { MdWidgets } from "react-icons/md";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoShareSocialSharp, IoWarning } from "react-icons/io5";
import { TbIcons, TbWorld } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { DiGitBranch } from "react-icons/di";
import { AiFillTool } from "react-icons/ai";
import DrawerDivider from "./DrawerDivider";
import DrawerItem from "./DrawerItem";
import DrawerMenuDropdownClose from "./DrawerMenuDropdownClose";
import DrawerMenuDropdownOpen from "./DrawerMenuDropdownOpen";

function DrawerItems() {
  return (
    <>
      {/* Dashboard Section */}
      <DrawerMenuDropdownOpen title="Dashboard" icon={<FaChartPie />} />

      {/* App Section */}
      <DrawerDivider title="App" />
      <DrawerItem title="Calender" icon={<FaCalendarAlt />} />
      <DrawerItem title="Chat" icon={<HiChatBubbleLeftRight />} />
      <DrawerMenuDropdownClose title="Email" icon={<HiMailOpen />} items={[404,500]} />
      <DrawerMenuDropdownClose
        title="Evants"
        icon={<BsFillCalendarEventFill />}
        items={[404,500]}
      />
      <DrawerMenuDropdownClose title="E commerce" icon={<FaShoppingCart />} items={[404,500]} />
      <DrawerItem title="Kanban" icon={<BsFillKanbanFill />} />
      <DrawerMenuDropdownClose title="Social" icon={<IoShareSocialSharp />} items={[404,500]} />

      {/* Pages Section */}
      <DrawerDivider title="Pages" />
      <DrawerItem title="Starter" icon={<FaFlag />} />
      <DrawerItem title="Landing" icon={<TbWorld />} />
      <DrawerMenuDropdownClose title="Authentication" icon={<FaLock />} items={[404,500]} />
      <DrawerMenuDropdownClose title="User" icon={<FaUser />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Pricing" icon={<IoMdPricetags />} items={[404,500]} />
      <DrawerItem title="Faq" icon={<FaQuestionCircle />} />
      <DrawerMenuDropdownClose title="Errors" icon={<IoWarning />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Miscellaneous" icon={<BsFillPinFill />} items={[404,500]} />

      {/* Modules Section */}
      <DrawerDivider title="Modules" />
      <DrawerItem title="Forms" icon={<HiDocumentText />} />
      <DrawerItem title="Tables" icon={<FaTable />} />
      <DrawerMenuDropdownClose title="Charts" icon={<FaChartLine />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Icons" icon={<TbIcons />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Maps" icon={<FaMap />} items={[404,500]} />
      <DrawerItem title="Components" icon={<FaPuzzlePiece />} />
      <DrawerMenuDropdownClose title="Utilities" icon={<FaFire />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Widgets" icon={<MdWidgets />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Multi level" icon={<FaLayerGroup />} items={[404,500]} />

      {/* Document Section */}
      <DrawerDivider title="Document" />
      <DrawerItem title="Getting started" icon={<FaRocket />} />
      <DrawerItem title="Customaization" icon={<AiFillTool />} />
      <DrawerItem title="Gulp" icon={<FaGulp />} />
      <DrawerMenuDropdownClose title="Design file" icon={<FaPalette />} items={[404,500]} />
      <DrawerMenuDropdownClose title="Changelog" icon={<DiGitBranch />} items={[404,500]} />
    </>
  );
}

export default DrawerItems;
