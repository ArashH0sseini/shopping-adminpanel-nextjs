import React from "react";
import Logo from "@/app/assets/images/falcon.png";
import Image from "next/image";
import Link from "next/link";

function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="logo" width="60" height="60" />
        <span className="text-blue-500 font-bold text-5xl">falcon</span>
      </div>
      <div className="bg-white w-[600px] h-[400px] flex flex-col items-center justify-center rounded-lg shadow-md px-14">
        <h2 className="text-[160px] text-slate-300 font-bold">500</h2>
        <p className="text-gray-700 font-bold text-xl">
          Whoops, something went wrong!
        </p>
        <hr className="w-full m-6" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 font-normal text-center mb-20">
            Try refreshing the page, or going back and attempting the action
            again. If this problem persists, {" "}
            <Link className="text-blue-500" href="/">contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Custom500;
