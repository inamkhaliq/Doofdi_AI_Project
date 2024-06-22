import React from 'react'
import Card from '../Card/Card';
import Illusion from '../../Assets/illusion.jpg';
import Brownlady from '../../Assets/brownlady.jpg';
import Horoscop from '../../Assets/horoscop.jpg';
import AIonHand from '../../Assets/AIonHand.jpg';

const Services = () => {
    let Cards=[
        {
            img:Illusion,
            title:"Boost Your Business Using AI Images ",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos."
        },
        {
            img:Brownlady,
            title:"Boost Your Presence with Ai Videos",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos."
        },
        {
            img:Horoscop,
            title:"Manage Your Social Media Publishing",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos."
        },
        {
            img:AIonHand,
            title:"Promote your Social Media Platform by Ai",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos."
        },
    ];
  return (
    <section className='md:pt-14 pt-10  bg-[#f7f7f7]'>
        <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto'>
            <div className='details flex flex-col justify-center items-center gap-8'>
                <span className='font-medium text-xl text-[#E93439] '>Services</span>
                <h2 className='font-bold md:text-5xl text-3xl text-center text-[#191C29]'>Unlock the Power of <span className='text-[#CB5846]'>Doofdi</span> Today</h2>
                <p className='md:max-w-[820px] font-light text-[#667986] text-base md:text-xl text-center'>
                    Experience the ease of content creation, streamline your promotion efforts, and maximize engagement with Doofdi's cutting-edge AI tools, seamless publishing capabilities, and gamification elements.
                </p>
            </div>
            <div className='cards mt-9'>
                <div className='cards-container flex flex-wrap justify-between gap-x-4 xl:gap-y-0  gap-y-6' >
                    {
                        Cards.map((card,indx)=>{
                            return <Card key={indx} CardData={card}></Card>
                        })
                    }                   
                </div>
            </div>
        </div>
    </section>
  )
}
export default Services