import React from 'react'
import BarChart from '../Components/Charts/BarChart'
import DoughnutCharts from '../Components/Charts/DoughnutChart'
import LineChart from '../Components/Charts/LineChart'

const ChartPage = () => {
  return (
    <div className='max-w-screen-sm m-auto px-4 py-4'>
        <BarChart></BarChart>
        <div className='w-36 h-36'>
          <DoughnutCharts></DoughnutCharts>

        </div>
        <LineChart></LineChart>
    </div>
  )
}

export default ChartPage