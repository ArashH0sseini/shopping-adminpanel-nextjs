import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  price: string;
  percent: string;
  subtitle: string;
  image: any;
}

function BestSellingProductsItem({
  title,
  percent,
  price,
  subtitle,
  image,
}: Props) {
  return (
    <div className="flex group items-center justify-between w-full px-6 py-4 border-gray-200 border-b-[1px]">
      <div className="flex space-x-4">
        <Image src={image} alt="" width="60" height="40" className="rounded-sm" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold group-hover:underline">{title}</p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <p className="text-sm w-10">{price}</p>
        <div className="relative bg-blue-100 w-20 h-[5px] flex rounded-full">
          <span
            style={{ width: `${percent}` }}
            className="absolute top-0 left-0 bg-blue-600 h-[5px] flex rounded-full"
          ></span>
        </div>
        <p className="text-sm w-5">{percent}</p>
      </div>
    </div>
  );
}

export default BestSellingProductsItem;
