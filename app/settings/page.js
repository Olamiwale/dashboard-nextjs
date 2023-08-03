'use client'
import React, { useState } from 'react'

export default function page() {

  
  return (
    <div className='py-20'>
      <div className='px-[50px]'>
        <div className='flex justify-between p-4'>
             <p className='text-xl font-bold max-sm:text-[12px]'>Change Background Color</p>
             <button className='rounded-lg bg-gray-300 p-4 hover:shadow-lg cursor-pointer'>Change</button>
        </div>
        <div className='flex justify-between p-4'>
             <p className='text-xl font-bold max-sm:text-[12px]'>Change Currency</p>
             <button className='rounded-lg bg-gray-300 p-4 hover:shadow-lg cursor-pointer'>Change</button>
        </div>
        <div className='flex justify-between p-4'>
             <p className='text-xl font-bold max-sm:text-[12px]'>Change Details</p>
             <button className='rounded-lg bg-gray-300 p-4 hover:shadow-lg cursor-pointer'>Change</button>
        </div>
        <div className='flex justify-between p-4'>
             <p className='text-xl font-bold max-sm:text-[12px]'>Reset All</p>
             <button className='rounded-lg bg-gray-300 p-4 hover:shadow-lg cursor-pointer'>Change</button>
        </div>
     
        
      </div>

      
    </div>
  )
}
