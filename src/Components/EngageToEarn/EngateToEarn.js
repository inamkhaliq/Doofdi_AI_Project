import React from 'react'

const EngateToEarn = () => {
    const Cards = [
        {
            id: 1,
            title: "Package of 20 Pennies on every hundred likes",
            keyword: "Pennies",
            desc: "Show the way to earn from likes comment and shares",
            image: "/Frame13.jpg"
        },
        {
            id: 2,
            title: "Package of 20 Pennies on every hundred likes",
            keyword: "Pennies",
            desc: "Show the way to earn from likes comment and shares",
            image: "/Frame47.png"
        },
        {
            id: 3,
            title: "Package of 20 Pennies on every hundred likes",
            keyword: "Pennies",
            desc: "Show the way to earn from likes comment and shares",
            image: "/Frame48.jpg"
        },
    ]
    return (
        <>
            <section className='bg-[#f7f7f7] md:pt-24  pt-10'>
                <div className='max-w-screen-xl m-auto md:p-0 sm:px-24 px-4'>
                    <div className='details flex flex-col justify-center items-center gap-2 md:gap-7'>
                        <span className='font-medium text-xl text-[#CB5846] '>Engage to Earn</span>
                        <h2 className='font-semibold md:text-[40px] text-xl md:leading-[48px] text-center text-[#191C29]'>How user can earn <span className='text-[#CB5846]'>“Pennies”</span>?</h2>
                    </div>
                </div>
            </section>
            <section className='md:relative bg-[#f7f7f7] md:py-36 py-10'>
                <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto md:p-0 '>
                    <div className='cards '>
                        <div className='cards-container md:gap-52 gap-10 flex flex-col '>
                            {
                                Cards.map((card,indx)=>{
                                    return(
                                        <div className={`${indx%2==0?"md:justify-start":"md:justify-end"} card flex md:gap-0 gap-5 flex-wrap justify-start items-center `}>
                                            <div className='details md:w-[37%] '>
                                                <h2 className='font-bold md:text-5xl text-3xl text-left md:mb-5 mb-2'>
                                                    Package of 20
                                                    <span className='text-[#CB5846]'> Pennies </span>
                                                    on every hundred likes
                                                </h2>
                                                <p className='md:text-xl text-base font-normal text-left'>
                                                Show the way to earn from likes comment and shares
                                                </p>
                                            </div>
                                            <div className={`${indx%2==0?"md:right-0":"md:left-0"} image md:w-[49.4%] max-h-[352px] md:absolute `}>
                                                <img className='w-full' src="/Frame48.jpg" alt="chating on mobile" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* 1st card */}
                            {/* <div className='card flex flex-wrap justify-start items-center '>
                                <div className='details md:w-[30%] '>
                                    <h2 className='font-bold text-5xl text-left mb-5'>
                                        Package of 20
                                        <span className='text-[#CB5846]'>Pennies</span>
                                        on every hundred likes
                                    </h2>
                                    <p className='text-xl font-normal text-left'>
                                    Show the way to earn from likes comment and shares
                                    </p>
                                </div>
                                <div className='image md:max-w-[712px] max-h-[352px] absolute right-0'>
                                    <img className='w-full' src="/Frame48.jpg" alt="chating on mobile" />
                                </div>
                            </div> */}
                            {/* 2nd card */}
                            {/* <div className='card flex flex-wrap justify-end items-center '>
                                <div className='details md:w-[30%] '>
                                    <h2 className='font-bold text-5xl text-left mb-5'>
                                        Package of 20
                                        <span className='text-[#CB5846]'>Pennies</span>
                                        on every hundred likes
                                    </h2>
                                    <p className='text-xl font-normal text-left'>
                                    Show the way to earn from likes comment and shares
                                    </p>
                                </div>
                                <div className='image md:max-w-[712px] max-h-[352px] absolute left-0'>
                                    <img className='w-full' src="/Frame48.jpg" alt="chating on mobile" />
                                </div>
                            </div> */}
                           
                           
                            {/* {
                                Cards.map((card, indx) => {
                                    return (
                                        <div key={indx} className='card flex flex-wrap justify-between items-center '>
                                            <div className='details md:w-[30%] order-2'>
                                                <h2 className='font-bold text-5xl text-left mb-5'>
                                                    Package of 20
                                                    <span className='text-[#CB5846]'>Pennies</span>
                                                    on every hundred likes
                                                </h2>
                                                <p className='text-xl font-normal text-left'>
                                                    {card.desc}
                                                </p>
                                            </div>
                                            <div className='order-1 image md:max-w-[712px] max-h-[352px] absolute right-0'>
                                                <img className='w-full' src={card.image} alt="chating on mobile" />
                                            </div>
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EngateToEarn