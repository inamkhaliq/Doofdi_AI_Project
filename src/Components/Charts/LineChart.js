import React from 'react'
import { Chart as ChartJs, 
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Ticks, 
    scales 
} from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
    let data={
        labels:["1","5","1","1","2","2","3"],
        datasets:[
            {
                label:"",
                data:[2,6,3,12,10,8,7],
                borderColor:"red",
                // borderCapStyle:"dash",
                // borderDash:[26],
                // borderDashOffset:10,
                borderWidth:1,
                fill:true,
                tension:0.4
            },
            {
                label:"",
                data:[1,6,5],
                fill:true,
            },
        ]
    }
    let option={
        title:{
            display:true
        },
        indexAxis:'x',
        plugins:{
            legend: {
                display: false
            },
        },
        scales:{
            x:{
                display:true,
                grid:{
                    display:false,
                },
                ticks:{
                    min:0,
                    max:10,
                    stepSize:1,
                    beginAtZero:true,
                }
            },
            y:{
                display:false,
                grid:{
                    display:true,
                }
            }
        }
    }
  return (
    <div className=''>
        <Line data={data} options={option}/>
    </div>
  )
}

export default LineChart