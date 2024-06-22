import { Link } from 'react-router-dom'
import ShareIcon from "../../Assets/share_icon.svg";
const SocialMediaButton = ({text,to}) => {
    return (
        <><Link  className='bg-[#EAEAEA] items-center flex gap-[6px]  p-[2.5px] pr-3 rounded-[30px]'>
            <div className='w-[21px] h-[21px]'>
                {/* <img className='w-full h-full object-cover' src="/image 39.svg" alt="" /> */}
            </div>
            <span className='font-normal leading-[9px] text-[8px]'>{text}</span>
            <img src={ShareIcon}/>
        </Link ></>
    )
}

export default SocialMediaButton