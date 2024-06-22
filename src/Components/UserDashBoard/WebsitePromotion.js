import React from 'react'

const WebsitePromotion = () => {
    return (
        <div className='pb-[55px] md:px-0 pt-[90px] px-5'>
            <div className='heading w-full '>
                <h1 className="text-[#E93439]  text-center font-semibold text-[32px] leading-[38px]">
                    Doofdi Ai Website Promotion
                </h1>
            </div>
            <div className='work-Banch mt-[60px] md:w-[96.53%] w-full  shadow-lg py-8 pl-10 pr-6  bg-[#FFFFFF] rounded-[10px]'>
                <div>
                    <h1 className='font-semibold text-[#E93439] leading-[29px] text-2xl text-left'>Answer the Questions</h1>
                    <form action="" className='gap-[29px] flex flex-col flex-wrap mt-6'>
                        <div className='w-full flex flex-col gap-[29px]'>
                            <div className='w-full text-left flex flex-col gap-[7px] '>
                                <label className=' font-normal text-[#000000] text-xl leading-6'>Your Website Link</label>
                                <input type="text" placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                            </div>
                            <div className='w-full text-left flex flex-col gap-[7px] '>
                                <label className=' font-normal text-[#000000] text-xl leading-6'>Your Website Nech</label>
                                <input type="text" placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                            </div>
                            <div className='w-full text-left flex flex-col gap-[7px] '>
                                <label className=' font-normal text-[#000000] text-xl leading-6'>Your Target Audiance</label>
                                <input type="text" placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[56px] w-full rounded-md' />
                            </div>
                            <div className='w-full text-left flex flex-col gap-[7px] '>
                                <label className=' font-normal text-[#000000] text-xl leading-6'>Purpose of Promotion</label>
                                <textarea type="text" placeholder='link' className=' text-[15px] text-[#727272] leading-[15px] font-normal py-[19px] px-3 border-[#c4c4c4] border outline-none h-[110px] w-full rounded-md' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[18px]'>                            
                            <div className='text-right'>
                                <input type="submit" placeholder='Submit' className='shadow-lg shadow-[#cb584636] text-right py-3 px-[50px] cursor-pointer font-normal text-sm text-[#F7F7F7] bg-[#E93439] border border-[#C84545] rounded-[40px]' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default WebsitePromotion