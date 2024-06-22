import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AdminDashboard = () => {
    let UserMenues = [
        {
            name: "Dashboard",
            slug: "Dashboard",
        },
        {
            name: "Reviews",
            slug: "Reviews",
        },
        {
            name: "Customers",
            slug: "Customers",
        },
        {
            name: "Invitations",
            slug: "Invitations",
        },
        {
            name: "Widgets",
            slug: "Widgets",
        },
        {
            name: "Landing Page",
            slug: "Landing-Page",
        },
        {
            name: "Configurations",
            slug: "Configurations",
        },
    ]
    let parms = useParams();
    let Tool = parms.tool
    let [drawer, setDrawer] = useState(true);
    let [userTool, setUserTool] = useState("Home");
    let updateTools = () => {
        setUserTool(Tool.tool)
    }
    return (
        <section className='bg-[#dde1ec]'>
            <div className='h-screen flex justify-center items-center'>
                <div className='w-[95%] m-auto bg-[#f0f3f8] rounded-[30px]'>
                    <div className='flex flex-wrap '>
                        <div className='md:w-[18.25%] hidden  md:flex flex-wrap flex-col gap-5 p-5 bg-[#2649e8] rounded-b-[30px] rounded-tl-[30px]'>
                            <div className='user  flex gap-3 items-center w-full  '>
                                <div className='user-icon w-12 h-12 rounded-full'>
                                    <img 
                                        src="https://s3-alpha-sig.figma.com/img/8a1b/1ba4/33b7d4b958ba366944d0776e05bf335e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB~IQUCvVBk1Uw7J6LyFHeLtp45HZMV-zEzeMsG4tcElu9~aoiFLDEbyKbLeJiPJHaiWzcHnFucqoarLRNxifzf4owkXKfir2EV3NgftyRU0HUFlsCK8qfb2ypAyKWY-xmRQIVqWot7VDZ8XB0y32h~vmeSxP8aU1e9cZQaGG3cGHFABTcKgqyY~-B9HQcODV3SdEZ0JBzirUTu7Iic4Ga0ST~E3EHb1IEeDE0dpIXAvaUqi94PLkzrmPEo4MfACSdf~vIzOTxVy6XwcEJ0sO0hInNR0Oz0LqFr9gUZR9YOupMqT-gRW2oa9MJEAw7xqoamVTOxgLI4EwdzvlskBlA__"
                                        className='w-full h-full object-cover rounded-full' alt="logo" 
                                    />
                                </div>
                                <div className='user-details text-left'>
                                    <h1 className='text-white text-base'>Allie Simon</h1>
                                    <p className='text-[#bebebe] text-sm'>simon@gmail.com</p>
                                </div>
                            </div>
                            <div className='User-Menu-Options'>
                                <ul className='flex flex-col list-none  text-left'>
                                    {
                                        UserMenues?.map((menu, indx) => {
                                            return (
                                                <li key={indx} className='py-4 group'>
                                                    <Link 
                                                        to={"/Admin/"+menu.slug} onClick={() => { setUserTool(menu.slug) }} 
                                                        className='py-1 font-normal group-hover:bg-[#ffffff65]  rounded-md text-[#F7F7F7] md:text-sm text-[10px]  flex items-center gap-2' >
                                                        {
                                                            menu.name == "Dashboard" ?
                                                            <svg fill="#bebebe" width="20px" height="20px" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 20V19M8 20V16M12 20V12" stroke="#bebebe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            </svg> :
                                                            menu.name == "Reviews" ?
                                                            <svg fill='#bebebe' width="20px" height="20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57 L12,5l1.57,3.43L17,10L13.57,11.57z"/>
                                                            </svg>   :
                                                            menu.name == "Customers" ?
                                                            <svg fill="#bebebe" width="20px" height="20px" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z" fill="#bebebe"/>
                                                                <path d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z" fill="#bebebe"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z" fill="#bebebe"/>
                                                                <path d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z" fill="#bebebe"/>
                                                            </svg> :
                                                            menu.name == "Invitations" ?
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Complete">
                                                                    <g id="mail-read">
                                                                        <g>
                                                                            <polyline fill="none" points="4 9 12 14 20 9" stroke="#bebebe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                                            <polyline fill="none" points="3 8.5 12 3.5 21 8.5" stroke="#bebebe" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                                            <path d="M21,8.5v10a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V8.5" fill="none" stroke="#bebebe" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"/>                                                                
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg> :
                                                            menu.name == "Widgets" ?
                                                            <svg width="20px" height="20px" fill='#bebebe' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_2" dataName="Layer 2">
                                                                    <g id="invisible_box" dataName="invisible box"></g>
                                                                    <g id="icons_Q2" data-name="icons Q2">
                                                                        <path d="M18,34v6H10V34h8m2-4H8a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V32a2,2,0,0,0-2-2Z"/>
                                                                        <path d="M18,8V22H10V8h8m2-4H8A2,2,0,0,0,6,6V24a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"/>
                                                                        <path d="M38,8v6H30V8h8m2-4H28a2,2,0,0,0-2,2V16a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"/>
                                                                        <path d="M38,26V40H30V26h8m2-4H28a2,2,0,0,0-2,2V42a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2Z"/>
                                                                    </g>
                                                                </g>
                                                            </svg>:
                                                            menu.name == "Landing Page" ?
                                                            <svg fill="#bebebe" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.002 460.002">
                                                                <g>
                                                                    <g>
                                                                        <g>
                                                                            <path d="M427.138,0H32.865C14.743,0,0.001,14.743,0.001,32.865v394.272c0,18.122,14.743,32.865,32.865,32.865h394.271
                                                                                c18.122,0,32.865-14.743,32.865-32.865V32.865C460.003,14.743,445.26,0,427.138,0z M30.001,32.865
                                                                                c0-1.58,1.285-2.865,2.865-2.865h394.271c1.58,0,2.865,1.285,2.865,2.865v82.863H30.001V32.865z M430.003,427.137
                                                                                c0,1.58-1.285,2.865-2.865,2.865H32.865c-1.58,0-2.865-1.285-2.865-2.865v-281.41h400.002V427.137z"/>
                                                                            <circle cx="76.85" cy="72.364" r="26.249"/>
                                                                            <path d="M169.326,302.865h47.109v47.109c0,8.284,6.716,15,15,15s15-6.716,15-15v-47.109h47.109c8.284,0,15-6.716,15-15
                                                                                s-6.716-15-15-15h-47.109v-47.109c0-8.284-6.716-15-15-15s-15,6.716-15,15v47.109h-47.109c-8.284,0-15,6.716-15,15
                                                                                S161.042,302.865,169.326,302.865z"/>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg> :
                                                            menu.name == "Configurations" ?
                                                            <svg fill="#bebebe" height="20px" width="20px" version="1.1" id="Capa_1"  
                                                                    viewBox="0 0 54 54">
                                                                <g>
                                                                    <path d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
                                                                        c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
                                                                        c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
                                                                        C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
                                                                        c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
                                                                        c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
                                                                        c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
                                                                        c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
                                                                        c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
                                                                        c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
                                                                        c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
                                                                        S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
                                                                        C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
                                                                        c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
                                                                        c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
                                                                        c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
                                                                        c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
                                                                        C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
                                                                        c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
                                                                        c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
                                                                        C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
                                                                        c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
                                                                        l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"/>
                                                                    <path d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7
                                                                        s7,3.141,7,7S30.859,34,27,34z"/>
                                                                </g>
                                                            </svg> 
                                                            : null
                                                        }
                                                        <span className='text-[#bebebe]'>{menu.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='md:w-[81.75%] w-full pb-8 pt-4 px-10 flex justify-center'>
                            <div className='md:w-[100%]'>
                                {/* <div className='relative Top-Bar   pr-6 pl-10 flex justify-between items-center w-full h-[102px] border-b border-[#DDDDDD]'>
                                    
                                </div> */}
                                <div className='flex flex-col gap-10 '>
                                    <div className='header'></div>
                                    <div className='charts'></div>
                                    <div className='engagement'></div>
                                    <div className='social-nmedia flex flex-wrap gap-10'>
                                        <div className='bg-white rounded-2xl p-6'>
                                            <div className='card-header flex gap-4'>
                                                <div className='card-image'>
                                                    <img className='w-12 h-12 object-cover rounded-lg' src="https://techireland.s3.amazonaws.com/multinationals/logos/000/000/209/medium/46b2ea7183731b1f317f8c134061178f0a8d4956.png?1493908414" alt="Yelp" />
                                                </div>
                                                <div className='flex flex-col items-baseline gap-2'>
                                                    <h1 className='text-sm font-medium'>Yelp</h1>
                                                    <div className='flex gap-2'>
                                                        <span className='font-medium text-[12px]'>5.0</span>
                                                        <div className='stars flex gap-1 '>
                                                            <span>
                                                                <svg height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" >
                                                                <polygon fill="#EFCE4A"  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" >
                                                                <polygon fill="#EFCE4A"  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" >
                                                                <polygon fill="#EFCE4A"  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" >
                                                                <polygon fill="#EFCE4A"  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.867 53.867" >
                                                                <polygon fill="#EFCE4A"  points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <span className='text-[10px] text-gray-400'>40 reviews</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='card-body'>
                                                <div className='progress-bars'>
                                                    <progress value={"20"} max={"100"}></progress>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminDashboard