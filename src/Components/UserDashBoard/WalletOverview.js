import PlusSvg from '../../Assets/Plus.svg'
import TransactionHistoryIcon from '../../Assets/TransactionHistory.svg'
import TradingGreenArrow from '../../Assets/TradingGreen.svg'
import TradingRedArrow from '../../Assets/TradingRed.svg'
import Debeted from '../../Assets/DebetedGreen.svg'
import Credite from '../../Assets/CreditedRed.svg'
import { Link } from 'react-router-dom'

const WalletOverview = () => {
  let Transaction_Cards=[
    {
      name:"Total Balance",
      balance:"150.00",
      status:"$100 Debited",
    },
    {
      name:"Pending Earnings",
      balance:"150.00",
      status:"(Available in 7 days)",
    },
    {
      name:"Available for withdraw",
      balance:"120.00",
      status:"Spring Sale Campaign",
    },
  ]
  let Transaction_History=[
    {
      name:"Funds Added",
      Desc:"Card Payment",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Campaign Spend",
      Desc:"Spring Sale Campaign",
      Date:"5 May 2024",
      Amount:"-25.05",
      type:"",
    },
    {
      name:"Withdrawal",
      Desc:"Bank Transfer",
      Date:"5 May 2024",
      Amount:"-40.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
    {
      name:"Card Payment",
      Desc:"Lorem Ipsum",
      Date:"5 May 2024",
      Amount:"50.00",
      type:"",
    },
  ]
  return (
    <div className='pt-[52px] pb-10 px-5 md:pr-[30px] md:pl-[11px]'>
        <div className='heading w-full '>
          <div className='flex flex-wrap gap-5 items-center justify-between'>
            <h1 className="text-[#E93439]  text-left font-semibold text-[32px] leading-[38.73px]">
              Wallet Overview
            </h1>
            <div className='flex flex-wrap gap-[11px]'>
              <Link to={"/Subscription/Add Funds"} className='bg-[#14A708] rounded-md py-1 px-[19px] flex gap-[9px] items-center justify-center'>
                <span className='w-[11px] h-[11px] '><img src={PlusSvg} alt="Plus Svg icon" className='w-full object-cover' /></span>
                <span className='font-normal text-[13px] leading-6 text-[#FFFFFF]'>Add Funds</span>
              </Link>
              <Link to={"/Add Funds"} className='bg-[#E93439] rounded-md py-1 px-[19px] flex gap-[9px] items-center justify-center'>
                <span className='w-[11px] h-[11px] '><img src={PlusSvg} alt="Plus Svg icon" className='w-full object-cover' /></span>
                <span className='font-normal text-[13px] leading-6 text-[#FFFFFF]'>Withdraw</span>
              </Link>
              <Link to={"/Add Funds"} className='bg-[#FFFFFF] rounded-md py-1 px-[12px] flex gap-[9px] items-center justify-center'>
                <span className='w-[11px] h-[11px] '><img src={TransactionHistoryIcon} alt="Plus Svg icon" className='w-full object-cover' /></span>
                <span className='font-normal text-[13px] leading-6 text-[#252C32]'>Transaction History</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='Transaction-cards mt-4 flex flex-wrap gap-5 justify-between items-center'>
          {
            Transaction_Cards.map((T_Card,indx)=>(
              <div key={indx} className='xl:w-[31%] lg:w-[30%] sm:w-full md:w-[48%] bg-[#FFFFFF] pt-[21px] pl-[30px] pb-[10px] pr-4 w-fit rounded-[10px]'>
                <div className='flex items-center '>
                  <span className={`${indx===0?"bg-[#DCFFD9]":indx===1?"bg-[#D6DDFF]":indx===2? "bg-[#FFDFD2]":""} w-[30px] h-[30px] mr-[14px]  rounded-[4.74px]`}></span>
                  <span className={`${indx===0?"text-[#14A708]":indx===1?"text-[#172B85]":indx===2? "text-[#FD6020]":""}  font-semibold text-base leading-[19.36px]`}>{T_Card.name}</span>
                </div>
                <h1 className='Amount text-left mt-[17px] mb-[3px] font-bold text-5xl leading-[58px]'>${T_Card.balance}</h1>
                <div className='pl-1 flex gap-[7px]'>
                  <span>
                    {
                      indx===0?
                      <img src={TradingGreenArrow} alt="" />:
                      indx===2?
                      <img src={TradingRedArrow} alt="" />:
                      ""
                    }
                    </span>
                  <span className={`${indx===0?"text-[#14A708]":indx===1?"text-[#172B85]":indx===2? "text-[#FD6020]":""}  font-light text-[11px] leading-[13.31px]`}>{T_Card.status}</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className='work-Banch  mt-[27px] shadow-md pt-[27px] pb-[11px] pl-[30px] pr-12 w-full bg-white rounded-[10px]'>
            <h1 className='text-left font-semibold text-xl leading-6 pb-[37px]'>Recent Transactions</h1>
            <div className='w-full overflow-auto'>
              <table className='w-[950px] lg:w-full'>
                <tbody>
                  {
                    Transaction_History.map((History,indx)=>(
                      <tr className=''>
                        <td className='pb-[18px] flex items-center gap-[17px] font-medium text-base leading-[19.38px]'>
                          <span className='w-[39px] h-[39px]'>
                            {
                              History.Amount>=0?
                              <img src={Debeted} alt="debeted" className='w-full object-cover' />:
                              <img src={Credite} alt="debeted" className='w-full object-cover' />                              
                            }
                          </span>
                          <span>{History.name}</span>
                        </td>
                        <td className='pb-[18px] text-left font-medium text-base leading-[19.38px]'>Description: {History.Desc}</td>
                        <td className='pb-[18px] font-medium text-base leading-[19.38px]'>Date: {History.Date}</td>
                        <td className='pb-[18px] font-medium text-base leading-[19.38px]'>
                          <span>Amount:</span>
                          {
                            History.Amount>=0?
                            <span className={` text-[#008000]`}>{`+$${History.Amount}`}</span>:
                            <span className={` text-[#ED0006]`}>{`-$${Math.abs(History.Amount)}`}</span>
                          }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}
export default WalletOverview