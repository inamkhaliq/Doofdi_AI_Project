import FilterFilledIcon from '../../Assets/FilterFilledIcon.svg'
import React, { useState } from 'react'
import TransactionTable from '../Table/TransactionTable'

const Transactions = () => {
  let User_Transactions=[
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:100,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-120,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:50,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:80,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:1000,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-710,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-108,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
    {
      time:"03:15",
      profile:"https://plus.unsplash.com/premium_photo-1664304123883-ea1bb5d3bcb7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      amount:-10,
      balance:2560,
    },
  ]
  let [currentPage,setCurrentPage]=useState(1);
  let [postPerPage,setPostPerPage]=useState(10);
  let lastPostIndx=currentPage*postPerPage;
  let firstPostIndx=lastPostIndx-postPerPage;
  let Transaction_data=User_Transactions.slice(firstPostIndx,lastPostIndx)
  let pages=[];
  for(let i=1;i<=Math.ceil(User_Transactions.length/postPerPage);i++){
    pages.push(i);
  }
  return (
    <div className="px-7 pt-[52px] pb-[65px] md:pr-[30px] md:pl-[9px] ">
      <div className="heading w-full ">
        <h1 className={`text-[#E93439]  text-left font-semibold text-[32px] leading-[38px]`}>
          Transactions
        </h1>
      </div>
      <div className="work-Banch w-full pt-[19px]">
        
        <div className='table-data bg-[#FFFFFF] rounded-[10px] pt-[27px] pr-3 pb-[21px] pl-5'>
          <div className='table-title pl-4 flex flex-wrap justify-between'>
            <h2 className='font-semibold text-base leading-[19px] md:mb-0 mb-5'>All Transactions</h2>
            <div className='flex flex-wrap gap-7 md:gap-10 '>
              <div className='relative'>
                <input type="date" className='w-[233px] text-[#BFBFBF] font-normal text-[11px] leading-[13px] rounded-md bg-[#F9F9F9] py-3 px-[13px] pl-[43px] outline-none' name='searchedItem' placeholder='Find Campain' />
              </div>
              <div className='flex gap-4 items-center'>
                <div className='relative'>
                  <span className='absolute -top-[5px] left-[11px] font-normal text-[10px] leading-3 text-[#616161] bg-[#FFFFFF] px-1'>Filter</span>
                  <select className='w-[180px] py-[10px] px-3 border-[#C9C9C9] border rounded-md text-[#616161] font-normal text-[11px] leading-[13px]' name="selectDays" id="">
                    <option value="">Last 7 Days</option>
                    <option value="">Last 14 Days</option>
                    <option value="">Last 21 Days</option>
                    <option value="">Last 30 Days</option>
                  </select>
                </div>
                <img src={FilterFilledIcon} alt='Filter Icon' />
              </div>
            </div>
          </div>
          <div className='table-Content overflow-auto mt-[25px]'>
            <TransactionTable data={Transaction_data} />
          </div>
          <div className='table-pagination flex flex-wrap gap-5 justify-between items-center text-sm font-medium  rounded-md py-5'>
            <button 
              className='mx-4 px-4 py-2 border-gray-300 border rounded-lg'
              onClick={()=>{
                if(currentPage>1){
                  setCurrentPage(currentPage-1)
                }
              }}
            >
              Previous
            </button>
            <div>
              {
                pages.map((page)=>(
                <button 
                  onClick={()=>{
                    console.log(page)
                    setCurrentPage(page)
                  }}
                  className={`${page==currentPage?"bg-slate-300":""} py-2 px-4 mx-2 hover:bg-slate-300 rounded-3xl `}
                >
                  {page}
                </button>
              ))
              }
              Pages
            </div>
            <button 
              className='mx-5 px-4 py-2 border-gray-300 border rounded-lg'
              onClick={()=>{
                if(currentPage<Math.ceil(User_Transactions.length/postPerPage)){
                  setCurrentPage(currentPage+1)
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions