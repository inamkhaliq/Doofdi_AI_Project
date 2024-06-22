import React from 'react'
import { Link } from 'react-router-dom'

const AddFunds = () => {
    return (
        <div className='pt-[52px] pb-60 px-5 md:pr-[30px] md:pl-[11px]'>
            <div className='heading w-full '>
                <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]">
                Add Funds
                </h1>
            </div>
            <div className='work-Banch  mt-[21px] shadow-md pt-[27px] pb-[22px] pl-6 pr-[30px] w-full bg-white rounded-[10px]'>
                <div className='flex flex-wrap justify-between'>
                    <div className='lg:w-[47%] w-full'>
                        <h1 className='font-semibold text-[#000000] text-xl leading-[24.2px] text-left'>Add Funds</h1>
                        <form action="" className=' flex flex-col flex-wrap pt-[38px]'>
                            <div className='w-full flex flex-col gap-5'>
                                <div className='w-full text-left flex flex-col gap-[6px] '>
                                    <label className=' font-medium text-base leading-6 text-[#000000]'>Amount to Add:</label>
                                    <input type="text" placeholder='0.00' className='w-full text-[14px] leading-6 font-normal px-3 py-4 border border-[#c4c4c4] text-[#666666] outline-none h-[56px]  rounded-md' />
                                </div>
                                <div className='w-full text-left flex flex-col gap-[6px] '>
                                    <label className=' font-medium text-base leading-6 text-[#000000]'>Payment Method:</label>
                                    <div className='select-dropwoen  relative'>
                                        <select placeholder="0.00" name="" id="" className='  appearance-none w-full text-[14px] leading-6 font-normal pr-10 pl-3 py-4 border border-[#c4c4c4] text-[#666666] outline-none h-[56px]  rounded-md'>
                                            <option value="">Credit/Debit Card</option>
                                            <option value="">Master Card</option>
                                            <option value="">PayPal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full text-left flex flex-col gap-[6px] '>
                                    <label className=' font-medium text-base leading-6 text-[#000000]'>Promo Code (if applicable):</label>
                                    <input type="text" placeholder='Code' className='w-full text-[14px] leading-6 font-normal px-3 py-4 border border-[#c4c4c4] text-[#666666] outline-none h-[56px]  rounded-md' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='w-full sm:w-auto mt-4 lg:mt-0'>
                        <h2 className='mb-[21px] text-left font-semibold text-xl leading-[24.2px]'>Balance Overview</h2>
                        <div className='mb-4 bg-[#FAFBFC] rounded-[10px] py-[21px] pl-7 pr-[36px]'>
                            <div className='flex gap-[14px] items-center'>
                                <span className='bg-[#DCFFD9] rounded-[4.74px] w-[30px] h-[30px] '></span>
                                <p className='font-semibold text-base leading-[16.94px] text-[#14A708]'>Total Balance</p>
                            </div>
                            <h3 className='text-left mt-[17px] font-bold text-4xl leading-[43px]'>$150.00</h3>
                        </div>
                        <div className='bg-[#FAFBFC] rounded-[10px] py-[21px] pl-7 pr-[36px]'>
                            <div className='flex gap-[14px] items-center'>
                                <span className='bg-[#D6DDFF] rounded-[4.74px] w-[30px] h-[30px] '></span>
                                <p className='font-semibold text-base leading-[16.94px] text-[#172B85]'>Pending Earnings</p>
                            </div>
                            <h3 className='text-left mt-[17px] font-bold text-4xl leading-[43px]'>$30.00 </h3>
                        </div>
                    </div>
                </div>
                <div className='mt-[21px] flex flex-wrap justify-between pt-[21px] pr-3 pb-[13px] pl-6 bg-[#FAFBFC] rounded-[10px]'>
                    <div>
                        <p className='text-left font-medium text-base leading-6 text-[#000000]'>Confirmation Section:</p>
                        <p className='text-left mt-[25px] font-normal text-base leading-6 text-[#000000]'>Summary of Transaction:</p>
                        <p className='text-left  font-normal text-base leading-6 text-[#000000]'>Amount to Add: $50.00 | Payment Method: Credit Card | Fees: $0.50</p>
                    </div>
                    <div className='flex items-end mt-5 xl:mt-0'>
                        <Link to={""} className={`font-medium text-base leading-6 rounded-md py-[10px] px-[18.5px] text-[#FFFFFF] bg-[#E93439]`}>
                            Confirm and Add Funds
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddFunds