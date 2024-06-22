import FilterSvg from '../../Assets/FilterSvg.svg'
import SearchIcon from '../../Assets/SearchIcon.svg'
import FilterFilledIcon from '../../Assets/FilterFilledIcon.svg'
import graphdata from '../../Assets/LineChart.svg'
import { Link, useParams } from 'react-router-dom'
import Table from '../Table/Table'

const OverviewSummary = () => {
    let Campaigns=[
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Social Media Posts",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Clicks",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Paused",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Website Banners",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Ended",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
        {
            Campaign_Type:"Video Promotion",
            Start:"12, Mar 2022",
            End:"12, Mar 2024",
            Objective:"Views",
            Clicks:"5000",
            Impression:"100000",
            Engagement_Rate:"5%",
            Status:"Active",
            Budget_Remain:"$2000",
        },
    ]
    let Cards_data=[
        {
            name:"Total Active Campaign",
            Count:"15",
            Type:"Active Campaigns",
            Message:"Campaigns Currently Live",
        },
        {
            name:"Traffic",
            Count:"500k",
            Type:"Page Views",
            graph:graphdata,
            Message:"Total page views in the last 30 days",
        },
        {
            name:"Engagements",
            Count:"20k",
            Type:"Clicks",
            Message:"Clicks on posts in the last 30 days",
        },
    ]
    return (
        <div className="px-7 pt-[44px] pb-[31px] md:pr-[30px] md:pl-[11px] ">
            <div className="heading w-full ">
                <h1 className={`text-[#E93439]  text-center font-semibold text-[32px] leading-[38px]`}>
                    Overview Summary
                </h1>
                <p className="text-[#353535] text-xl font-normal leading-6 mt-[10px]">A quick view of total campaigns, traffic, and engagement</p>
            </div>
            <div className="work-Banch w-full">
                <div className='filter mb-[17px]'>
                    <div className='flex gap-3 justify-end'>
                        <div className='flex gap-[5px]'>
                            <img src={FilterSvg} alt="filter Svg" />
                            <span className='font-normal text-sm leading-6 text-[#000000]'>Filter</span>
                        </div>
                        <div>
                            <select className='font-normal text-sm leading-6 text-[#252C32] bg-[#FFFFFF] outline-none rounded-md py-1 px-3 ' name="days" id="">
                                <option value="Last 7 Days">Last 7 Days</option>
                                <option value="Last 14 Days">Last 14 Days</option>
                                <option value="Last 21 Days">Last 21 Days</option>
                                <option value="Last 30 Days">Last 30 Days</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='graph-data md:justify-between justify-center gap-6 lg:gap-0 flex flex-wrap mb-[23px]'>
                    {
                        Cards_data.map((cardData,indx)=>{
                            return(
                                <Link to={`/Subscription/${cardData.name}`} key={indx} className='card1 w-[328px] md:w-[47%] lg:w-[31.9%]  pt-[21px] pr-3 pb-[18px] pl-[21px] bg-[#FFFFFF] rounded-[10px]'>
                                    <div className='flex gap-2 items-end 2xl:justify-between'>
                                        <div className={`${!cardData.graph? "w-full":""}`}>
                                            <div className='flex gap-[14px] items-center'>
                                                <div className='bg-[#EAEAEA] h-[30px] w-[30px] rounded-[4.7px]'></div>
                                                <h1 className='text-[#000000] font-semibold text-base text-left leading-[19px]'>
                                                    {cardData.name}
                                                </h1>
                                            </div>
                                            <div className='flex gap-[9px] items-end mt-[38px]'>
                                                <div className='font-bold text-5xl leading-[41px] text-[#000000]'>
                                                    {cardData.Count}
                                                </div>
                                                <div className='text-left w-[40px] font-normal text-[11px] leading-[13px]'>
                                                    {cardData.Type}
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            cardData.graph?<div className='graph-image w-[114px]'>
                                            <img src={graphdata} alt="graph" />
                                            </div>:""
                                        }
                                        
                                    </div>
                                    <div className='text-left mt-[14px] font-normal text-xs leading-[14.52px] text-[#E93439]'>
                                        {cardData.Message}
                                    </div>
                                </Link>
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
                                <img src={FilterFilledIcon} alt='Filter Icon'/>
                            </div>
                        </div>
                    </div>
                    <div className='table-Content overflow-auto mt-[25px]'>
                       <Table data={Campaigns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewSummary