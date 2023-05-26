import React from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className=" py-16 h-full mr-2 bg-gray-900 justify-center">

      <div>

        <div className="flex flex-col items-center">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>

          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <Link href='/board'>
             <RxDashboard size={20} />
            </Link>
           
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <RxPerson size={20} />
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <HiOutlineShoppingBag size={20} />
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <FiSettings size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
