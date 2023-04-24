import Drawer from "@/app/components/layouts/drawer/Drawer";
import Menu from "@/app/components/layouts/drawer/DrawerMenu";
import Navbar from "@/app/components/layouts/navbar/Navbar";
import { menuState } from "@/atoms/menuAtom";
import { dropDownState } from "@/atoms/dropDownAtom";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import Avatar from "../app/assets/images/avatar.png";
import {
  FaArchive,
  FaCheck,
  FaEdit,
  FaInfo,
  FaPhone,
  FaSearch,
  FaTrashAlt,
  FaVideo,
} from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import ChatItem from "@/app/components/layouts/chat/ChatItem";
import Image from "next/image";

function Chat() {
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
        <div className="bg-white w-full grid grid-cols-4 rounded-md m-5 mx-10 ">
          <div className="border-r-[1px] flex flex-col items-center">
            <div className="border-b-[1px] w-full pb-4 overflow-y-scroll h-[738px]">
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
              <ChatItem
                title="Antony Hopkins"
                subtitle="Antony sent 6 photos"
                image={Avatar}
              />
            </div>
            <div className="flex items-center space-x-2 p-2 w-full px-4">
              <FaSearch className="w-3 h-3 font-bold text-gray-400 dark:text-gray-600" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="flex-1 outline-none bg-transparent
                placeholder:text-gray-400 dark:placeholder:text-gray-400 text-sm font-medium"
              />
            </div>
          </div>
          <div className="col-span-3 w-full h-full">
            <div className="flex w-full justify-between items-center border-b-[1px]">
              <div className="p-2">
                <h2 className="font-semibold">Antony Hopkins</h2>
                <span className="text-gray-400 text-xs">Active On Chat</span>
              </div>
              <div className="flex space-x-2 px-4">
                <FaPhone className="shadow-sm p-2 w-12 h-8 cursor-pointer border-2 rounded-md text-blue-500" />
                <FaVideo className="shadow-sm  p-2 w-12 h-8 cursor-pointer border-2 rounded-md text-blue-500" />
                <FaInfo className="shadow-sm p-2 w-12 h-8 cursor-pointer border-2 rounded-md text-blue-500" />
              </div>
            </div>
            <div className="border-b-[1px]">
              <div className="flex space-x-4 p-4">
                <Image
                  src={Avatar}
                  alt=""
                  width="40"
                  height="40"
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-semibold">Antony Hopkins</p>
                  <p className="text-sm text-gray-400">
                    You friends with Joe Bempsie. Say hi to start the
                    conversation
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[599px] overflow-scroll border-b-[1px]">
              <p className="text-center text-gray-400 text-xs p-4">
                May 5, 2019, 11:54 am
              </p>
              <div className="flex flex-col w-full p-4">
                <div className="flex group">
                  <div>
                    <Image
                      src={Avatar}
                      alt=""
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-slate-200 text-gray-500 text-sm p-2 mx-2 rounded-md max-w-xl">
                    <p>
                      Yes, in an organization stature, this is a must. Besides,
                      we need to quickly establish all other professional
                      appearances, e.g., having a website where members’ profile
                      will be displayed along with additional organizational
                      information. Providing services to existing members is
                      more important than attracting new members at this moment,
                      in my opinion..
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white group-hover:text-gray-300">
                    <RiShareForwardFill className="hover:text-blue-500 cursor-pointer" />
                    <FaArchive className="hover:text-blue-500 cursor-pointer" />
                    <FaEdit className="hover:text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <p className="px-10 text-gray-400 text-xs p-2">11:54 am</p>
              </div>
              <div className="flex flex-col w-full p-4">
                <div className="flex group">
                  <div>
                    <Image
                      src={Avatar}
                      alt=""
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-slate-200 text-gray-500 text-sm p-2 mx-2 rounded-md max-w-xl">
                    <p>What are you doing?</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white group-hover:text-gray-300">
                    <FaTrashAlt className="hover:text-blue-500 cursor-pointer" />
                    <FaEdit className="hover:text-blue-500 cursor-pointer" />
                    <FaArchive className="hover:text-blue-500 cursor-pointer" />
                    <RiShareForwardFill className="hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <p className="px-10 text-gray-400 text-xs p-2">11:54 am</p>
              </div>
              <div className="flex flex-col items-end justify-center w-full p-4">
                <div className="flex flex-row-reverse group">
                  <div className="bg-blue-500 text-white text-sm p-2 mx-2 rounded-md max-w-xl">
                    <p>Nothing!</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white group-hover:text-gray-300">
                    <RiShareForwardFill className="hover:text-blue-500 cursor-pointer" />
                    <FaArchive className="hover:text-blue-500 cursor-pointer" />
                    <FaEdit className="hover:text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center p-2 space-x-2">
                  <p className=" text-gray-400 text-xs">11:54 am</p>
                  <FaCheck className="text-green-400 text-xs" />
                </div>
              </div>
              <div className="flex flex-col items-end justify-center w-full p-4">
                <div className="flex flex-row-reverse group">
                  <div className="bg-blue-500 text-white text-sm p-2 mx-2 rounded-md max-w-xl">
                    <p>i took pictures</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white group-hover:text-gray-300">
                    <RiShareForwardFill className="hover:text-blue-500 cursor-pointer" />
                    <FaArchive className="hover:text-blue-500 cursor-pointer" />
                    <FaEdit className="hover:text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center p-2 space-x-2">
                  <p className=" text-gray-400 text-xs">11:54 am</p>
                  <FaCheck className="text-green-400 text-xs" />
                </div>
              </div>

              <p className="text-center text-gray-400 text-xs p-4">
                May 5, 2019, 11:54 am
              </p>
              <div className="flex flex-col w-full p-4">
                <div className="flex group">
                  <div>
                    <Image
                      src={Avatar}
                      alt=""
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                  </div>
                  <div className="bg-slate-200 text-gray-500 text-sm p-2 mx-2 rounded-md max-w-xl">
                    <p>How are you?</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white group-hover:text-gray-300">
                    <RiShareForwardFill className="hover:text-blue-500 cursor-pointer" />
                    <FaArchive className="hover:text-blue-500 cursor-pointer" />
                    <FaEdit className="hover:text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="hover:text-blue-500 cursor-pointer" />
                  </div>
                </div>
                <p className="px-10 text-gray-400 text-xs p-2">11:54 am</p>
              </div>
            </div>

            <div className="flex items-center p-2">
              <input
                type="text"
                placeholder="Type your message"
                className="flex-1 outline-none bg-transparent
                    placeholder:text-gray-400 dark:placeholder:text-gray-400 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
