import React from "react";


export default function Header() {
  return (
    <div className="shadow-lg p-4">
      <div className="w-full  flex justify-between px-4 pt-4 text-1xl font-bold">
        <h2>Dashboard</h2>
        <div className="flex items-center">
            <h2>Account Name</h2> 
            <div className="ml-4 w-[40px] h-[40px] bg-gray-400 rounded-full flex justify-center items-center">
            <p>AA</p>
            </div>
        </div>
             
      </div>
    </div>
  );
}
