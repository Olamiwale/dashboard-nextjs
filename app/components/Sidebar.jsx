import React from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className=" py-16 fixed h-full mr-2 bg-gray-900 justify-center w-[80px]">

      <div>

        <div className="flex flex-col items-center mt-[100px]">
          <div className="bg-purple-800 text-white p-3 my-6 rounded-lg inline-block ">
            <Link href='/'>
             <RxSketchLogo size={20} />
            </Link> 
          </div>

         

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href='/dashboard'>
             <RxDashboard size={20} />
            </Link>
           
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href='/account'>
             <RxPerson size={20} />
            </Link>
           
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            
            <Link href='/wallet'>
             <HiOutlineShoppingBag size={20} />
            </Link>
           
          </div>

          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block">
            <Link href='/settings'>
             <FiSettings size={20} />
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
