'use client'


import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import RecentOrder from './RecentOrder';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
    
      useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4',
                  }, 
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
      }, [])
  return(  
  
  <div className='mt-16 p-4 flex gap-8 max-md:flex-col '>

  <div className='col-span-3 w-full md:col-span-2 h-full m-auto p-8 border rounded-lg bg-white'>
    <Bar data={chartData} options={chartOptions} />
   
  </div>

  <div className='flex justify-center'>
  <RecentOrder />
  </div>


</div>
  )
}
