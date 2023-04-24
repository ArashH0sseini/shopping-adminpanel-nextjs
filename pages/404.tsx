import React from "react";
import Logo from "@/app/assets/images/falcon.png";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="logo" width="60" height="60" />
        <span className="text-blue-500 font-bold text-5xl">falcon</span>
      </div>
      <div className="bg-white w-[600px] h-[500px] flex flex-col items-center justify-center rounded-lg shadow-md px-14">
        <h2 className="text-[160px] text-slate-300 font-bold">404</h2>
        <p className="text-gray-700 font-bold text-xl">
          The page you're looking for is not found.
        </p>
        <hr className="w-full m-6" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 font-normal text-center">
            Make sure the address is correct and that the page hasn't moved. If
            you think this is a mistake,{" "}
            <Link className="text-blue-500" href="/">
              contact us
            </Link>
            .
          </p>
          <Link
            href="/"
            className="bg-blue-500 py-1 px-4 text-white rounded-sm my-8"
          >
            <div className="flex items-center space-x-2">
              <FaHome />
              <span className="font-medium">Take me home</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
