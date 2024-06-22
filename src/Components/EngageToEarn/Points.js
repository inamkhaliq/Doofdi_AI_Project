import Dollarsfalling from '../../Assets/Dollarsfalling.jpg'
import COnnectingPeople from '../../Assets/COnnectingPeople.jpg'

const Points = () => {
    const Cards = [
        {
            id: 1,
            title: "Earn Points by engagement",
            keyword: "Points",
            desc: "Experience the ease of content creation, streamline your promotion efforts, and maximize engagement with Doofdi's cutting-edge AI tools, seamless publishing capabilities, and gamification elements.",
            image: Dollarsfalling
        },
        {
            id: 2,
            title: "Use Points to increase your engagement",
            keyword: "Points",
            desc: "Show the way to earn from likes comment and shares",
            image: COnnectingPeople
        },

    ]
    return (
        <>
            <section className='bg-[#f7f7f7] md:pt-24  pt-10'>
                <div className='max-w-screen-xl m-auto md:p-0 sm:px-24 px-4'>
                    <div className='details flex flex-col justify-center items-center gap-2 md:gap-7'>
                        <span className='font-medium text-xl text-[#496DA8] '>Engage for Points</span>
                        <h2 className='font-bold md:text-[48px] text-xl md:leading-[77px] text-center text-[#191C29]'>
                            Ways to earn and utilize
                            <span className='text-[#E93439]'> points </span>
                        </h2>
                    </div>
                </div>
            </section>
            <section className='sm:relative bg-[#f7f7f7] md:py-36 py-10'>
                <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto md:p-0 '>
                    <div className='cards '>
                        <div className='cards-container sm:gap-24  lg:gap-52 gap-10 flex flex-col '>
                            {
                                Cards.map((card, indx) => {
                                    let c_title = card.title.split(" ");
                                    return (
                                        <div key={indx} className={`${indx % 2 == 0 ? "sm:justify-end" : "sm:justify-start"} card flex md:gap-0 gap-5 flex-wrap justify-start items-center `}>
                                            <div className='details sm:w-[38%] '>
                                                <h2 className='font-bold text-[#191C29] lg:text-5xl md:text-3xl sm:text-xl text-left md:mb-5 mb-2'>
                                                    {
                                                        c_title.map((word, Windx) => {
                                                            return <span key={Windx} className={`${word == card.keyword && "text-[#E93439]"}`}>{word} </span>;
                                                        })
                                                    }
                                                </h2>
                                                <p className='md:text-xl text-[#667986] text-base font-light text-left'>
                                                    {card.desc}
                                                </p>
                                            </div>
                                            <div className={`${indx % 2 == 0 ? "sm:left-0" : "sm:right-0"} image sm:w-[49.4%] max-h-[352px] sm:absolute `}>
                                                <img className='w-full' src={card.image} alt="chating on mobile" />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Points