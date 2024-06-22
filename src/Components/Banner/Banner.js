import ButtonOrange from '../Buttons/ButtonOrange'
import Facebook from "../../Assets/Facebook.svg"
import Instagram from "../../Assets/Instagram.svg"
import Youtube from "../../Assets/Youtube.svg"
import Xcom from "../../Assets/Xcom.svg"
import Star from "../../Assets/Star.svg"
import InstagramIcon from "../../Assets/InstagramIcon.svg"
import YoutubeIcon from "../../Assets/YoutubeIcon.svg"
import PintrestIcon from "../../Assets/PintersetIcon.svg"
import LinkedIn from "../../Assets/LinkedInIcon.svg"
import XcomIcon from "../../Assets/XcomIcon.svg"
import FacebookIcon from "../../Assets/FacebookIcon.svg"
import LeftCard from "../../Assets/BannerLeftCard.jpg"
import RightCard from "../../Assets/BannerRightCard.jpg"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <section className='relative xl:pt-44 lg:pt-40 md:pt-28 sm:pt-28 pb-14 pt-10 bg-[#F7F7F7]'>
        <div className='banner max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto '>
            <div className='flex flex-col justify-center items-center gap relative'>
                <div className='social-media hidden  sm:flex w-full absolute md:-top-12 lg:-top-32 xl:-top-24  sm:-top-16  justify-between'>
                    <div className='flex flex-col items-end'>
                        <div className='facebook md:w-20 lg:w-36 w-14'>
                            <img  className='w-full' src={Facebook} alt="facebook blur icon" />
                        </div>
                         <div className='Twitter md:w-14 lg:w-28 w-9'>
                            <img className='w-full' src={Xcom} alt="X.com" />
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>                       
                        <div className='instahram md:w-20 lg:w-36 w-14'>
                            <img className='w-full' src={Instagram} alt="instahram blur icon" />
                        </div>
                        <div className='youtube md:w-14 lg:w-28 w-9'>
                            <img className='w-full' src={Youtube} alt="youtubecom" />
                        </div>
                    </div>
                </div>
                <div className='Stars  md:w-[400px] w-full sm:w-[65.50%] xl:w-[720px] flex justify-between md:py-0 py-3'>
                    <div className=''>
                        <img src={Star} alt='star'/>
                    </div>
                    <p className='font-medium text-xl text-[#E93439]'>Boost Social Media</p>
                    <div>
                    <img src={Star} alt='star'/>
                    </div>
                </div>
                <div className='Title relative sm:w-[80%] md:w-[70%] lg:w-[720px]'>
                    <h1 className='font-bold text-3xl md:text-4xl  lg:text-[54px] xl:text-[64px] md:leading-10 lg:leading-[77px]  text-center'>Unlock Your Online Potential with <span className='underline text-[#CB5846]'>Doofdi</span></h1>
                </div>
                <div className='hidden sm:flex stars xl:w-[935px] lg:w-[80%] md:w-10/12 w-full  justify-between md:py-0 relative  -top-10'>
                    <div>
                        <img src={Star} alt='star'/>
                    </div>
                    <div>
                        <img src={Star} alt='star'/>
                    </div>
                </div>
                <div className=' descreiption flex flex-col justify-center items-center gap-3 md:gap-12 xl:gap-24 lg:gap-36 '>
                    <div className='flex flex-col md:gap-14 gap-0 justify-center items-center'>
                        <p className='font-normal md:text-base text-base md:max-w-[70%] sm:w-[60%] xl:w-[65.5%] text-center'>Discover the power of AI content creation and social media promotion. Boost your online presence effortlessly.</p>
                        <ButtonOrange text='Learn More' className='text-[#EDECEB] shadow-2xl py-3 px-8 bg-[#E93439] md:my-0 my-6 rounded-[40px]'></ButtonOrange>
                    </div>
                    <div className='flex lg:gap-12 md:gap-6 gap-3 z-10'>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'>
                            <img src={InstagramIcon} alt='instagram'/>
                        </Link>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'>                            
                            <img src={YoutubeIcon} alt="YoutubeIcon"/>
                        </Link>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'>   
                            <img src={PintrestIcon} alt="PintrestIcon"/>
                        </Link>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'>   
                            <img src={LinkedIn} alt="LinkedInIcon"/>
                        </Link>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'> 
                            <img src={XcomIcon} alt='X Icon'/>
                        </Link>
                        <Link to={"/"} className='lg:w-[33px] lg:h-[33px] md:w-6 md:h-6 w-5 h-5'> 
                            <img src={FacebookIcon} alt="FacebookIcon"/>
                        </Link>
                    </div>
                </div>
                <div className='absolute sm:bottom-5 xl:-bottom-0 lg:bottom-8 md:bottom-10 people flex justify-between w-full flex-wrap items-center'>
                    <div className='sm:flex hidden md:flex xl:w-1/5 sm:w-1/5 shadow-2xl rounded-md' style={{transform:"rotate(346deg)", transformOrigin:"bottom"}}>
                        <img className='w-full rounded-md' src={LeftCard} alt="person chat on tablet" />
                    </div>
                    <div className='sm:flex hidden md:flex  xl:w-1/5 sm:w-1/5 rounded-md shadow-2xl' style={{transform:"rotate(14deg)", transformOrigin:"bottom"}}>
                        <img className='w-full rounded-md' src={RightCard} alt="couple chating on mobile" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Banner