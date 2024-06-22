import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    
} from 'chart.js'
const BarChart = () => {
    ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
    let data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        datasets: [
            {
                label: "red",
                data: [6, 5, 4, 6, 7, 7, 7],
                pointRadius: 0,
                // borderWidth:1,
                // fill: false,
                backgroundColor: "#ED0006",
                // borderColor: 'black',
            },
            {
                label: "yellow",
                data: [8,7,9,7,10,10,10],
                fill: false,
                backgroundColor: "#FFCF00",
                borderColor: 'black',
            }
        ]
    };
    let options = {
        scales: {
            x: {
                display:true,
                grid: {
                    display: false,
                },
            },
            y: {
                display:false,
                grid: {
                    display: false,
                },
                beginAtZero: true,
            },
        },
        borderRadius: 5,
        plugins:{
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                // callbacks: {
                //     label: (tooltipItem, data) => {
                //         return '';
                //     },
                // },
            },
        },
        // interaction: {
        //     mode: 'index', // Make sure hover events still trigger
        // },
    }
    return (
        <div 
            // className='max-w-screen-sm m-auto px-4 py-4'
        >
            <Bar data={data} options={options}></Bar>
        </div>
    )
}

export default BarChart