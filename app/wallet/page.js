import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../components/data/data";
import Header from "../components/Header";

export default function wallet() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 bg-red-400 items-center justify-between cursor-pointer">
            <span className="font-bold">Order</span>
            <span className="font-bold ">Status</span>
            <span className="hidden md:flex font-bold ">Time</span>
            <span className="hidden sm:flex ">Method</span>
          </div>

          {data.map((order, id) => (
            <li
              key={id}
              className="bg-gray-300 hover:bg-gray-500 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
            >
              <div className="flex">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FaShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 font-bold">${order.total}</p>
                  <p className="text-gray-800 text-sm">{order.name.first}</p>
                </div>
              </div>

              <p className="text-gray-600">
                <span
                  className={
                    order.status == "Processing"
                      ? "bg-green-200 p-2 rounded-lg"
                      : order.status == "Completed"
                      ? "bg-blue-200 p-2 rounded-lg"
                      : "bg-yellow-200 p-2 rounded-lg"
                  }
                >
                  {order.status}
                </span>
              </p>

              <p className="hidden md:flex">{order.date}</p>
              <div className="sm:flex hidden justify-between items-center">
                <p>{order.method}</p>
                <div>
                   <BsThreeDotsVertical />
                </div>
               
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
