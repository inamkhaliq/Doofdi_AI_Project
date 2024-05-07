import React from 'react'
import ButtonOrange from '../Buttons/ButtonOrange'

const Card = ({CardData}) => {
    return (
        <div className='lg:w-[23.80%]  sm:w-[48%] w-full rounded-[10px] md:p-2 p-3 bg-white flex flex-col justify-start items-center gap-1'>
            <div className='w-full '>
                <img className='w-full ' src={CardData.img} alt={`women on wheel`} />
            </div>
            <h3 className='text-[#CB5946] w-4/5 font-medium text-xl text-center'>
                {CardData.title}
            </h3>
            <div>
                <p className='desc w-11/12 m-auto pb-7 pt-5 text-[#667986] font-normal md:text-base text-sm text-center'>
                    {CardData.desc}
                </p>
                {/* <a className='bg-[#CB5846] text-white font-normal text-base rounded-[40px]' href=""></a> */}
                <ButtonOrange text='Get Started' className='px-9 py-2 inline-block text-[#EDECEB] text-sm font-normal rounded-[40px] drop-shadow-lg'></ButtonOrange>
            </div>
        </div>
    )
}

export default Card