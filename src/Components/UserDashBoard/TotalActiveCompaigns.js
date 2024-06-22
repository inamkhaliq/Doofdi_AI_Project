import FilterFilledIcon from '../../Assets/FilterFilledIcon.svg'
import SearchIcon from '../../Assets/SearchIcon.svg'
import FilterSvg from '../../Assets/FilterSvg.svg'
import graphdata from '../../Assets/LineChart.svg'
import { Link, useParams } from 'react-router-dom'
import Table from '../Table/Table'

const TotalActiveCompaigns = () => {
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
    let {tool}=useParams()
    let clickedCard=tool;
  return (
    <div className="px-7 pt-[52px] pb-[65px] md:pr-[30px] md:pl-[9px] ">
            <div className="heading w-full ">
                <h1 className={`text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]`}>
                Total Active Campaign
                </h1>
            </div>
            <div className="work-Banch w-full pt-[19px]">
                <div className='graph-data mb-[26px]'>
                    {
                        Cards_data.filter((card)=>card.name===clickedCard).map((cardData,indx)=>{
                            return(
                                <div key={indx} className='card relative  w-full pt-[29px] pr-[17px] pb-[17px] pl-[30px] bg-[#FFFFFF] rounded-[10px]'>
                                    <div className='1fst '>
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
                                    </div>
                                    <p className='mt-[3px] text-right font-normal text-xs leading-[14.52px] text-[#E93439]'>{cardData.Message}</p> 
                                    <div className='absolute top-[15px] right-[17px]'>
                                            <select className='font-normal text-[13px] leading-6 text-[#252C32] bg-[#F9F9F9] appearance-none outline-none rounded-md py-1 pl-3 pr-[33px]' name="days" id="">
                                                <option value="Last 7 Days">Export</option>
                                                <option value="Last 7 Days">Export</option>
                                                <option value="Last 7 Days">Export</option>
                                            </select>
                                    </div>
                                </div>
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
                        <Table data={Campaigns}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TotalActiveCompaigns