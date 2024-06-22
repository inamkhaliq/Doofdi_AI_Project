import React from 'react'

const Table = ({data}) => {
    let Campaigns=data;
    let abc=[];
    let tableHead=[];
    for(let i in Campaigns[0]){
        abc.push(i)
    }
    for(let j of abc){
        tableHead.push(j.replace("_"," "))
    }
    return (
        <table className='w-[957px] lg:w-full'>
            <thead>
                <tr className=''>
                    {
                        tableHead.map((THead,indx)=>(
                            <th key={indx} className={`${indx===0?"text-left pl-4":"text-center"} pb-[13px] text-[#616161] font-normal text-[11px] leading-[13px] `}>{THead}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Campaigns?.map((compaign, indx) => {
                        return (
                            <tr key={indx} className='cursor-pointer group'>
                                <td className='group-hover:bg-[#F9F9F9] group-hover:rounded-bl-lg group-hover:rounded-tl-lg  pl-4 py-[9px] flex gap-[10px] items-center font-medium text-[13px] leading-[15.75px]'>
                                    <span className='rounded-full bg-[#EDEDED] h-[35px] w-[35px]'></span>
                                    {compaign.Campaign_Type}
                                </td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.Start}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.End}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.Objective}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.Clicks}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.Impression}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>{compaign.Engagement_Rate}</td>
                                <td className='group-hover:bg-[#F9F9F9] font-normal text-[13px] leading-[15.75px]'>
                                    <span className={`py-[5px] px-4 rounded-lg  ${compaign.Status === "Active" ? "text-[#14A708] bg-[#DEFFDB]" : compaign.Status === "Paused" ? "text-[#F9A000] bg-[#FFF1D6]" : compaign.Status === "Ended" ? "text-[#ED0006] bg-[#FFD7D8]" : ""} `}>{compaign.Status}</span>
                                </td>
                                <td className='group-hover:bg-[#F9F9F9] group-hover:rounded-br-lg group-hover:rounded-tr-lg font-medium text-[13px] leading-[15.75px]'>{compaign.Budget_Remain}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Table