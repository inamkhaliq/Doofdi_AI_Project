import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BillingandPayment from '../Components/UserDashBoard/BillingandPayment'
import VideoGenerator from '../Components/UserDashBoard/VideoGenerator'
import SideBar from '../Components/UserDashBoard/SideBar'
import EarnWithDoofdi from '../Components/UserDashBoard/EarnWithDoofdi'
import WebsitePromotion from '../Components/UserDashBoard/WebsitePromotion'
import SocialMarketing from '../Components/UserDashBoard/SocialMarketing'
import OverviewSummary from '../Components/UserDashBoard/OverviewSummary'
import TotalActiveCompaigns from '../Components/UserDashBoard/TotalActiveCompaigns'
import Traffic from '../Components/UserDashBoard/Traffic'
import AddFunds from '../Components/UserDashBoard/AddFunds'
import WalletOverview from '../Components/UserDashBoard/WalletOverview'
import RecentActivity from '../Components/UserDashBoard/RecentActivity'
import CampaignOverview from '../Components/UserDashBoard/CampaignOverview'
import Notifications from '../Components/UserDashBoard/Notifications'
import Transactions from '../Components/UserDashBoard/Transactions'
const UserDashBoard = () => {
    let UserMenues = [
        {
            name: "Home",
            slug: "Home",
            image: "/home.svg"
        },
        {
            name: "Content Generator",
            slug: "Content-Generator",
            image: "/contentgenerator.svg"
        },
        {
            name: "Ai Image Generator",
            slug: "Image-Generator",
            image: "/index.html"
        },
        {
            name: "Ai Video Creator",
            slug: "Video-Creator",
            image: "/aivideogenerator.svg"
        },
        {
            name: "Social Marketing",
            slug: "Social-Marketing",
            image: "/socoialmarketing.svg"
        },
        {
            name: "Website Promotion",
            slug: "Website-Promotion",
            image: "/websitepromotion.svg"
        },
        {
            name: "Earn with Doofdi",
            slug: "Earn-with-Doofdi",
            image: "/earnwithdoofdi.svg"
        },
        {
            name: "Billing and Payment",
            slug: "Billing-and-Payment",
            image: ""
        },
        {
            name: "Setting",
            slug: "Setting",
            image: "/setting.svg"
        },
    ]
    let parms = useParams();
    let Tool = parms.tool
    let [drawer, setDrawer] = useState(true);
    let [userTool, setUserTool] = useState(Tool);
    console.log(Tool)
    return (
        <section className='bg-[#fafbfc]'>
            <div className='flex flex-wrap '>
                <div className='md:w-[20.83%] hidden md:flex flex-wrap flex-col gap-[66px] p-7 md:px-1 lg:px-[14px]  bg-[#FFFFFF] '>
                    <div className='logo flex justify-center items-center w-full border-[#F4EEED] border-b'>
                        <div className='logo-img w-[170px] h-[73px]'>
                        </div>
                    </div>
                    <div className='User-Menu-Options  xl:px-[10px]'>
                        <SideBar UserMenues={UserMenues} setUserTool={setUserTool} userTool={userTool}></SideBar>
                    </div>
                </div>
                                {/* 1140/1440 */}
                <div className='md:w-[79.16%] w-full md:pl-[54px] md:pr-[17px]'>
                                {/* 1069/1140 */}
                    <div className=' w-full  overflow-hidden'>
                        <div className='relative Top-Bar pr-[45px] pl-[31px] flex justify-between items-center w-full h-[102px] border-b-[0.5px] border-[#414141]'>
                            {/* Side Drawer  */}
                            <div className={`w-full  ${drawer ? "ml-[100%]" : "-ml-[0]"} transition-all z-10 duration-300 absolute top-0 left-0 p-7 bg-[#FFFFFF]`}>
                                <div className=''>
                                    <div className='logo  items-center flex justify-between'>
                                        <img className='w-24' src="/LOGO.svg" alt="" />
                                        <div onClick={() => setDrawer(!drawer)} className='cursor-pointer text-[#343434]'>X</div>
                                    </div>
                                    <div>
                                        <ul className='flex flex-col list-none  text-left'>
                                            <li className='lg:pl-8 md:pl-0 py-[15px] hover:bg-[#EA3238] text-[#343434] hover:text-[#F7F7F7] rounded-xl group'>
                                                <Link to={"/"} className='font-normal xl:text-xl text-base flex items-center gap-4' >
                                                    <svg className='inline-block xl:w-10 xl:h-10 lg:w-7 w-5 group-hover:fill-[#F7F7F7]' fill="#343434" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 459.334 459.334" >
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <path d="M175.216,404.514c-0.001,0.12-0.009,0.239-0.009,0.359c0,30.078,24.383,54.461,54.461,54.461
                                                                        s54.461-24.383,54.461-54.461c0-0.12-0.008-0.239-0.009-0.359H175.216z"/>
                                                                    <path d="M403.549,336.438l-49.015-72.002c0-22.041,0-75.898,0-89.83c0-60.581-43.144-111.079-100.381-122.459V24.485
                                                                            C254.152,10.963,243.19,0,229.667,0s-24.485,10.963-24.485,24.485v27.663c-57.237,11.381-100.381,61.879-100.381,122.459
                                                                            c0,23.716,0,76.084,0,89.83l-49.015,72.002c-5.163,7.584-5.709,17.401-1.419,25.511c4.29,8.11,12.712,13.182,21.887,13.182
                                                                        H383.08c9.175,0,17.597-5.073,21.887-13.182C409.258,353.839,408.711,344.022,403.549,336.438z"/>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                    <span className=''>Notifications</span>
                                                </Link>
                                            </li>
                                            <li className='lg:pl-8 md:pl-0 py-[15px] hover:bg-[#EA3238] text-[#343434] hover:text-[#F7F7F7] rounded-xl group'>
                                                <Link className='font-normal xl:text-xl text-base flex items-center gap-4' to={"/"}>
                                                    <img
                                                        className=' rounded-full xl:w-10 xl:h-10 lg:w-7 lg:h-7 w-5 h-5 object-cover'
                                                        src="https://s3-alpha-sig.figma.com/img/8a1b/1ba4/33b7d4b958ba366944d0776e05bf335e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB~IQUCvVBk1Uw7J6LyFHeLtp45HZMV-zEzeMsG4tcElu9~aoiFLDEbyKbLeJiPJHaiWzcHnFucqoarLRNxifzf4owkXKfir2EV3NgftyRU0HUFlsCK8qfb2ypAyKWY-xmRQIVqWot7VDZ8XB0y32h~vmeSxP8aU1e9cZQaGG3cGHFABTcKgqyY~-B9HQcODV3SdEZ0JBzirUTu7Iic4Ga0ST~E3EHb1IEeDE0dpIXAvaUqi94PLkzrmPEo4MfACSdf~vIzOTxVy6XwcEJ0sO0hInNR0Oz0LqFr9gUZR9YOupMqT-gRW2oa9MJEAw7xqoamVTOxgLI4EwdzvlskBlA__" alt="" 
                                                    />
                                                    <span >Test Account</span>
                                                </Link>
                                            </li>
                                            <li className='hover:bg-[#EA3238] lg:pl-8 md:pl-0 py-[15px] text-[#343434] hover:text-[#F7F7F7] rounded-xl group'>
                                                <Link className='font-normal xl:text-xl text-base flex items-center gap-4' to={"/"}>
                                                    <img className='xl:w-[50px] lg:w-7 w-5' src="/coin.svg" alt="coin" />
                                                    <span >2839.917</span>
                                                </Link>
                                            </li>
                                            {
                                                UserMenues.map((menu, indx) => {
                                                    return (
                                                        <li key={indx} className='lg:pl-8 md:pl-0 py-[15px] text-[#343434] hover:bg-[#EA3238] hover:text-[#F7F7F7] rounded-xl group'>
                                                            <Link to={"/Subscription/" + menu.slug} onClick={()=>{setUserTool(menu.slug);setDrawer(!drawer)}} className='font-normal  xl:text-xl text-base flex items-center gap-4' >
                                                                {
                                                                menu.name === "Home" ?
                                                                <svg className='group-hover:stroke-white' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' fillRule="evenodd" clipRule="evenodd" d="M4.55121 6.72125L11.2487 3.30258C12.0346 2.89914 12.9667 2.89914 13.7526 3.30258L20.4501 6.72125C21.506 7.35873 22.095 8.55171 21.9593 9.77755L22 16.5714C22 19.5696 19.5695 22 16.5714 22H8.42857C5.43045 22 3 19.5696 3 16.5714L3.04207 9.7857C2.90302 8.55705 3.49252 7.36002 4.55121 6.72125Z" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M9 22V19C9 17.3432 10.5671 16 12.5 16C14.4331 16 16 17.3432 16 19V22" stroke="#343434" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg> :
                                                                menu.name === "Content Generator" ?
                                                                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M19.0206 3.48162C17.0806 1.54162 15.1806 1.49162 13.1906 3.48162L11.9806 4.69162C11.8806 4.79162 11.8406 4.95162 11.8806 5.09162C12.6406 7.74162 14.7606 9.86162 17.4106 10.6216C17.4506 10.6316 17.4906 10.6416 17.5306 10.6416C17.6406 10.6416 17.7406 10.6016 17.8206 10.5216L19.0206 9.31162C20.0106 8.33162 20.4906 7.38162 20.4906 6.42162C20.5006 5.43162 20.0206 4.47162 19.0206 3.48162Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M15.6103 11.5308C15.3203 11.3908 15.0403 11.2508 14.7703 11.0908C14.5503 10.9608 14.3403 10.8208 14.1303 10.6708C13.9603 10.5608 13.7603 10.4008 13.5703 10.2408C13.5503 10.2308 13.4803 10.1708 13.4003 10.0908C13.0703 9.81074 12.7003 9.45074 12.3703 9.05074C12.3403 9.03074 12.2903 8.96074 12.2203 8.87074C12.1203 8.75074 11.9503 8.55074 11.8003 8.32074C11.6803 8.17074 11.5403 7.95074 11.4103 7.73074C11.2503 7.46074 11.1103 7.19074 10.9703 6.91074C10.9491 6.86535 10.9286 6.82018 10.9088 6.77528C10.7612 6.44196 10.3265 6.34451 10.0688 6.60227L4.34032 12.3308C4.21032 12.4608 4.09032 12.7108 4.06032 12.8808L3.52032 16.7108C3.42032 17.3908 3.61032 18.0308 4.03032 18.4608C4.39032 18.8108 4.89032 19.0008 5.43032 19.0008C5.55032 19.0008 5.67032 18.9908 5.79032 18.9708L9.63032 18.4308C9.81032 18.4008 10.0603 18.2808 10.1803 18.1508L15.9016 12.4295C16.1612 12.1699 16.0633 11.7245 15.7257 11.5804C15.6877 11.5642 15.6492 11.5476 15.6103 11.5308Z" fill="#343434" />
                                                                </svg> :
                                                                menu.name === "Ai Image Generator" ?
                                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' d="M15.9789 6.70248C16.397 6.65021 16.8151 6.96378 16.8151 7.38189L18.1739 20.2905C18.2261 20.7086 17.9126 21.1266 17.4944 21.1266L4.63814 22.4854C4.22003 22.5377 3.80197 22.2241 3.80197 21.806L2.4432 8.94969C2.39093 8.53158 2.7045 8.11352 3.12261 8.11352L15.9789 6.70248Z" stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M6.99042 10.2562C6.04971 10.3607 5.31808 11.1969 5.42257 12.1899C5.52711 13.1306 6.36328 13.8622 7.35626 13.7577C8.29698 13.6532 9.02861 12.817 8.92412 11.824C8.81963 10.8311 7.93113 10.1517 6.99042 10.2562ZM11.7462 13.2874L9.23763 16.3708C9.13309 16.4753 8.97633 16.5276 8.87179 16.4231L8.29692 15.9527C8.19238 15.8482 7.98335 15.9005 7.93108 16.005L5.21348 19.3498C5.10894 19.4543 5.10894 19.6633 5.26576 19.7156C5.21348 19.7679 5.31803 19.7679 5.3703 19.7679L16.1884 18.6181C16.3452 18.6181 16.4497 18.4614 16.4497 18.3046C16.4497 18.2523 16.3974 18.2 16.3974 18.1478L12.1643 13.2352C12.0075 13.1829 11.8507 13.1828 11.7462 13.2874Z" stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M8.81909 7.48637L9.18493 4.1939C9.2372 3.77579 9.60305 3.46222 10.0211 3.51449L22.8774 4.87326C23.2955 4.92553 23.6091 5.29137 23.5568 5.70943L22.198 18.5657C22.198 18.9316 21.7799 19.2451 21.3619 19.2451L18.0171 18.8793" stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M17.7558 16.214L20.6302 16.5275C20.7869 16.5275 20.8915 16.423 20.9438 16.2662C20.9438 16.214 20.9438 16.1617 20.8915 16.1095L17.7558 10.413C17.7035 10.3084 17.4945 10.2562 17.3899 10.3084L17.1809 10.5175" stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg> :
                                                                menu.name === "Ai Video Creator" ?
                                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' d="M21.6667 12.4584H3.25V22.2084C3.25 22.8067 3.73503 23.2917 4.33333 23.2917H21.6667C22.265 23.2917 22.75 22.8067 22.75 22.2084V13.5417C22.75 12.9434 22.265 12.4584 21.6667 12.4584Z" stroke="#343434" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M1.7334 8.01672L19.0393 1.71785C19.6016 1.51322 20.2233 1.80311 20.428 2.36532L21.169 4.40133C21.3736 4.96356 21.0837 5.58522 20.5215 5.78985L3.21549 12.0887L1.7334 8.01672Z" stroke="#343434" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M17.0034 2.45886L16.4495 7.27191" stroke="#343434" />
                                                                    <path className='group-hover:stroke-white' d="M12.9313 3.94092L12.3774 8.75396" stroke="#343434" />
                                                                    <path className='group-hover:stroke-white' d="M8.85934 5.4231L8.30542 10.2361" stroke="#343434" />
                                                                    <path className='group-hover:stroke-white' d="M4.78732 6.90515L4.2334 11.7182" stroke="#343434" />
                                                                </svg> :
                                                                menu.name === "Social Marketing" ?
                                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M19.4995 5.62536C19.4995 6.00548 19.88 6.38559 20.4118 6.38559C21.1717 6.38559 21.3997 6.0815 21.3997 5.62536C21.3997 5.54934 21.3997 5.54934 21.3997 5.47366C21.324 5.24559 21.0956 5.09355 20.8683 4.9415C20.7919 4.9415 20.6402 4.86548 20.4885 4.86548C19.9556 4.86582 19.4995 5.16957 19.4995 5.62536Z" fill="black" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M21.0964 3.11652C21.0197 2.66039 20.7159 2.28027 20.3362 2.28027C19.9557 2.28027 19.7276 2.66039 19.8043 3.11652C19.881 3.57265 20.1841 3.95277 20.5642 3.95277C20.8683 3.95277 21.1721 3.57265 21.0964 3.11652Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M17.6752 8.81826L18.9676 7.52588C19.7274 8.13406 20.6407 8.51417 21.6287 8.51417C23.985 8.51417 25.8859 6.61327 25.8859 4.25691C25.8853 1.90022 23.985 0 21.6283 0C19.2723 0 17.3711 1.90056 17.3711 4.25725C17.3711 5.32157 17.7509 6.2335 18.3594 6.91804L17.0667 8.21076C17.2947 8.43849 17.5228 8.66689 17.6752 8.81826ZM22.3125 2.88851H23.1484V2.0526H23.4525V2.88885H24.2891V3.19294H23.4525V4.02953H23.1484V3.1926H22.3125V2.88851ZM20.412 4.33294C20.412 4.25691 20.412 4.18089 20.4887 4.10487C20.412 4.10487 20.412 4.10487 20.337 4.10487C19.7285 4.10487 19.2723 3.64874 19.2723 3.11658C19.2723 2.58442 19.8802 2.12829 20.4887 2.12829H21.8564L21.5523 2.35635H21.0962C21.4003 2.43272 21.5523 2.81283 21.5523 3.1926C21.5523 3.49669 21.4003 3.72476 21.1719 3.95283C20.9438 4.10487 20.8678 4.18089 20.8678 4.33294C20.8678 4.48498 21.0962 4.71305 21.2479 4.78907C21.6277 5.01714 21.704 5.32123 21.704 5.70134C21.704 6.23316 21.2479 6.68963 20.336 6.68963C19.5761 6.68963 18.8915 6.38554 18.8915 5.85338C18.8915 5.32123 19.4994 4.86509 20.2596 4.86509C20.336 4.86509 20.4113 4.86509 20.4877 4.86509C20.4877 4.63737 20.412 4.48532 20.412 4.33294Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M21.6284 17.4851C20.6404 17.4851 19.6521 17.8649 18.9673 18.4734L17.6752 17.1807C17.5228 17.4087 17.2948 17.5601 17.1431 17.7121L18.4358 19.0049C17.8276 19.7644 17.4475 20.6777 17.4475 21.666C17.4475 24.0223 19.3487 25.9232 21.7051 25.9232C24.0611 25.9232 25.9627 24.0223 25.9627 21.666C25.8853 19.3093 23.9851 17.4851 21.6284 17.4851ZM20.412 23.6429H19.5758V20.9818H20.412V23.6429ZM20.0319 20.6024C19.7278 20.6024 19.5001 20.3739 19.5001 20.1455C19.5001 19.9175 19.7282 19.6894 20.0319 19.6894C20.3357 19.6894 20.5637 19.9175 20.5637 20.1455C20.4877 20.45 20.336 20.6024 20.0319 20.6024ZM23.833 23.6429H22.8447V22.2748C22.8447 21.8951 22.693 21.6667 22.3883 21.6667C22.1602 21.6667 22.0085 21.8187 21.9321 21.9708C21.9321 22.0478 21.9321 22.1231 21.9321 22.1992V23.6439H21.0199C21.0199 23.6439 21.0199 21.2112 21.0199 20.9828H21.9321V21.3629C22.0085 21.2112 22.3126 20.9068 22.7687 20.9068C23.3766 20.9068 23.833 21.2866 23.833 22.1231V23.6429Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M8.24851 17.1814L6.95612 18.4741C6.1959 17.8656 5.28363 17.4858 4.29534 17.4858C1.93865 17.4858 0.0380859 19.3871 0.0380859 21.7427C0.0380859 24.0994 1.93865 26.0003 4.29534 26.0003C6.6517 26.0003 8.5526 24.0994 8.5526 21.7427C8.5526 20.7545 8.17248 19.7665 7.5643 19.082L8.85668 17.7892C8.62862 17.5608 8.40055 17.3324 8.24851 17.1814ZM6.12022 21.0582C6.12022 22.3506 5.13193 23.7947 3.38341 23.7947C2.85159 23.7947 2.3191 23.6426 1.93899 23.3379C2.01501 23.3379 2.09103 23.3379 2.16705 23.3379C2.62319 23.3379 3.0033 23.1861 3.38341 22.9581C3.0033 22.9581 2.62319 22.654 2.47114 22.2735C2.54716 22.2735 2.62285 22.2735 2.62285 22.2735C2.69921 22.2735 2.77489 22.2735 2.85125 22.2735C2.39478 22.1968 2.09103 21.8174 2.09103 21.3613C2.24307 21.4376 2.39512 21.513 2.54716 21.513C2.3191 21.3613 2.09103 21.0568 2.09103 20.7528C2.09103 20.6014 2.16705 20.4487 2.24308 20.2966C2.69921 20.9051 3.38307 21.2849 4.21932 21.2849C4.21932 21.2082 4.21932 21.1332 4.21932 21.0568C4.21932 20.5247 4.67579 20.0686 5.20761 20.0686C5.5117 20.0686 5.73977 20.2203 5.89215 20.3726C6.12022 20.2963 6.34828 20.2206 6.50033 20.1446C6.42397 20.3726 6.27192 20.5243 6.04386 20.6761C6.27192 20.6761 6.42397 20.5997 6.57601 20.5243C6.42397 20.7524 6.27192 20.9041 6.11988 20.9805C6.12022 20.9818 6.12022 20.9818 6.12022 21.0582Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M4.29534 8.51456C5.28363 8.51456 6.27158 8.13445 6.95612 7.52627L8.2485 8.81865C8.40055 8.59058 8.62862 8.43888 8.78066 8.28683L7.48794 6.99445C8.09612 6.23423 8.47623 5.32196 8.47623 4.33367C8.47623 1.97698 6.57567 0.076416 4.21898 0.076416C1.86262 0.076416 0.0380859 1.97698 0.0380859 4.33367C0.0380859 6.61366 1.93865 8.51456 4.29534 8.51456ZM3.30705 3.57277H3.76318V3.11663C3.76318 2.50845 3.99125 2.12834 4.75147 2.12834H5.35965V2.88857H4.97954C4.67545 2.88857 4.67545 2.96459 4.67545 3.19266V3.57277H5.35965L5.28363 4.33299H4.59875V6.46162H3.68648V4.33299H3.23069V3.57277H3.30705Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M16.8393 15.1281C16.7626 14.9767 16.6109 14.8997 16.5352 14.8997C15.851 14.6716 15.2432 14.5202 14.559 14.2918C14.483 14.2918 14.3309 14.1401 14.3309 13.8357C14.3309 13.6833 14.3309 13.6073 14.1792 13.6073C14.1025 13.6073 14.1792 13.6073 14.1025 13.5313C14.0268 13.2272 14.0268 13.0748 14.0268 12.9991C14.0268 12.9234 14.1025 12.9227 14.1025 12.8471C14.3309 12.543 14.4066 12.0872 14.4066 11.9348C14.4066 11.9348 14.483 11.9348 14.483 11.8584C14.559 11.7064 14.559 11.7064 14.559 11.478C14.6357 11.3266 14.6357 11.0985 14.483 11.0985C14.4066 11.1746 14.4066 11.0985 14.4066 10.9465V10.0342C14.4066 9.73014 14.1782 9.50241 14.0268 9.42639C13.7981 9.27401 13.7227 9.19798 13.6464 9.19798C13.57 9.12196 13.57 9.04594 13.6464 8.96992C13.7224 8.89423 13.7981 8.89423 13.7981 8.81787C13.7981 8.81787 13.7981 8.81787 13.7217 8.81787C13.6454 8.81787 13.1899 8.89457 12.9618 8.96992C12.5817 9.04594 12.2016 9.19798 11.8972 9.42639C11.6691 9.57809 11.5171 9.80616 11.5171 10.1109C11.5171 10.2623 11.5171 10.7188 11.5171 11.0232C11.5171 11.0999 11.5171 11.1752 11.4411 11.0999C11.213 11.0999 11.365 11.404 11.365 11.4793C11.365 11.6314 11.4411 11.7077 11.5167 11.8598C11.5167 11.9361 11.5931 11.9361 11.5931 11.9361C11.6691 12.1642 11.7451 12.6203 11.8972 12.8484C11.8972 12.8484 11.9736 12.9248 11.9736 13.0005C11.9736 13.1525 11.9736 13.3806 11.8972 13.5326C11.8972 13.5326 11.8972 13.609 11.8212 13.609C11.6691 13.609 11.6691 13.685 11.6691 13.837C11.6691 14.0651 11.5171 14.2935 11.4411 14.2935C11.0609 14.4449 9.92095 14.8253 9.5405 14.9014C9.31243 14.9781 9.23641 15.0534 9.16039 15.1294L8.78027 16.0417C10.3004 16.0417 11.0609 16.954 12.6574 17.2581H13.4176C15.0141 17.03 16.1541 16.0417 17.2188 16.0417L16.8393 15.1281Z" fill="#343434" />
                                                                </svg> :
                                                                menu.name === "Website Promotion" ?
                                                                <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' d="M16.2216 22.6362C14.1961 23.318 12.0065 23.3396 9.96793 22.6979C7.92937 22.0563 6.14689 20.7845 4.87697 19.0656C3.60705 17.3467 2.91517 15.2692 2.90086 13.1321C2.88656 10.995 3.55057 8.9084 4.79736 7.17261C6.04415 5.43683 7.80944 4.1413 9.83924 3.47244C11.869 2.80358 14.0587 2.79587 16.0931 3.45041C18.1276 4.10496 19.902 5.38802 21.161 7.11498C22.4199 8.84194 23.0986 10.9238 23.0994 13.0609C23.0667 13.8801 22.9676 14.6953 22.8028 15.4984" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M15.3806 20.7594C14.6541 21.5849 13.8576 22.346 13 23.0344" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M13 2.84375C15.7261 5.22556 17.413 8.57885 17.7003 12.1875C17.7593 12.8426 17.7715 13.501 17.7369 14.1578" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M13 2.84375C11.5209 4.13298 10.3326 5.72179 9.51391 7.50492C8.69518 9.28806 8.2647 11.2248 8.25098 13.1869C8.25098 19.7681 11.2085 21.7181 12.9879 23.0344" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M4.21289 8.08435H21.836" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M13 2.83972V23.0344" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M4.48901 18.4763H15.0475" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M2.90063 13.1869L23.0994 12.9391" stroke="#343434" strokeWidth="1.4" />
                                                                    <path className='group-hover:stroke-white' d="M21.7627 23.1563L23.5624 21.3526L20.3124 18.1026L22.1608 16.9204C22.1878 16.9045 22.2092 16.8808 22.2224 16.8524C22.2355 16.824 22.2397 16.7923 22.2344 16.7614C22.2292 16.7306 22.2146 16.7021 22.1928 16.6797C22.1709 16.6573 22.1428 16.6421 22.1121 16.636L15.9005 15.1817C15.8749 15.1764 15.8483 15.1776 15.8232 15.1852C15.7982 15.1927 15.7754 15.2064 15.7569 15.2249C15.7383 15.2434 15.7247 15.2662 15.7172 15.2913C15.7096 15.3163 15.7084 15.3429 15.7136 15.3685L17.0624 21.6979C17.0689 21.7287 17.0844 21.7568 17.1069 21.7788C17.1294 21.8007 17.158 21.8154 17.1889 21.8211C17.2198 21.8268 17.2517 21.8231 17.2806 21.8106C17.3094 21.798 17.3339 21.7772 17.3508 21.7507L18.5127 19.9063L21.7627 23.1563Z" stroke="#343434" strokeWidth="1.4" />
                                                                </svg> :
                                                                menu.name === "Earn with Doofdi" ?
                                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M14.6127 8.23821C16.8336 8.23821 18.6347 6.43629 18.6347 4.21461C18.6347 1.99293 16.8336 0.191772 14.6127 0.191772C12.391 0.191772 10.5891 1.99293 10.5891 4.21461C10.5891 6.43629 12.391 8.23821 14.6127 8.23821ZM14.6127 1.19785C16.2766 1.19785 17.6302 2.55071 17.6302 4.21456C17.6302 5.87841 16.2766 7.23127 14.6127 7.23127C12.9488 7.23127 11.5952 5.87841 11.5952 4.21456C11.5952 2.55071 12.9489 1.19785 14.6127 1.19785Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M13.8874 5.89198H14.0112C14.1477 5.89198 14.2588 5.78087 14.2588 5.64442V4.93348H14.7436C15.3918 4.93348 15.9203 4.47092 15.9203 3.90278C15.9203 3.33464 15.3918 2.87207 14.7436 2.87207H13.8875C13.751 2.87207 13.6399 2.98318 13.6399 3.11963V5.64442C13.6398 5.78087 13.751 5.89198 13.8874 5.89198ZM14.2588 3.41482H14.7436C15.0515 3.41482 15.3006 3.63384 15.3006 3.90278C15.3006 4.17258 15.0515 4.39073 14.7436 4.39073H14.2588V3.41482Z" fill="#343434" />
                                                                    <path className='group-hover:stroke-white group-hover:fill-white' d="M25.7703 8.64927C25.5934 8.59057 25.403 8.68579 25.345 8.86271C25.1927 9.31339 24.9887 9.5705 24.761 9.74107C24.6928 9.79104 24.6214 9.83151 24.5476 9.86884C24.5841 9.73076 24.6039 9.58873 24.6039 9.44436C24.6039 9.21823 24.554 8.98494 24.4293 8.77628C24.3222 8.59616 24.1707 8.45255 23.9985 8.35733C23.8263 8.26131 23.6319 8.21134 23.4351 8.21134C23.2447 8.21134 23.0511 8.26054 22.875 8.35891C22.8726 8.35972 22.8702 8.36048 22.8671 8.36211C22.8631 8.36449 22.8583 8.36531 22.8544 8.36845L22.8528 8.36927C22.852 8.36927 22.852 8.36927 22.852 8.36927L22.8441 8.37323C22.8441 8.37323 22.8441 8.3748 22.8432 8.3748C22.8432 8.3748 22.8424 8.3748 22.8424 8.37561C22.8361 8.37881 22.8313 8.38354 22.825 8.38831C22.825 8.38831 22.8241 8.38912 22.8226 8.38912C22.6567 8.49622 22.5242 8.63749 22.4338 8.80091C22.3378 8.97311 22.2878 9.16668 22.2878 9.36427C22.2878 9.56583 22.341 9.77134 22.4513 9.95618C22.5901 10.1863 22.7956 10.3727 23.0329 10.5092C23.0773 10.5354 23.1257 10.5576 23.1733 10.5806C23.0622 10.6496 22.9376 10.7155 22.8012 10.7711C22.6187 10.8457 22.4132 10.9004 22.191 10.9306C21.446 9.78642 20.3359 8.73347 18.7427 7.848C18.4896 7.70835 18.2309 7.58454 17.9674 7.47506C17.5207 7.93529 16.9803 8.30503 16.3781 8.55101C16.1417 8.6478 16.1147 8.84778 16.3908 8.8819C16.6352 8.91283 16.8788 8.94858 17.1216 8.99063V10.1999C15.0785 9.94201 13.5574 9.94201 11.5143 10.1999V8.99063C11.861 8.93192 12.2093 8.8819 12.56 8.84544C12.8838 8.81132 12.8798 8.57727 12.5775 8.42965C12.007 8.15431 11.5008 7.76472 11.0882 7.2926C9.80912 7.64254 8.67213 8.14796 7.83266 8.67243C6.33461 7.72506 5.00161 7.9718 4.59774 8.09083L5.14918 11.0322C4.04783 12.3938 3.16079 12.85 3.16079 12.85L0.935145 13.2888C0.620149 13.2888 0.326583 13.4475 0.153571 13.7101C-0.0193901 13.9736 -0.0479799 14.306 0.0765865 14.5948L1.78492 19.4627C1.9333 19.8055 2.27054 20.0276 2.64343 20.0276L6.29333 20.7917L7.83266 24.6662C8.6023 26.3706 10.6629 26.0127 10.7454 24.6114L11.0755 22.6873H16.4067C16.4067 22.6873 16.5718 23.545 16.6535 24.2821C16.7773 25.3945 18.4118 26.8378 20.0613 24.6114C21.9593 22.0485 24.9871 16.1793 22.5512 11.5455C22.8614 11.4757 23.1439 11.3694 23.3836 11.2369C23.5891 11.1234 23.766 10.9941 23.9144 10.8608C23.9675 10.8116 24.0159 10.7624 24.0619 10.7124C24.0651 10.7116 24.0691 10.7108 24.0715 10.71L24.0723 10.7108C24.4293 10.6521 24.815 10.5371 25.1609 10.2808C25.5077 10.0253 25.7989 9.63093 25.983 9.07391C26.0409 8.89759 25.9464 8.70798 25.7703 8.64927ZM23.8739 9.77281C23.8374 9.87757 23.7835 9.97512 23.7216 10.0545C23.6065 10.0378 23.4812 9.99183 23.3677 9.92673C23.2178 9.84182 23.0916 9.71964 23.0281 9.61173V9.61254C22.9813 9.53317 22.9598 9.44908 22.9598 9.36417C22.9598 9.28165 22.9813 9.19913 23.0209 9.12692C23.0606 9.05552 23.1177 8.99444 23.1939 8.94919C23.2701 8.90476 23.3526 8.88414 23.4351 8.88414C23.5176 8.88333 23.5993 8.90476 23.6723 8.94447C23.7437 8.98494 23.8065 9.04364 23.8525 9.12063C23.9032 9.20472 23.9318 9.31659 23.9318 9.44436C23.9318 9.55064 23.912 9.6649 23.8739 9.77281Z" fill="#343434" />
                                                                </svg> :
                                                                menu.name === "Billing and Payment" ?
                                                                <svg width="25" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' d="M20.5556 1H3.44444C2.09441 1 1 2.03319 1 3.30769V13.6923C1 14.9668 2.09441 16 3.44444 16H20.5556C21.9056 16 23 14.9668 23 13.6923V3.30769C23 2.03319 21.9056 1 20.5556 1Z" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M1 5H22" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' d="M6 12H8" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg> :
                                                                menu.name === "Setting" ?
                                                                <svg width="25" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path className='group-hover:stroke-white' fillRule="evenodd" clipRule="evenodd" d="M6.5647 10.0139C6.56448 8.98027 7.27618 8.09031 8.26461 7.88848C9.25304 7.68664 10.2429 8.22898 10.6288 9.18393C11.0145 10.1389 10.689 11.2403 9.85115 11.8148C9.01319 12.3892 7.89638 12.2765 7.18366 11.5457C6.78745 11.1395 6.56482 10.5885 6.5647 10.0139Z" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path className='group-hover:stroke-white' fillRule="evenodd" clipRule="evenodd" d="M7.16667 2.9235C7.15216 2.36047 7.43675 1.83371 7.90984 1.5478C8.38304 1.2619 8.97021 1.2619 9.4433 1.5478C9.91639 1.83371 10.201 2.36047 10.1865 2.9235V3.70025C11.3326 3.98826 12.3775 4.59913 13.2031 5.46392L13.8042 5.10209C14.1515 4.89356 14.5661 4.83737 14.9542 4.94624C15.3424 5.0551 15.6715 5.31983 15.867 5.68059C16.2841 6.43282 16.0387 7.38904 15.3145 7.83317L14.7548 8.17008C15.0987 9.37247 15.0987 10.651 14.7548 11.8534L15.3145 12.1903C16.0412 12.6346 16.2869 13.594 15.867 14.3472C15.6711 14.7077 15.3419 14.9719 14.9538 15.0803C14.5656 15.1888 14.1511 15.1323 13.8042 14.9236L13.2031 14.5617C12.3775 15.4275 11.3322 16.0392 10.1854 16.3276V17.1043C10.1999 17.6673 9.91542 18.1942 9.44222 18.4801C8.96912 18.7659 8.38196 18.7659 7.90876 18.4801C7.43567 18.1942 7.15107 17.6673 7.16559 17.1043V16.3276C6.01943 16.0396 4.97457 15.4287 4.14896 14.5639L3.54796 14.9257C3.20074 15.134 2.78641 15.19 2.39848 15.0811C2.01055 14.9722 1.68169 14.7077 1.48616 14.3472C1.06903 13.595 1.31443 12.6388 2.03857 12.1947L2.59839 11.8577C2.2544 10.6554 2.2544 9.3768 2.59839 8.17441L2.03857 7.83749C1.31194 7.39321 1.06622 6.4338 1.48616 5.68059C1.68206 5.32019 2.01125 5.05594 2.39941 4.94749C2.78758 4.83904 3.20197 4.89555 3.54901 5.10425L4.15002 5.46609C4.97524 4.60011 6.02014 3.98809 7.16667 3.69917V2.9235Z" stroke="#343434" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                : null
                                                                }
                                                                <span>{menu.name}</span>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Side Dwarer Ends here */}
                            <div className='Name text-[#E93439] text-[32px] font-semibold leading-9'>Doofdi Ai</div>
                            <div className='user-Buttons hidden md:flex gap-7 items-center'>
                                <div className='credit flex gap-3 items-center font-medium text-base'>
                                    <span>2839.917</span>
                                </div>
                                <div className='userAccount flex gap-3 items-center'>
                                    <div className='Profile-Picture xl:w-10 xl:h-10 lg:w-7 lg:h-7 w-5 h-5 border border-[#A0D9DB] bg-[white] rounded-full'>
                                    </div>
                                    <div className='user-name font-medium text-base'>Test Account</div>
                                </div>
                            </div>
                            <div onClick={() => setDrawer(!drawer)} className='hand-burger-menu md:hidden flex'>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        {
                            Tool==="Video-Creator"?
                            <VideoGenerator/>:
                            Tool==="Billing-and-Payment"?
                            <BillingandPayment/>:
                            Tool==="Earn-with-Doofdi"?
                            <EarnWithDoofdi />:
                            Tool==="Website-Promotion"?
                            <WebsitePromotion/>:
                            Tool==="Social-Marketing"?
                            <SocialMarketing/>:
                            Tool==="Overview-Summary"?
                            <OverviewSummary/>:
                            Tool==="Total Active Campaign"?
                            <TotalActiveCompaigns/>:
                            Tool==="Traffic"?
                            <Traffic/>:
                            Tool==="Engagements"?
                            <Traffic/>:
                            Tool==="Add Funds"?
                            <AddFunds/>:
                            Tool==="Recent Activity"?
                            <RecentActivity/>:
                            Tool==="Wallet Overview"?
                            <WalletOverview/>:
                            Tool==="Notifications"?
                            <Notifications/>:
                            Tool==="Campaign Overview"?
                            <CampaignOverview/>:
                            Tool==="Transactions"?
                            <Transactions/>:
                            <div className='mt-3 h-screen w-full rounded-[10px] bg-white'>loading...</div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserDashBoard