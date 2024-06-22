import Black_CircleIcon from '../../Assets/Black_circle_icon.svg'
import { Link } from 'react-router-dom'

const BillingandPayment = () => {
    let Plans = [
        {
            name: "Free",
            price: "0",
            status: "Active",
            details: ["100 conversations p/m", "10 websites", "2 GB data storage"],
            features: ["Chat widget", "Real time support"]
           
        },
        {
            name: "Essentials",
            price: "50",
            status: "Request a demo",
            details: ["500 conversations p/m", "50 websites", "20 GB data storage"],
            features: ["Everything off", "Chat widget", "Real time support"],
            tag:"Free"
        },
        {
            name: "Team",
            price: "90",
            status: "Demo Completed",
            details: ["1000 conversations p/m", "200 websites", "150 GB data storage"],
            features: ["Everything off", "Chat widget", "Real time support"],
            tag:"Essential"
        },
        {
            name: "Enterprise",
            price: "160",
            status: "Previous",
            details: ["52500 conversations p/m", "Unlimited websites", "Unlimited GB data storage"],
            features: ["Everything off", "Chat widget", "Real time support"],
            tag:"Team"

        },
    ]
    return (
        <>
            <div className='work-Banch  px-5 md:px-0   w-full  rounded-[20px]'>
                <div className='flex w-full flex-wrap '>
                    <div className='heading w-full mt-[60px]'>
                        <h1 className='text-[#E93439] font-semibold text-[32px] leading-[38px]'>Manage Your Plan</h1>
                    </div>
                    <div className='details w-full mt-[9px]'>
                        <p className='text-[#263238] font-normal text-xl leading-6'>Choose/Change the package that best suit you</p>
                    </div>
                    <div className='subscription-plans md:w-[89.4%] pb-52 mt-[65px] md:pl-[49px] justify-center md:justify-normal flex gap-[14px] flex-wrap'>
                        {
                            Plans?.map((plan, mainindx) => {
                                return (
                                    // 216/1004
                                    <div key={mainindx} className={`plan1 ${mainindx === 0 ? "bg-[#ececec] shadow-lg" : " border-[#EFEFEF] border-[1px] bg-[#FFFFFF]"} pt-[22px] pr-[28px] pl-6  xl:w-[23.81%] lg:w-[30%] md:w-[48%] sm:w-3/4 w-full flex  flex-col gap-30px   rounded-[5px]`}>
                                        <div className='plan-head items-start flex flex-wrap '>
                                            <h1 className='font-normal text-[21px] w-full text-left leading-[26px] ml-[8.5px] text-[#170A07]'>
                                                {plan.name}
                                            </h1>
                                            <div className='amount flex flex-col w-full items-start gap-1 ml-[5px] mt-[19px]'>
                                                    <p className='font-normal text-[21px] leading-[26px] text-[#170A07]'>${plan.price}</p>
                                                    <span className='font-normal text-[10px] leading-[13px] text-[#616163]'>per month</span>
                                            </div>
                                            <Link to="" className={`${mainindx === 0 ? "bg-[#E93439] text-[#FFFFFF]" : "border-[0.72px] border-[#170A07] text-[black]"} w-full mt-4   py-2  rounded-[4.3px] text-sm leading-[19px] font-normal`}>
                                                {plan.status}
                                            </Link>
                                        </div>
                                        <div className='plan-list border-b-[0.72px] border-[#170A07] mt-[30px] pb-6'>
                                            <ul className=' text-left list-disc -ml-2 flex flex-col gap-[14px]  ' >
                                                {
                                                    plan.details.map((point, indx) => {
                                                        return (
                                                            <li key={indx} className='flex items-center gap-[10px] text-[#616163] font-normal text-xs leading-[14px]'>
                                                               <img src={Black_CircleIcon} alt='fs'/>
                                                                <span>{point}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className='plan-list mt-[22px] pb-16'>
                                            <ul className='text-left flex flex-col gap-[14px] font-normal text-[12px] text-[#616163]'>
                                                {
                                                    plan.features.map((feature, findx) => {
                                                        return (
                                                            <li key={findx} className='flex items-center gap-[10px]'>
                                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3.31256 7.58911V0.864087H4.45378V7.58911H3.31256ZM0.520657 4.79721V3.65599H7.24568V4.79721H0.520657Z"
                                                                        fill={`${mainindx === 0 ? "#170A07" : "#56E6A5"}`}
                                                                    />
                                                                </svg>
                                                                <span className='text-[#5B5B66] font-normal text-xs leading-[14px]'>{`${feature}`}</span><span className='font-normal text-xs text-[#FB645C]'>{findx === 0 && plan.tag}</span>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default BillingandPayment