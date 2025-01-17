import React, { useState } from 'react'
import ButtonOrange from '../Buttons/ButtonOrange'
import { Link, } from 'react-router-dom';


const Header = () => {
    let [open, setOpen] = useState(false);
    let [active,setActive]=useState("Home");
    const getActive=(e)=>{
        // console.log(e.target.innerText)
        setActive(e.target.innerText)
    }
    return (
        <section className='bg-[#F7F7F7]'>
            <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto   h-[73px] border-b-[0.5px]'>
                <div className='header flex justify-between  items-center h-[73px] text-[#667986]'>
                    <div className='logo text-[#CB5846] w-32 h-12 font-semibold lg:text-2xl text-lg'>
                        <Link to={"/"} onClick={()=>{setActive("Home")}} className=''>
                            <img src="/LOGO.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className='menu md:flex hidden'>
                        <ul className='flex list-none font-normal text-sm sm:gap-4 lg:gap-12' >
                            <li className=''>
                                <Link to={"/"} className={`${active=="Home"&& "border-[#E93439] border-b text-[#E93439]"}`} onClick={getActive}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={"/"} className={`${active=="About"&& "border-[#E93439] border-b text-[#E93439]"}`} onClick={getActive}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to={"/Subscription/Home"} className={`${active=="Services"&& "border-[#E93439] border-b text-[#E93439]"}`} onClick={getActive}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to={"/"} className={`${active=="Contact"&& "border-[#E93439] border-b text-[#E93439]"}`} onClick={getActive}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='dignin-signup md:flex hidden lg:gap-8 gap-3 items-center'>
                        <Link to={"/"+"Login"} onClick={getActive}>Sign In</Link>
                        {/* <a className='bg-[#CB5846] text-sm font-normal rounded-[14px] py-[5px] px-[20px] text-white' href="">Sign Up</a> */}
                        <ButtonOrange onClick={getActive} text='Sign Up' className='text-[#EDECEB] md:py-2 shadow-2xl md:px-8 rounded-[40px] bg-[#CB5846]' href={'/'+'SignUp'}></ButtonOrange>
                    </div>
                    
                       
                            <div onClick={() => setOpen(!open)} className='handburger-menu md:hidden'>
                                <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div  className={`${open?"block":"hidden"} relative`}>
                                <div
                                    className={
                                        ` fixed inset-y-0  left-0 w-full 
                                        ${open?"ml-0":"ml-[100%]"}
                                        bg-[#fafafa] shadow z-50  
                                        animi`
                                    }
                                >
                                    {/* Close button */}
                                    <button
                                        className="absolute top-10 right-7  focus:outline-none"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                    {/* Drawer content */}
                                    <div className="p-4 " onClick={() => setOpen(!open)}>
                                        <div className='logo font-semibold text-2xl border-b-[0.5px] h-[73px] w-full'>
                                            <div className='logo text-[#CB5846] w-32 h-12 font-semibold lg:text-2xl text-lg'>
                                                <Link to={"/"} className=''>
                                                    <img src="/LOGO.svg" alt="logo" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='menu '>
                                            <ul className='flex flex-col items-start text-left justify-center flex-wrap list-none font-normal text-lg gap-5 ' >
                                                <li className='active:text-black text-black flex items-center justify-center gap-2'>
                                                    <Link to={"/"} className="flex justify-center items-center gap-4" >
                                                        <svg className='inline-block' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 495.398 495.398" >
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                                                            v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                                                            c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                                                            c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                                                                        <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                                                            c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                                                            c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span>Home</span>
                                                    </Link>
                                                </li>
                                                <li className='flex items-center justify-center gap-2'>
                                                    <Link to={"/"} className="flex justify-center items-center gap-4" >
                                                        <svg className='inline-block' width="16px" height="16px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <g id="about-white" fill="#000000" transform="translate(42.666667, 42.666667)">
                                                                    <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51168 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.154987,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51168 331.154987,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.44,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.44,384 213.333333,384 Z M240.04672,128 C240.04672,143.46752 228.785067,154.666667 213.55008,154.666667 C197.698773,154.666667 186.713387,143.46752 186.713387,127.704107 C186.713387,112.5536 197.99616,101.333333 213.55008,101.333333 C228.785067,101.333333 240.04672,112.5536 240.04672,128 Z M192.04672,192 L234.713387,192 L234.713387,320 L192.04672,320 L192.04672,192 Z" id="Shape">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span>About</span>
                                                    </Link>
                                                </li>
                                                <li className='flex items-center justify-center gap-2'>
                                                    <Link to={"/Subscription/Home"} className="flex justify-center items-center gap-4" >
                                                        <svg className='inline-block' width={"16px"} height={"16px"} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                                            viewBox="0 0 496 496" >
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path d="M482.344,264.968C491.024,256.288,496,244.272,496,232c0-12.272-4.976-24.288-13.656-32.968L416,132.688L340.688,208
                                                                            l32,32L240,372.688l-32-32L132.688,416l66.344,66.344C207.712,491.024,219.728,496,232,496c12.272,0,24.288-4.976,32.968-13.656
                                                                            l18.456-18.456C306.824,484.576,336.504,496,368,496c70.576,0,128-57.424,128-128c0-31.504-11.424-61.192-32.112-84.576
                                                                            L482.344,264.968z M363.312,208L416,155.312L428.688,168L376,220.688L363.312,208z M155.312,416L208,363.312L220.688,376
                                                                            L168,428.688L155.312,416z M271.832,452.848l-18.176,18.184C247.952,476.736,240.064,480,232,480
                                                                            c-8.064,0-15.952-3.264-21.656-8.968L179.312,440L232,387.312l8,8L395.312,240l-8-8L440,179.312l31.032,31.032
                                                                            C476.736,216.048,480,223.936,480,232c0,8.064-3.264,15.952-8.968,21.656l-18.176,18.176L271.832,452.848z M480,368
                                                                            c0,61.76-50.24,112-112,112c-27.232,0-52.984-9.656-73.344-27.344l158-158C470.344,315.008,480,340.76,480,368z"/>
                                                                        <path d="M208,336v-29.792c10.232-2.96,20.096-7.048,29.44-12.208l21.072,21.08l56.568-56.568L294,237.44
                                                                            c5.168-9.344,9.248-19.2,12.208-29.44H336v-80h-29.792c-2.96-10.232-7.048-20.096-12.208-29.44l21.08-21.072L258.512,20.92
                                                                            L237.44,42c-9.344-5.168-19.2-9.248-29.44-12.208V0h-80v29.792C117.768,32.752,107.904,36.84,98.56,42L77.488,20.92L20.92,77.488
                                                                            L42,98.56c-5.168,9.344-9.248,19.2-12.208,29.44H0v80h29.792c2.96,10.232,7.048,20.096,12.208,29.44l-21.08,21.072l56.568,56.568
                                                                            L98.56,294c9.344,5.168,19.2,9.248,29.44,12.208V336H208z M101.432,277.168l-5.376-3.28l-18.56,18.568l-33.944-33.944
                                                                            l18.568-18.56l-3.28-5.376c-6.92-11.328-12.008-23.592-15.12-36.448L42.24,192H16v-48h26.24l1.48-6.128
                                                                            c3.112-12.848,8.192-25.12,15.12-36.448l3.28-5.376l-18.568-18.56l33.944-33.944l18.56,18.568l5.376-3.28
                                                                            c11.328-6.92,23.592-12.008,36.448-15.12L144,42.24V16h48v26.24l6.128,1.48c12.848,3.112,25.12,8.192,36.448,15.12l5.376,3.28
                                                                            l18.56-18.568l33.944,33.944l-18.568,18.56l3.28,5.376c6.92,11.328,12.008,23.592,15.12,36.448l1.472,6.12H320v48h-26.24
                                                                            l-1.48,6.128c-3.112,12.848-8.192,25.12-15.12,36.448l-3.28,5.376l18.568,18.56l-33.944,33.944l-18.56-18.568l-5.376,3.28
                                                                            c-11.328,6.92-23.592,12.008-36.448,15.12L192,293.76V320h-48v-26.24l-6.128-1.48
                                                                            C125.024,289.168,112.76,284.088,101.432,277.168z"/>
                                                                        <path d="M256,168c0-48.52-39.48-88-88-88s-88,39.48-88,88s39.48,88,88,88S256,216.52,256,168z M96,168c0-39.704,32.296-72,72-72
                                                                            s72,32.296,72,72s-32.296,72-72,72S96,207.704,96,168z"/>
                                                                        <rect x="231.995" y="324.69" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 647.2864 403.8884)" width="16" height="22.624"/>
                                                                        <rect x="324.683" y="231.998" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 403.8752 647.2874)" width="22.624" height="16"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span>Services</span>
                                                    </Link>
                                                </li>
                                                <li className='flex items-center justify-center gap-2'>
                                                    <Link to={"/"} className="flex justify-center items-center gap-4" >
                                                        <svg className='inline-block' width="16px" height={"16px"} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                                                                viewBox="0 0 337.559 337.559" >
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path d="M337.559,67.704v-28.33c0-17.506-14.242-31.748-31.748-31.748h-54.572c-4.932-3.021-10.727-4.765-16.922-4.765H32.5
                                                                            C14.58,2.86,0,17.44,0,35.36v266.838c0,17.921,14.58,32.5,32.5,32.5h201.816c6.196,0,11.992-1.745,16.925-4.767h54.569
                                                                            c17.506,0,31.748-14.242,31.748-31.748v-28.33c0-9.715-4.391-18.42-11.287-24.248c6.896-5.828,11.287-14.533,11.287-24.248
                                                                            v-28.331c0-9.715-4.391-18.42-11.287-24.248c6.896-5.828,11.287-14.533,11.287-24.248V116.2c0-9.715-4.391-18.42-11.287-24.248
                                                                            C333.168,86.123,337.559,77.418,337.559,67.704z M251.816,302.198c0,9.649-7.851,17.5-17.5,17.5H32.5
                                                                            c-9.649,0-17.5-7.851-17.5-17.5V35.36c0-9.649,7.851-17.5,17.5-17.5h201.816c9.649,0,17.5,7.851,17.5,17.5V302.198z
                                                                            M322.559,298.184c0,9.235-7.513,16.748-16.748,16.748h-41.595c1.673-3.912,2.601-8.216,2.601-12.733v-49.093h38.994
                                                                            c9.235,0,16.748,7.513,16.748,16.748V298.184z M322.559,221.357c0,9.235-7.513,16.748-16.748,16.748h-38.994v-61.827h38.994
                                                                            c9.235,0,16.748,7.513,16.748,16.748V221.357z M322.559,144.53c0,9.235-7.513,16.748-16.748,16.748h-38.994V99.451h38.994
                                                                            c9.235,0,16.748,7.513,16.748,16.748V144.53z M322.559,67.704c0,9.235-7.513,16.748-16.748,16.748h-38.994V35.36
                                                                            c0-4.518-0.929-8.822-2.602-12.735h41.596c9.235,0,16.748,7.513,16.748,16.748V67.704z"/>
                                                                        <rect x="40.413" y="230.024" width="185.991" height="15"/>
                                                                        <path d="M66.891,206.201h133.035c2.263,0,4.405-1.021,5.829-2.78c1.424-1.759,1.978-4.066,1.507-6.279
                                                                            c-3.595-16.907-13.071-32.176-26.474-43.02c8.782-10.818,13.689-24.438,13.689-38.522c0-33.674-27.396-61.07-61.07-61.07
                                                                            s-61.07,27.396-61.07,61.07c0,14.084,4.908,27.704,13.689,38.522c-13.402,10.844-22.878,26.112-26.472,43.02
                                                                            c-0.471,2.213,0.083,4.521,1.507,6.279C62.486,205.18,64.628,206.201,66.891,206.201z M101.343,161.584
                                                                            c1.988-1.245,3.279-3.35,3.488-5.687c0.209-2.337-0.687-4.637-2.422-6.216c-9.579-8.718-15.072-21.14-15.072-34.081
                                                                            c0-25.403,20.667-46.07,46.07-46.07c25.403,0,46.07,20.667,46.07,46.07c0,12.941-5.494,25.363-15.072,34.081
                                                                            c-1.735,1.579-2.631,3.879-2.422,6.216c0.209,2.337,1.5,4.441,3.488,5.687c11.154,6.989,19.735,17.49,24.42,29.618H76.923
                                                                            C81.608,179.074,90.189,168.571,101.343,161.584z"/>
                                                                        <rect x="63.83" y="259.688" width="139.156" height="15"/>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span>Contact</span>
                                                    </Link>
                                                </li>
                                                <li className='flex items-center justify-center gap-2'>
                                                    <Link to={"/Login"} className="flex justify-center items-center gap-4" >
                                                        <svg height="16px" width="16px" version="1.1" id="Capa_1"  
                                                                viewBox="0 0 60.671 60.671" >
                                                            <g>
                                                                <g>
                                                                    <ellipse className='fill-[#010002]' cx="30.336" cy="12.097" rx="11.997" ry="12.097"/>
                                                                    <path className='fill-[#010002]' d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
                                                                        C48.354,35.818,42.661,30.079,35.64,30.079z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span>Sign In</span>
                                                    </Link>
                                                </li>
                                                <li className='flex items-center justify-center gap-2'>
                                                    <Link to={"/SignUp"} className="flex justify-center items-center gap-4"  >
                                                        <svg fill="#000000" height="16px" width="16px" version="1.1" id="Capa_1"  
                                                                viewBox="0 0 310 310" >
                                                            <path d="M300.606,159.727l-45.333-45.333c-5.857-5.858-15.355-5.858-21.213,0L225,123.454V15c0-8.284-6.716-15-15-15H20
                                                                C11.716,0,5,6.716,5,15v240.002c0,8.284,6.716,15,15,15h85V295c0,8.284,6.716,15,15,15h45.333c3.979,0,7.794-1.581,10.607-4.394
                                                                l124.667-124.667C306.465,175.081,306.465,165.585,300.606,159.727z M35,30h160v123.454l-85.606,85.605
                                                                c-0.302,0.301-0.581,0.619-0.854,0.942H35V30z M159.12,280H135v-24.121l109.667-109.666l24.12,24.12L159.12,280z"/>
                                                            </svg>
                                                        <span>Sign Up</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                </div>
                            </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Header