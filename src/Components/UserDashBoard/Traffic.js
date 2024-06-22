import React from 'react'
import FilterFilledIcon from '../../Assets/FilterFilledIcon.svg'
import SearchIcon from '../../Assets/SearchIcon.svg'
import FilterSvg from '../../Assets/FilterSvg.svg'
import GreenDot from '../../Assets/greenDot.svg'
import PinkDot from '../../Assets/PinkDot.svg'
import PurpleDot from '../../Assets/PurpleDot.svg'
import OrangeDot from '../../Assets/OrangeDot.svg'
import graphdata from '../../Assets/LineChart.svg'
import { Link, useParams } from 'react-router-dom'
import TrafficTable from '../Table/TrafficTable'
import BarChart from '../Charts/BarChart'
import DoughnutCharts from '../Charts/DoughnutChart'

const Traffic = () => {
    let Campaigns = [
        {
            Name:"askaritechnologies.com",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"20 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        {
            Name:"netfilix.net",
            Traffic_Source:"Social Media",
            Page_Views:"500K",
            Session_Duration:"12 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Desktop",
            Top_Pages:"Product Page",
        },
        {
            Name:"behance.net",
            Traffic_Source:"Organic Search",
            Page_Views:"500K",
            Session_Duration:"22 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Tablet",
            Top_Pages:"Contact Us",
        },
        {
            Name:"facebook.com",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"2 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        {
            Name:"instagram",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"2 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        {
            Name:"Youtube.com",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"2 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        {
            Name:"figma.com",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"2 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        {
            Name:"fiverr.com",
            Traffic_Source:"Direct",
            Page_Views:"500K",
            Session_Duration:"2 minutes",
            Bounce_Rates:"30%",
            Device_Breakdown:"Mobile",
            Top_Pages:"Home Page",
        },
        
    ]
    let Cards_data = [
        {
            name: "Total Active Campaign",
            Count: "15",
            Type: "Active Campaigns",
            Message: "Campaigns Currently Live",
        },
        {
            name: "Traffic",
            Count: "500k",
            Type: "Page Views",
            graph: graphdata,
            Message: "Total page views in the last 30 days",
        },
        {
            name: "Engagements",
            Count: "20k",
            Type: "Clicks",
            Message: "Clicks on posts in the last 30 days",
        },
    ]
    let Engagements_Campaigns=[
        {
            Title:"Blog Post A",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"Video B",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"Infographic C",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"facebook.com",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"instagram",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"Youtube.com",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"figma.com",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
        {
            Title:"fiverr.com",
            Clicks:"100k",
            Likes:"10k",
            Shares:"25k",
            Comments:"5k",
            Engagement_Rate:"30%",
        },
    ]
    let { tool } = useParams()
    let clickedCard = tool;
    return (
        <div className="px-7 pt-[52px] pb-[65px] md:pr-[30px] md:pl-[9px] ">
            <div className="heading w-full flex flex-wrap justify-between">
                <h1 className={`text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]`}>
                    {clickedCard}
                </h1>
                <div className=' '>
                    <select className='font-normal text-[13px] leading-6 text-[#252C32] bg-[#F9F9F9] appearance-none outline-none rounded-md py-1 pl-3 pr-[33px]' name="days" id="">
                        <option value="Last 7 Days">Export</option>
                        <option value="Last 7 Days">Export</option>
                        <option value="Last 7 Days">Export</option>
                    </select>
                </div>
            </div>
            <div className="work-Banch w-full pt-[19px]">
                <div className='graph-data xl:gap-4 gap-6 mb-[26px] flex flex-wrap justify-between'>
                    {
                        Cards_data.filter((card) => card.name === clickedCard).map((cardData, indx) => {
                            return (
                                <>
                                    <div key={indx} className='card relative xl:w-[66.2%] w-full pt-[29px] pr-[17px] pb-[17px] pl-[30px] bg-[#FFFFFF] rounded-[10px]'>
                                        <div className='1fst flex flex-wrap justify-between md:gap-0 gap-5 items-center'>
                                            <div className={`${clickedCard==="Traffic"?"w-full":""}`}>
                                                <div className='flex gap-1 sm:gap-[14px] items-center'>
                                                    <div className='bg-[#EAEAEA] h-[30px] w-[30px] rounded-[4.7px]'></div>
                                                    <h1 className=' text-xs sm:w-full w-[30%]  text-left leading-normal text-[#000000] font-semibold md:text-xl sm:leading-[24.2px]'>
                                                        {cardData.name}
                                                    </h1>
                                                </div>
                                                <div className='flex items-end gap-2 mt-[22px]'>
                                                    <div className='font-bold text-[70px] leading-[60px] text-[#000000]'>
                                                        {cardData.Count}
                                                    </div>
                                                    <div className='text-left w-[21%] sm:w-[6%] font-normal text-[13px] leading-[15.75px]'>
                                                        {cardData.Type}
                                                    </div>
                                                </div>
                                                <p className={`${clickedCard==="Traffic"?"text-right":"text-left"} mt-[3px]  font-normal text-xs leading-[14.52px] text-[#E93439]`}>{cardData.Message}</p>
                                            </div>
                                            {
                                                clickedCard==="Engagements"?
                                                <div className=' '>
                                                    <div className='w-[250px] h-[117px]'>
                                                        <BarChart></BarChart>
                                                    </div>
                                                </div>:""
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full justify-between items-center flex xl:w-fit bg-[#FFFFFF] rounded-[10px] pt-5 pl-[30px] pb-[11px] pr-2'>
                                        <div>
                                            <div className='flex gap-[14px]  items-center'>
                                                <div className='h-[30px] w-[30px] bg-[#EAEAEA] rounded-[4.74px] '></div>
                                                <p className='font-semibold w-[108px] text-left text-base leading-[19px]'>
                                                    {
                                                        clickedCard==="Traffic"?<>Geographical Breakdown</>:
                                                        <>Traffic Trends</>
                                                    }
                                                </p>    
                                            </div>
                                               {
                                                clickedCard==="Traffic"?
                                                    <div className='mt-16 w-[122px]'>
                                                        <ul className='pl-[3.8px] flex flex-wrap gap-[25.33px]'>
                                                            <li className='items-center  flex gap-[5.28px]'>
                                                                <div className='w-[6.34px] h-[6.34px]'>
                                                                    <img className='w-full h-full object-cover' src={GreenDot} alt="" />
                                                                </div>
                                                                <span className='font-normal text-[8.45px] text-[#8A8A8A] '>Pakistan</span>
                                                            </li>
                                                            <li className='items-center  flex gap-[5.28px]'>
                                                                <div className='w-[6.34px] h-[6.34px]'>
                                                                    <img className='w-full h-full object-cover' src={PinkDot} alt="" />
                                                                </div>
                                                                <span className='font-normal text-[8.45px] text-[#8A8A8A] '>China</span>
                                                            </li>
                                                            <li className='items-center  flex gap-[5.28px]'>
                                                                <div className='w-[6.34px] h-[6.34px]'>
                                                                    <img className='w-full h-full object-cover' src={PurpleDot} alt="" />
                                                                </div>
                                                                <span className='font-normal text-[8.45px] text-[#8A8A8A] '>Canada</span>
                                                            </li>
                                                            <li className='items-center  flex gap-[5.28px]'>
                                                                <div className='w-[6.34px] h-[6.34px]'>
                                                                    <img className='w-full h-full object-cover' src={OrangeDot} alt="" />
                                                                </div>
                                                                <span className='font-normal text-[8.45px] text-[#8A8A8A] '>America</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                :""
                                               }
                                        </div>
                                        {
                                            clickedCard==="Traffic"?
                                            <div className=''>
                                                <DoughnutCharts/>
                                            </div>:
                                            ""
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className='table-data bg-[#FFFFFF] rounded-[10px] pt-[27px] pr-3 pb-[21px] pl-5'>
                    <div className='table-title pl-4 flex flex-wrap justify-between'>
                        <h2 className='font-semibold text-base leading-[19px] md:mb-0 mb-5'>All Campaign</h2>
                        <div className='flex flex-wrap gap-7 md:gap-10 '>
                            <div className='relative'>
                                <img className='absolute left-[13px] top-[11px]' src={SearchIcon} alt="Search Icon" />
                                <input type="search" className='w-[233px] text-[#BFBFBF] font-normal text-[11px] leading-[13px] rounded-md bg-[#F9F9F9] py-3 px-[13px] pl-[43px] outline-none' name='searchedItem' placeholder='Find Campain' />
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='relative'>
                                    <span className='absolute -top-[5px] left-[11px] font-normal text-[10px] leading-3 text-[#616161] bg-[#FFFFFF] px-1'>Filter</span>
                                    <select className='w-[180px] py-[10px] px-3 border-[#C9C9C9] border rounded-md text-[#616161] font-normal text-[11px] leading-[13px]' name="selectDays" id="">
                                        <option value="">Last 7 Days</option>
                                        <option value="">Last 14 Days</option>
                                        <option value="">Last 21 Days</option>
                                        <option value="">Last 30 Days</option>
                                    </select>
                                </div>
                                <img src={FilterFilledIcon} alt='Filter Icon' />
                            </div>
                        </div>
                    </div>
                    <div className='table-Content overflow-auto mt-[25px]'>
                        {
                            clickedCard==="Traffic"?<TrafficTable data={Campaigns}/>:
                            clickedCard==="Engagements"?<TrafficTable data={Engagements_Campaigns}/>:
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Traffic