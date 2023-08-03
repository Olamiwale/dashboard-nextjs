

import React from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {


  return (
    <div className="fixed left-0 h-full flex justify-center items-center  ">
      <div className="flex flex-col bg-gray-900 w-[60px] ">

        <div className=" group items-center flex flex-col rounded-md">
          <div className="bg-purple-800 text-white p-3 my-6 rounded-lg inline-block ">
            <Link href="/">
              <RxSketchLogo size={15} />
            </Link>
          </div>
        </div>

        <div className="group flex flex-col items-center">
          <p className="absolute text-white font-bold cursor-pointer opacity-0    group-hover:opacity-100">
            History
          </p>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href="/dashboard">
              <RxDashboard size={15} />
            </Link>
          </div>
        </div>
        <div className="group flex flex-col items-center">
          <p className="absolute text-white font-bold cursor-pointer opacity-0 group-hover:opacity-100">
            Account
          </p>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href="/account">
              <RxPerson size={15} />
            </Link>
          </div>
        </div>
        <div className="group flex flex-col items-center">
          <p className="absolute text-white font-bold cursor-pointer opacity-0 group-hover:opacity-100">
            Wallet
          </p>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href="/wallet">
              <HiOutlineShoppingBag size={15} />
            </Link>
          </div>
        </div>
        <div className="group flex flex-col items-center">
          <p className="absolute text-white font-bold cursor-pointer opacity-0 group-hover:opacity-100">
            Settings
          </p>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href="/settings">
              <FiSettings size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
