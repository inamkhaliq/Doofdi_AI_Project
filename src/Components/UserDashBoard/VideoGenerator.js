import { Link } from 'react-router-dom'
import UploadIcon from "../../Assets/Upload_icon.svg"
import DownloadIcon from "../../Assets/Download_icon.svg"
import thumbnail from "../../Assets/thumbnail.jpg"
import ButtonOrange from '../Buttons/ButtonOrange'
import SocialMediaButton from '../Buttons/SocialMediaButton'
const VideoGenerator = () => {
    let url="https://youtu.be/2BnTYEafRQc?si=NX0qMV5pvbu8YWKN"
    let title=document.title
    return (
        <>
            <div className='heading w-full mt-[40px] mb-5'>
                <h1 className='text-[#E93439] md:text-left text-center font-semibold text-[32px] leading-[38px]'>
                    Doofdi AI Video Generator
                </h1>
            </div>
            <div className='work-Banch pt-[42px] pl-[41px] pb-8 pr-[58px]  xl:w-[96.3%] w-full shadow-md bg-white rounded-[10px]'>
                <div>
                    <form action="" className='gap-0 md:gap-[67px] flex flex-col flex-wrap '>
                        <div className='flex flex-col items-start gap-[18px]'>
                            <div className='w-full text-left flex flex-col gap-[14px] '>
                                <label className=' font-normal text-xl text-[#000000]'>Create a Video from text prompt</label>
                                <textarea rows={3} cols={50}  placeholder='Enter your prompt' className='leading-4 border-[#c4c4c4] text-[#858585] text-[14px] font-normal pl-[14px] pt-[14px]  border outline-none h-[78px] w-full rounded-md' />
                            </div>
                            <div className='select-dropwoen  relative w-full text-left flex flex-col gap-[14px]'>
                                <label className=' font-normal text-xl text-[#000000]'>Duration</label>
                                <select className='text-[15px] font-normal leading-[18px] text-[#353535] appearance-none px-5 w-full border border-[#c4c4c4]  h-14 rounded-md outline-none'>
                                    <option className='hover:bg-[#E93439] hover:text-[white]'>5 minutes (50 Credits)</option>
                                    <option>4 minutes (50 Credits)</option>
                                    <option>3 minutes (50 Credits)</option>
                                </select>
                            </div>
                        </div>
                        <div className='gap-6 lg:gap-0 flex flex-wrap justify-between items-end'>
                            <div className='text-left'>
                                <p className='font-normal mb-5 text-xl'>Upload Branding (Optional)</p>
                                <input className='hidden' type="file" id='choose' />
                                <label className='bg-[#1C274C] cursor-pointer py-3 px-8 w-fit flex gap-2 items-center  rounded-[40px]' htmlFor='choose'>
                                    <img src={UploadIcon} alt={"uploadicon"}/>
                                    <span className='font-normal text-sm leading-4 text-[#F7F7F7]'>Browse Files</span>
                                </label>
                            </div>
                            <div className='flex flex-wrap gap-4 items-baseline'>
                                <span className='order-2 lg:order-1 text-[#505050] font-normal leading-3 text-[10px]'>10 Credits per Minute</span>
                                <ButtonOrange className='py-3 order-1 lg:order-2 px-11 border rounded-[40px] text-sm leading-4 font-normal border-[#C84545] shadow-xl shadow-[] text-[#F7F7F7] bg-[#E93439]' text='Generate' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='px-5 md:px-0 w-full mt-[37px] mb-[43px] flex flex-wrap gap-6 items-end'>
                <div className=' w-full lg:w-[53.69%] rounded'>
                    <video width={"100%"} className='h-[291px] object-fill rounded' controls src="../" poster={thumbnail}></video>
                </div>
                {/* 1035 */}
                <div className='w-full lg:w-[36%] pb-[14px]'>
                    <div className='social-links w-[75.2%] mb-5 flex justify-between'>
                        {/* <FacebookShareButton url={url} title={title}> */}
                            <SocialMediaButton text={"Twitter"} />
                        {/* </FacebookShareButton> */}
                        <SocialMediaButton text={"Instagram"} to={"/"}/>
                        <SocialMediaButton text={"Facebook"} to={"/"}/>
                    </div>
                    <div className='download-button  flex gap-3 items-baseline'>
                        <Link to={"/"} className=' w-[75.2%]  flex gap-[13px] justify-center items-center  rounded-[30px] bg-[#E93439] py-3' >
                            <span className='text-[#FFFFFF] font-normal text-xs leading-[14px]'>Download Video</span>
                            <img src={DownloadIcon} alt={"downloadicon"}/>
                        </Link>
                        <p className='font-normal leading-3 text-[10px] text-[#505050]'>5 Credits Require</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGenerator