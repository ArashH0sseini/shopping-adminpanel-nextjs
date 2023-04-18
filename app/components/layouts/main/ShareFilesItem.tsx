import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

interface Props {
  title: string;
  subtitle: string;
  image: any;
}

function ShareFilesItem({ title, subtitle, image }: Props) {
  return (
    <div className="flex group items-center justify-between w-full px-6 py-4 border-gray-200 dark:border-gray-800 border-b-[1px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Image
            src={image}
            alt=""
            width="36"
            height="36"
            className="rounded-md"
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold group-hover:underline">
              {title}
            </p>
            <div className="flex space-x-4">
              <p className="text-sm text-gray-500">{subtitle}</p>
              <span className="text-sm text-gray-400">just now</span>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:flex items-center justify-center space-x-2">
          <AiOutlineCloudDownload className="w-9 h-8 p-1 text-gray-600 bg-gray-100 dark:bg-[#0B1727] dark:text-gray-400 dark:border-gray-700 rounded-sm border-2" />
          <CiEdit className="w-9 h-8 p-1 text-gray-600 bg-gray-100 dark:bg-[#0B1727] dark:text-gray-400 dark:border-gray-700 rounded-sm border-2" />
        </div>
      </div>
    </div>
  );
}

export default ShareFilesItem;
