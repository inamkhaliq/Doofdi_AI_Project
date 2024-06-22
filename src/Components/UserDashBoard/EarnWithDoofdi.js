import trendingUp from '../../Assets/trendingUp.svg'
import trendingDown from '../../Assets/trendingDown.svg'

const EarnWithDoofdi = () => {
    const Promotions=[
        {
            title:"Facebook",
            data:[
                {
                    name:"Likes",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Shares",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Followers",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
                {
                    name:"Coins",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
            ],
        },
        {
            title:"Instagram",
            data:[
                {
                    name:"Likes",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Shares",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Followers",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
                {
                    name:"Coins",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
            ],
        },
        {
            title:"Youtube",
            data:[
                {
                    name:"Likes",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Shares",
                    total:21023,
                    coins:210,
                    trend:"up",
                    average:1220,
                },
                {
                    name:"Followers",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
                {
                    name:"Coins",
                    total:21023,
                    coins:210,
                    trend:"down",
                    average:1220,
                },
            ],
        },
    ]
  return (
    <>
        <div className='heading w-full mt-9'>
            <h1 className="text-[#E93439] md:text-left text-center font-semibold text-[40px] leading-[48px]">
                Earn with Doofdi
            </h1>
        </div>
        <div className="work-Banch xl:w-[96.53%] w-full px-6 lg:px-0 pb-40">
            <div className='flex justify-end gap-[71px] my-2 items-center'>
                <span className='font-bold text-lg leading-[21px] text-[#E93439]'>Today's Earning</span>
                <span className='font-medium text-base leading-[19px] text-[#353535]'>39.917</span>
            </div>
            <div className="flex flex-wrap gap-[30px]">
                {
                    Promotions.map((promotion,indx)=>{
                        return(
                            <div key={indx} className={`${promotion.title}-Promotions w-full`}>
                                <h2 className='font-normal text-xl text-left leading-6 text-[#353535] mb-[10px]'>
                                    {promotion.title} Promotion
                                </h2>
                                <div className='promotion-cards justify-center md:justify-around xl:justify-normal flex flex-wrap gap-6 '>
                                    {
                                        promotion.data.map((card,indx)=>{
                                            return(
                                                <div key={indx} className='likes flex flex-col w-[238px] gap-[39px]  bg-[#FFFFFF] border border-[#ECECEC] rounded-lg pt-[27px] pr-[26px] pb-2 pl-[22px]'>
                                                    <h3 className="w-full font-normal text-2xl text-left leading-[29px] text-[#353535]">
                                                        {card.name}
                                                    </h3>
                                                    <div>
                                                        <p className="flex flex-wrap gap-1">
                                                            <span className={`${card.trend==="up"?"text-[#3A67CA]":"text-[#DD0000]"} font-normal text-[13px] leading-[15px]`}>
                                                                {card.average}
                                                            </span>
                                                            {
                                                                card.trend==="up"?<img src={trendingUp} alt="tranding UP " />:
                                                                <img src={trendingDown} alt="tranding down " />
                                                            }
                                                            
                                                        </p>
                                                        <div className='flex gap-[25px] items-baseline'>
                                                            <h2 className='font-semibold text-[32px] leading-[40px] text-[#353535]'>
                                                                {card.total}
                                                            </h2>
                                                            <span className='font-normal text-[13px] leading-[15px] text-[#38A752]'>{card.coins} Coins+</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default EarnWithDoofdi