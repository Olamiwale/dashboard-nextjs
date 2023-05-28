import React from "react";
import { RxPerson } from "react-icons/rx";

export default function Account() {
  return (
    <div className="p-8 w-full">
      <div className="bg-gray-300 p-8 shadow-lg rounded-md flex justify-start items-center w-[500px] m-auto">
        <div className="w-[200px] h-[200px] items-center flex justify-center bg-gray-400 boarder shadow-lg rounded-full ">
          <RxPerson size={60} />
        </div>

        <div className="px-8">
          <p className="text-2xl py-2">John Stone</p>
          <p className="font-bold py-2">Nigeria</p>
          <p className="font-bold py-2">Johnstone@mail.com</p>
        </div>
      </div>
      <div className="my-8">
        <p className="text-2xl font-bold ">About</p>

        <p className="py-8">Education</p>
        <p className="py-8">Skills</p>
      </div>
    </div>
  );
}
