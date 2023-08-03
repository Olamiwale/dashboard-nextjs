'use client'

import React, {useState} from "react";
import Menubar from '../components/Menubar'
import {AiFillBook, AiOutlineClose} from 'react-icons/ai'


export default function Header() {

  const [nav, SetNav] = useState(true)

  const toggle = () =>{
    SetNav(!nav)
  }

  return (
    <div className="shadow-lg p-4 bg-gray-300 ">
      <div className="w-full flex justify-between items-center px-4 pt-4 text-1xl font-bold">
        <AiFillBook size={30} onClick={toggle} /> 

       

        <div className="h-full justify-center items-center">
           {nav ?  <Menubar /> : ""}
        </div>

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
