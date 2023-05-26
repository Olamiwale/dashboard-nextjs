import React from 'react'
import { data } from './data/data'
import { FaShoppingBag } from 'react-icons/fa';

export default function RecentOrder() {
  return (
    <div className='w-[300px] max-md:w-[400px] flex justify-center bg-gray-400 p-5 rounded-lg h-[450px] overflow-y-scroll'>
        
       
        
        <ul className='w-full'>
            {data.map((order,id)=>(
                <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
              >
                <div className='bg-purple-100 rounded-lg p-3'>
                  <FaShoppingBag className='text-purple-800' />
                </div>
                <div className='pl-4'>
                    <div className='flex space-x-2'>
                        <p className='text-gray-800 text-sm font-semibold'>{order.name.first}</p>
                        <p className='text-gray-400 text-sm'>{order.name.last}</p>
                    </div>
                   

                   <div className='flex items-center space-x-10'>
                     <p className='text-gray-800 font-bold text-[15px]'>${order.total}</p>
                     <p className=' text-[10px]'>{order.date}</p>
                     
                         
                   </div> 
                 
                  
                </div>
            
              </li>
            ))}
        </ul>
    </div>
  )
}

