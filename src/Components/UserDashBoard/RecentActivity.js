import SearchIcon from '../../Assets/SearchIcon.svg'
import Dropdownarrow from '../../Assets/DropdownArrow.svg'
import TrafficTable from '../Table/TrafficTable'

const RecentActivity = () => {
    let Recent_Activity=[
        {
            // id:1,
            Title:"Spring Sale Campaign",
            Type:"Campaign Completion",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Successful",
            Links:"link",
        },
        {
            // id:2,
            Title:"Spring Sale Campaign",
            Type:"New Post Published",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Pending",
            Links:"link",
        },
        {
            // id:3,
            Title:"Spring Sale Campaign",
            Type:"Funds Added",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Failed",
            Links:"link",
        },
        {
            // id:4,
            Title:"Spring Sale Campaign",
            Type:"New Post Published",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Successful",
            Links:"link",
        },
        {
            // id:5,
            Title:"Spring Sale Campaign",
            Type:"Campaign Completion",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Pending",
            Links:"link",
        },
        {
            // id:6,
            Title:"Spring Sale Campaign",
            Type:"Funds Added",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Failed",
            Links:"link",
        },
        {
            // id:7,
            Title:"Spring Sale Campaign",
            Type:"Campaign Completion",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Failed",
            Links:"link",
        },
        {
            // id:8,
            Title:"Spring Sale Campaign",
            Type:"Funds Added",
            Start_Date:"10 / Mar / 2024",
            End_Date:"10 / Mar / 2025",
            Status:"Failed",
            Links:"link",
        },
    ]
  return (
    <div className='pt-[52px] pb-[41px] px-5 md:pr-[30px] md:pl-[11px]'>
            <div className='heading w-full flex justify-between pr-[17px]'>
                <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]">
                    Recent Activity
                </h1>
                <div className=' '>
                    <select className='font-normal text-[13px] leading-6 text-[#252C32] bg-[#F9F9F9] appearance-none outline-none rounded-md py-1 pl-3 pr-[33px]' name="days" id="">
                        <option value="Last 7 Days">Export</option>
                        <option value="Last 7 Days">Export</option>
                        <option value="Last 7 Days">Export</option>
                    </select>
                </div>
            </div>
            <div className='work-Banch  mt-5 shadow-md pt-[18px] pb-64 pl-[21px] pr-[25px] w-full bg-white rounded-[10px]'>
                <div className='table-heading flex justify-between xl:gap-0 gap-4 flex-wrap'>
                    <h2 className='font-semibold text-base leading-[19.36px] '>Activity</h2>
                    <div className='table-filters w-full sm:w-auto flex flex-wrap  gap-[13px]'>
                        <div className='search-filter  relative'>
                            <div className='w-3 h-3 absolute left-[13.62px] top-[10.62px]'>
                                <img className='w-full h-full object-cover' src={SearchIcon} alt="search Icon" />
                            </div>
                            <input type="search" placeholder='Find Campain' className=' py-[10px] pr-[15px] pl-[43px] outline-none font-normal text-[11px] leading-[13.31px] text-[#BFBFBF] bg-[#F9F9F9] rounded-md' />
                        </div>
                        <div className='status-filter  flex gap-2 items-center relative'>
                            <img className='absolute right-[10px] top-[15px] ' src={Dropdownarrow} alt="" />
                            <label htmlFor="" className='font-normal text-[13px] leading-6 text-[#252C32]'>Status</label>
                            <select placeholder="0.00" name="" id="" className=' w-[82px] appearance-none  text-[13px] leading-6 font-normal pr-[9px] pl-[20px] py-1  text-[#252C32] outline-none bg-[#F9F9F9]  rounded-md'>
                                <option value="">All</option>
                                <option value="">None</option>
                                <option value="">Hi</option>
                            </select>
                        </div>
                        <div className='Action-Type-filter  flex gap-2 items-center relative'>
                            <img className='absolute right-[10px] top-[15px] ' src={Dropdownarrow} alt="" />
                            <label htmlFor="" className='font-normal text-[13px] leading-6 text-[#252C32]'>Action Type</label>
                            <select placeholder="0.00" name="" id="" className=' w-[175px] appearance-none  text-[13px] leading-6 font-normal pr-[9px] pl-[20px] py-1  text-[#252C32] outline-none bg-[#F9F9F9]  rounded-md'>
                                <option value="">Campaign Completion</option>
                                <option value="">Campaign Completion</option>
                                <option value="">Campaign Completion</option>
                            </select>
                        </div>
                        <div className='starting-Datefilter flex gap-2 items-center relative'>
                            <label htmlFor="" className='font-normal text-[13px] leading-6 text-[#252C32]'>Date </label>
                            <input type="date" name='starting_Date' className='uppercase py-[5px] pr-[11px] pl-[10px] outline-none font-normal text-[13px] leading-6 text-[#252C32] bg-[#F9F9F9] rounded-md' />
                        </div>
                        <div className='ending-Datefilter  flex gap-2 items-center relative'>
                            <input type="date" name='ending_Date' className='uppercase py-[5px] pr-[11px] pl-[10px] outline-none font-normal text-[13px] leading-6 text-[#252C32] bg-[#F9F9F9] rounded-md' />
                        </div>
                    </div>
                </div>
                <div className='table-Content overflow-auto mt-[27px]'>
                    <TrafficTable data={Recent_Activity}/>
                </div>
            </div>
        </div>
  )
}

export default RecentActivity