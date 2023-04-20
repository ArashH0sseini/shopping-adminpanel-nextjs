import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import Avatar from "../../../assets/images/avatar.png";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";

export default function AccountMenu() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={Avatar}
              className="cursor-pointer"
              alt="avatar"
              objectFit="cover"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <div className="flex space-x-2 cursor-pointer px-4 my-2 py-1 group w-full items-center text-orange-500 hover:bg-slate-100 text-sm font-bold">
                  <FaCrown className="w-5 h-5" />
                  <button>Go Pro</button>
                </div>
              </Menu.Item>
            </div>
            <div className="py-1 mb-2">
              <Menu.Item>
                <button className="flex space-x-2 px-4 py-1 group w-full items-center text-gray-800 hover:bg-slate-100 text-sm font-semibold">
                  Set status
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="flex space-x-2 px-4 py-1 group w-full items-center text-gray-800 hover:bg-slate-100 text-sm font-semibold">
                  Profile & acccount
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="flex space-x-2 px-4 py-1 group w-full items-center text-gray-800 hover:bg-slate-100 text-sm font-semibold">
                  Feedback
                </button>
              </Menu.Item>
            </div>
            <div className="py-1 mb-2">
              <Menu.Item>
                <button className="flex space-x-2 px-4 py-1 group w-full items-center text-gray-800 hover:bg-slate-100 text-sm font-semibold">
                  Settings
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className="flex space-x-2 px-4 py-1 group w-full items-center text-gray-800 hover:bg-slate-100 text-sm font-semibold">
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
