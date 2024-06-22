import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCharts = () => {
    const data={
        labels:[],
        datasets:[
            {
                label:"poll",
                data:[75],
                backgroundColor:["#97E491"],
                borderWidth:3,
                borderColor:["white"],
                circumference:(cr)=>cr.dataset.data[0]/75*270,
            },
            {
                label:"poll",
                data:[65],
                backgroundColor:["#A09AFD"],
                borderWidth:3,
                borderColor:["white"],
                circumference:(cr)=>cr.dataset.data[0]/75*270,
                
            },
            {
                label:"poll",
                data:[60],
                borderWidth:3,
                borderColor:["white"],
                backgroundColor:["#FF9A9D"],
                circumference:(cr)=>cr.dataset.data[0]/75*270,
            },
            {
                label:"poll",
                data:[55],
                borderWidth:3,
                borderColor:["white"],
                backgroundColor:["#FFCC72"],
                circumference:(cr)=>cr.dataset.data[0]/75*270,
            },
        ],
    }
    const options={
        // cutout:"70%",
        borderRadius: 50,
        
    }
    const doughnutlabel={
        id:"doughnutLabel",
        afterDatasetsDraw(chart,args,plugins){
            const {ctx,data}=chart;
            const corX=chart.getDatasetMeta(0).data[0].x;
            const corY=chart.getDatasetMeta(0).data[0].y;
            ctx.save();
            ctx.font="bold 15px sans-serif";
            ctx.fillStyle="#E9E9E9";
            ctx.textAlign="center";
            ctx.textBaseline="middle";
            ctx.fillText("174k",corX,corY-10)
            
            ctx.font="10px sans-serif";
            ctx.fillStyle="#8A8A8A";
            ctx.fillText("Views",corX,corY+10)
        },
    }
  return (
    
    <Doughnut data={data} width={138} height={138} options={options} plugins={[doughnutlabel]}/>
    
  )
}

export default DoughnutCharts