import uploadIcon from '../../Assets/Upload_icon.svg'
const SocialMarketing = () => {
    return (
        <div className='pt-[33px] pb-40 px-5 md:px-0'>
            <div className='heading w-full '>
                <h1 className="text-[#E93439]  text-center font-semibold text-[32px] leading-[38px]">
                    Doofdi Social Media Promotion
                </h1>
            </div>
            <div className='work-Banch md:w-[96.5%] mt-[33px] shadow-md pt-8 pb-[33px] pl-10 pr-8 w-full bg-white rounded-[10px]'>
                <div>
                    <h1 className='font-semibold text-[#E93439] text-2xl leading-[29px] text-left'>Answer the Questions</h1>
                    <form action="" className=' gap-[33px] flex flex-col flex-wrap mt-6'>
                        <div className='w-full flex flex-col gap-[19px]'>
                            <div className='w-full text-left flex flex-col gap-4 '>
                                <label className=' font-normal text-xl leading-6 text-[#000000]'>Your Account Link</label>
                                <input type="text" placeholder='link' className=' text-[15px] leading-[18px] font-normal px-[35px] py-[19px] border border-[#c4c4c4] text-[#C6C6C6] outline-none h-[56px] w-full rounded-md' />
                            </div>
                            <div className='w-full text-left flex flex-col gap-4 '>
                                <label className=' font-normal text-xl leading-6 text-[#000000]'>Your Target Audiance</label>
                                <input type="text" placeholder='link' className=' text-[15px] leading-[18px] font-normal px-[35px] py-[19px] border border-[#c4c4c4] text-[#C6C6C6] outline-none h-[56px] w-full rounded-md' />
                            </div>
                            <div className='w-full text-left flex flex-col gap-4 '>
                                <label className=' font-normal text-xl leading-6 text-[#000000]'>Purpose of Promotion</label>
                                <textarea type="text" placeholder='link' className=' text-[15px] leading-[18px] font-normal px-[35px] py-[28px] border border-[#c4c4c4] text-[#C6C6C6] outline-none h-[130px] w-full rounded-md' />
                            </div>

                        </div>
                        <div className='w-full flex flex-col gap-10'>
                            <p className='font-normal w-full text-xl leading-6 text-left'>Upload Screenshots of Views and Watch time</p>
                            <div className='gap-5 w-full flex-wrap flex justify-between '>
                                <div className='flex sm:gap-[29px] gap-2 items-center'>
                                    <input className='hidden' type="file" id='choose' />
                                    <label className='  sm:px-8  sm:w-fit flex gap-2 items-center py-3 px-[31px] bg-[#1C274C] cursor-pointer text-[#F7F7F7] rounded-[40px]' htmlFor='choose'>
                                        <img className='w-[13px] h-[13px]' src={uploadIcon} alt={"Upload Icon"} />
                                        <span className='text-sm font-normal'>Browse Files</span>
                                    </label>
                                    <span className='font-normal text-[#656565] sm:text-[15px] leadin-[18px] text-[10px]'>less then 30 MBs</span>
                                </div>
                                <div className='text-left sm:text-right'>
                                    <input type="submit" placeholder='Submit' className='shadow-lg shadow-[#cb584636]  py-3 px-[52px] cursor-pointer font-normal text-sm leading-4 text-[#F7F7F7] bg-[#E93439] border border-[#C84545] rounded-[40px]' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SocialMarketing