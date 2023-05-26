import React from 'react'

export default function TopCard() {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 max-sm:flex flex-col'>
     <div className='bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$7,846</p>
            <p>Daily Revenue</p>
        </div>
        <p className='bg-green-300 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18%</span>
        </p>
    </div>

    <div className=' bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg'>
        <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-bold'>$1,437,876</p>
            <p>YTD Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+11%</span>
        </p>
    </div>

    <div className='bg-white flex justify-between items-center w-full border p-4 rounded-lg shadow-lg'>
        
        <div className='flex flex-col w-full'>
            <p className='text-2xl font-bold'>11,437</p>
            <p>Customers</p>
        </div>
        <div>
           <p className='bg-green-200 flex justify-center items-center p-3 rounded-lg'>
             <span className='text-green-700 text-lg'>+17%</span>
           </p> 
        </div>
        
    </div>

</div>
  )
}
