import downarrow from '../../Assets/downword.svg'
const TransactionTable = ({data}) => {
    let Transactions=data;
    return (
        <table className='w-[957px] lg:w-full'>
            <thead>
                <tr className=''>
                    <th className='text-left pb-[13px] text-[#616161] font-medium text-[11px] leading-[13px]  pl-4'>
                        <span className='flex gap-2 items-center '>
                            <span>Time</span>
                            <img src={downarrow} alt='downarrow'/>
                        </span>
                    </th>
                    <th className='text-left pb-[13px] text-[#616161] font-medium text-[11px] leading-[13px]'>Profile</th>
                    <th className='text-left pb-[13px] text-[#616161] font-medium text-[11px] leading-[13px]'>
                        <span className='flex gap-2 items-center justify-center'>
                            <span>Amount,USD</span>
                            <img src={downarrow} alt='downarrow'/>
                        </span>
                    </th>
                    <th className='text-left pb-[13px] text-[#616161] font-medium text-[11px] leading-[13px]'>
                        <span className='flex gap-2 items-center justify-center '>
                            <span>Balance,USD </span>
                            <img src={downarrow} alt='downarrow'/>
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Transactions?.map((Transaction, indx) => {
                        return (
                            <tr key={indx} className='cursor-pointer group'>
                                <td className='text-left group-hover:bg-[#F9F9F9] group-hover:rounded-bl-lg group-hover:rounded-tl-lg  pl-4 py-3 font-normal text-[13px] leading-[15.75px]'>
                                    {Transaction.time}
                                </td>
                                <td className='text-left group-hover:bg-[#F9F9F9] font-normal text-[13px] py-3 leading-[15.75px] flex'>
                                    <span className=' bg-[#EDEDED] h-[35px] w-[35px] overflow-hidden'>
                                        <img className='w-full h-full object-cover' src={Transaction.profile} alt="user profile" />
                                    </span>
                                </td>
                                <td className='text-center group-hover:bg-[#F9F9F9] font-normal text-[13px] py-3 leading-[15.75px]'>
                                    {
                                     Transaction.amount>=0?
                                     <span className='text-green-600'>+ ${Transaction.amount}</span>:
                                     <span className='text-red-500'>- ${Math.abs(Transaction.amount)}</span>
                                    }
                                </td>
                                <td className='text-center group-hover:bg-[#F9F9F9] group-hover:rounded-br-lg group-hover:rounded-tr-lg font-normal text-[13px] py-3 leading-[15.75px]'>
                                    $ {Transaction.balance}
                                </td>                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default TransactionTable