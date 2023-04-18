import React from "react";
import { HiChevronRight } from "react-icons/hi";
import DotsMenu from "../../common/DotsMenu";
import ActiveUsersItem from "./ActiveUsersItem";
import Avatar1 from '../../../assets/images/1.jpg'
import Avatar2 from '../../../assets/images/2.jpg'
import Avatar3 from '../../../assets/images/3.jpg'
import Avatar4 from '../../../assets/images/4.jpg'
import Avatar5 from '../../../assets/images/5.jpg'

function ActiveUsers() {
  return (
    <div className="flex items-center justify-between rounded-md shadow-xl bg-gray-100 dark:bg-[#162231] border-[1px] border-gray-200 dark:border-[#121e2d]">
      <div className="w-full">
        <div className="flex justify-between items-center px-6 py-2">
          <h3 className="text-sm font-medium">Active Users</h3>
          <DotsMenu />
        </div>
        <div className="bg-white cursor-pointer">
            <ActiveUsersItem title="Emma Watson" subtitle="Admin" image={Avatar1} />
            <ActiveUsersItem title="Antony Hopkins" subtitle="Moderator" image={Avatar2} />
            <ActiveUsersItem title="Anna Karinina" subtitle="Editor" image={Avatar3} />
            <ActiveUsersItem title="John Lee" subtitle="Admin" image={Avatar4} />
            <ActiveUsersItem title="Rowen Atkinson" subtitle="Editor" image={Avatar5} />
        </div>
        <div className="flex items-center justify-center p-2 cursor-pointer">
          <p className="text-blue-500 hover:underline text-base">All active users</p>
          <HiChevronRight className="text-blue-500 font-bold w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
