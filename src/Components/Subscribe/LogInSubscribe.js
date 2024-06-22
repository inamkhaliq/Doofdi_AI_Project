import { Link } from 'react-router-dom'
import FbIcon from '../../Assets/FacebookColor.svg'
import InstagramColor from '../../Assets/InstagramColor.svg'
import XcomColor from '../../Assets/XcomColor.svg'
import YoutubeColor from '../../Assets/YoutubeColor.svg'
const LogInSubscribe = () => {
    const SocialLinks=[
        {
            name:"Facebook",
            image:FbIcon,
        },
        {
            name:"Instagram",
            image:InstagramColor,
        },
        {
            name:"x.com",
            image:XcomColor,
        },
        {
            name:"Youtube",
            image:YoutubeColor,
        },
    ]
    return (
        <section className='w-full md:pb-6  py-5 bg-[#f7f7f7]'>
            <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto'>
                <div className='flex flex-wrap items-center justify-between '>
                    <div className='xl:w-1/2 w-full flex flex-wrap gap-5'>
                        <div className='logo w-[187px] h-20'>
                            <img className='w-full' src="/LOGO.svg" alt="Doofdi logo" />
                        </div>
                        <div className='w-full flex flex-wrap gap-6 font-normal text-base text-left text-[#191C29]'>
                            <p>
                                Stay up to date on features and releases by joining our newsletter.
                            </p>
                            <p>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                        </div>
                    </div>
                    <div className='md:w-[18.5%] mt-12 w-full'>
                        <h2 className='md:font-normal md:text-base font-bold text-left'>Follow us</h2>
                        {
                            SocialLinks.map((link,indx)=>{
                                return(
                                    <div key={indx} className='text-left my-4'>
                                        <Link to={"/"} className='flex gap-6 font-normal text-xs text-black  h-6 '>
                                            <img className='w-[22px] h-[22px]' src={link.image} alt={link.name}/>
                                            <span className=' font-normal text-xs text-black'>{link.name}</span>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LogInSubscribe