import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  subtitle: string;
  image: any;
}
function ChatItem({ title, subtitle, image }: Props) {
  return (
    <div className="flex group hover:border-l-4 hover:border-green-400 cursor-pointer items-center justify-between w-full px-6 py-4 dark:bg-[#121E2D] dark:border-[#121e2d]">
      <div className="flex space-x-4 w-full">
        <div className="relative">
          <Image
            src={image}
            alt=""
            width="50"
            height="50"
            className="rounded-full"
          />
          <span className="w-3 h-3 bg-green-500 rounded-full border-2 flex absolute right-0 top-7"></span>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-gray-400 text-xs">Tue</p>
          </div>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
