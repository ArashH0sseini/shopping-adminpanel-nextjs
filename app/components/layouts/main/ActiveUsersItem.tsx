import Image from 'next/image';
import React from 'react'
interface Props {
    title: string;
    subtitle: string;
    image: any;
  }

function ActiveUsersItem({title,subtitle,image}:Props) {
  return (
    <div className="flex group items-center justify-between w-full px-6 py-4 border-gray-200 border-b-[1px]">
    <div className="flex space-x-4">
      <div className='relative'>
      <Image src={image} alt="" width="40" height="40" className="rounded-full" />
      <span className='w-4 h-4 bg-green-500 rounded-full border-2 flex absolute right-0 top-7'></span>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold group-hover:underline">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
  )
}

export default ActiveUsersItem