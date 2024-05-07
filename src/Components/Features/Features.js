import React from 'react'

const Features = () => {
    let Features=[
        {
            image:"/image1.svg",
            title:"Central Categorization System",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/721c/d1e1/54f4c53e6f6c26a7e20bd44277ae880b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IKvF725AkOUMLNund1TI3hTTBB0BdTlX2RiQCM649FirNA1V~Xm2afhdZcxfzs6-qstlJlDnIvbyzhYdxILS~vamg8o-wNIQO5MmnwxZu6ntQxfb7MaLDaMoCPqBa3NR~vv~aa7erkQIoDcVqvTuggjVthUD2N58B0uXaTLzXy9aT12fRyUh32WcYHbB1TFBwFroPe-vmBAM3fYFN~5F4PNhS-8zTZiyH9mWnMcpmA9LDToVApwZPRwdw3vjg9z48Hcl2pk9e3FZtomrruR5ch5GOzdUmDVDrSER7BM45zy1PAcTXU6xL2kOVPRQvrJyVuub6c48hq9oE-A-vo6uug__",
            title:"Recommendation System",
            desc:"Maximize Engagement: Enhance user interaction and earn rewards through our recommendation system and gamification elements.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/214e/65a5/d2d52f207f60b7e73a08470b815bfdb3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKm1tCVCg6gAoUmT5AFfM13F7EDgW~XdFbF8MPXi6w5fXXKaI4JPvDYxsEyvGnVcou5eTvwdNqir-suuXfsm8KsEhFuSpsS8px~47jhKr58r8LfRECadajiKoU4hQxvMGqgKNeLnn9vaFrvvaJqS95s4Y0YhZDjbEljglKq~JXwdrphgjVvmJAPvA58IdQFD9wK8pZvRC7suSv9JRjvwzzNd4azHOfChaxJV5-KbI2ZfZfrjQBmWi~kDn5m69QF2nKQR5iL3pt1Z9UFVUs-lQqjcZDczN7k9pecFK6Cy81sIDObxcXge~B77LVrZ0kdd8~nGFmccqw42lQAx7jGMfA__",
            title:"User Wallets (Doofdi Wallets)",
            desc:"Join the Doofdi community today and unlock the power of content creation and promotion.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/33fa/735a/57622edc6fdc59d3b39c609c65b22c84?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9hoAfYYrdrQn9iDjE0fMA9yUOjgfOCXjuxZj16g738-8mfvO30a1g0oBFyohiABg2JlgZzfQYH~pFBUwAzpbnwY~LKSP~CISN3ZSXkpzRLAjAgkH9RFosk56k3WlImrnh~EBNA~WtaPS-~Rr6l2eJZSyffdMz56A8h5wVDeu94l9lcC4XTYB~6l7KT3XrLTph2DBm0-Ts14F9nMnbFCIWHTiWlLSUMsqco-rB2eTFplyjJFDN0TnS9Y8dWbxQ1jRZNsvjOLDM~dXc8imVFSpHxfdcPcUw~Z80p52CbZLVVGmA~44av02bDfeHnnu7C4smdcSi8sNenLnWrW-3fjJQ__",
            title:"Create Stunning Content with AI",
            desc:"Craft captivating images and videos in minutes using Doofdi's GPT-4 and Midjourney APIs.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/8c34/e9b2/36efe19386d0f6c9da311051b6353a0e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpRFtWnzk2solT8aNoL8zGu0hAHMWsOVTyxmwjLS1kVGE9~34KcKxHDNDJlEQAFjeY8YBYmSzptrZdxCYMWkGPe7ta3iUpQvQM9yemI2Q0PrRSWLkyiA~7Hes4vvnphLQJDBcXuSGF8aNzs9j7ZBVXfVxP1k-kUzMJ6KTAlZ8NEooJrGf7BcuTDodoaJ-1aqCOzlpEp2iPzJYIMnUfDD146i9AKBd4fC98yW4~lWIIpyYjI2zHXbn~b8TWb7RyRygTu2nBMaZwjZ6A4TTTfZgcrLScYrZBtDtT~I~v1zvLWqNqyKE8HcVEgNZgDSpdTv4szzfbjT8iMezkcr5rdzwg__",
            title:"Campaign, Announcement & Push Notification Feature",
            desc:"Effortless Content Creation: Utilize cutting-edge AI tools to craft engaging images and videos.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/d154/6c99/1b3e078376c1d856f9497a5f2bf0e677?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Df2iWnJmjTEUwB0MDhfoWzzQYBJ31rpqMZz5W73M0ThAFY9pksO9xqPK96WdQFXZOfCYj2sL3Fhpe1vLKnqwV~WCVtyLYgxsqD6KO1it~2ZwfoCOldz31NfJVKMf63wFq7N93OnXIgYCa480hfFS3SQJw6GsY3MmCT49dWBMp0CqqR24B0BY8OnzfS7NeDzPJPOUrxbcnPfOfW8SJ0rmgABhOst04Xjd5LWhKj1UHXXk-pheV~BM2TCwXvnP6YGrCwKbj1I5rBTwG6h96xguB0PaWcQdv~v5wcEuLj7jbkuzTcVqLJ6Inq3xEItfIhsG7hvizmU8IuFIlzHDpxkDyw__",
            title:"Social Sign In",
            desc:"Maximize Engagement: Enhance user interaction and earn rewards through our recommendation system and gamification elements.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/06b8/80de/ee8bbeebb063eeb4ad5c3eecad143411?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZvBsMnSpoE8pjV~Q8eIV77Uj7aEX4cSoUE0EDnRB8xb3iwOfFFPYs5goR2rOekP47IWnRjO6qBrsneRHK9-NILOK~sWppLkdXoqD2XQua4nG8SkGlLOyLB~VYih15rEBJSARud3n8dofZJ-jKqDvVoPzLQUbLqIIkTpQRX50aDiZUi1DA3Xr59IN927~tw7knRz32U0~4GglyF8zsOAnP28akDmuh3qYLVq7hEznaQsVB~V0fnNnCtKTkCuwTYfRJij52S102u7m~SeyvZcPe~yKych3hVf19cZkkBpzd3LswtH~XRDJyQHXg2q5zr1UPBfR6eZ-ZKVK2myyDQmVIg__",
            title:"In Browser Feature",
            desc:"Join the Doofdi community today and unlock the power of content creation and promotion.",
        },
        {
            image:"https://s3-alpha-sig.figma.com/img/a46f/2e9a/7ae5af0953db67c942341ee8d958f19a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZyLFw3P0FdRUSsmxwILNTdvcy8T2qLbKZtmJr6KIyVhF1k-TKVZ2emuTpCocEksfiNlynctTH1DL2c5Gw0xU7Z8js6QPXrG3yAxyj1FordY0oK7Gn1~CTubOA~aMxko9e2mfjcbx~J3IbCVCHewyrn3Ym~y7CF3wzhM6ztzZ03v-cLZ~xJtoTZtncBdDgMCDb4Jl~lGqblfrzPStKP7GUHk3-TdRERARZJecbiR43xBToLAPfW~1sfQ9Q7yDROGb1VJa5nq1t3sH-~vBiJno~qRGYPiRg6NbhoAIG3PCPs49VIAAhKLmKNwtiRlCWSFu2-SuqB3mheduN~bCcghvA__",
            title:"Secure User Authentication and Data Encryption",
            desc:"Craft captivating images and videos in minutes using Doofdi's GPT-4 and Midjourney APIs.",
        },
    ]
  return (
    <section className='md:pt-24 md:pb-40  py-6 bg-[#f7f7f7]'>
        <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto'>
            <div className='details flex flex-col justify-center items-center gap-7'>
                <span className='font-medium text-xl text-[#CB5846] '>Features</span>
                <h2 className='font-bold md:text-5xl text-3xl text-center text-[#191C29]'>
                    Unlock the Power of 
                    <span className='text-[#CB5846]'> Doofdi </span> 
                    Today
                </h2>
                <p className='md:max-w-[920px] font-normal text-[#191C29] md:text-xl text-base text-center'>
                    Experience the ease of content creation, streamline your promotion efforts, and maximize engagement with Doofdi's cutting-edge AI tools, seamless publishing capabilities, and gamification elements.
                </p>
            </div>
            <div className='cards mt-16'>
                <div className='cards-container flex flex-wrap md:gap-9 gap-11 justify-between md:justify-center lg:justify-between'>
                    {
                        Features.map((feature,indx)=>{
                            return(
                                <div key={indx} className='card flex lg:w-[22%] md:[25%] sm:w-[40%] w-full justify-center items-center flex-col gap-1 md:gap-3'>
                                    <div className='icon w-[115px]  '>
                                        <img className='w-full' src={feature.image} alt="" />
                                    </div>
                                    <div className='flex flex-col md:gap-5 gap-2'>
                                        <h1 className='text-xl font-medium text-center'>{feature.title}</h1>
                                        <p className='font-normal text-sm text-center '>{feature.desc}</p>
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

export default Features