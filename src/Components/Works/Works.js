import React from 'react'

const Works = () => {
    let Points=[
        {
            title:"Boost Your Online Presence with Doofdi",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos.",
        },
        {
            title:"Streamlined Promotion: Reach your audience ",
            desc:"Maximize Engagement: Enhance user interaction and earn rewards through our recommendation system and gamification elements.",
        },
        {
            title:"Sign Up Now and Get Started",
            desc:"Join the Doofdi community today and unlock the power of content creation and promotion.",
        },
        {
            title:"Create Stunning Content with AI",
            desc:"Craft captivating images and videos in minutes using Doofdi's GPT-4 and Midjourney APIs.",
        },
        {
            title:"Boost Your Online Presence with Doofdi",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos.",
        },
        {
            title:"Streamlined Promotion: Reach your audience ",
            desc:"Maximize Engagement: Enhance user interaction and earn rewards through our recommendation system and gamification elements.",
        },
        {
            title:"Sign Up Now and Get Started",
            desc:"Join the Doofdi community today and unlock the power of content creation and promotion.",
        },
        {
            title:"Create Stunning Content with AI",
            desc:"Craft captivating images and videos in minutes using Doofdi's GPT-4 and Midjourney APIs.",
        },
    ]
    return (
        <section className='py-20 bg-[#F2F2F2]'>
            <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto '>
                <div className='details'>
                    <h1 className='text-center font-bold md:text-5xl text-3xl md:mb-8 mb-3'>How <span className='text-[#E93439]'>Doofdi</span> Works</h1>
                    <p className='md:max-w-[920px] m-auto font-normal text-[#191C29] md:text-2xl text-base text-center'>
                        Experience the ease of content creation, streamline your promotion efforts, and maximize engagement with Doofdi's cutting-edge AI tools, seamless publishing capabilities, and gamification elements.
                    </p>
                </div>
                <div className='cards md:mt-28 mt-6'>
                    <div className='cards-container flex flex-wrap gap-x-9 md:gap-y-16 gap-y-7 justify-center '>
                        {
                            Points.map((point,indx)=>{
                                return(
                                    <div key={indx} className='card   md:w-[22%] sm:w-[33%] w-full'>
                                        <h1 className=' md:mb-[15px] text-[#191C29] font-bold text-[64px] md:leading-[77px] text-center'>{`0${indx+1}.`}</h1>
                                        <div className='flex flex-wrap justify-between'>
                                            <p className='font-medium text-xl text-[#191C29] text-center mb-[21px] '>{point.title}</p>
                                            <p className='text-[15px] leading-[18px] font-normal text-[#667986] text-center'>{point.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works