import React from 'react'
import ButtonOrange from '../Buttons/ButtonOrange'

const Unlock = () => {
  return (
    <section className='w-full bg-[#f7f7f7]'>
        <div style={{ backgroundImage:"url('/AI-hero-banner-BFSI 1.jpg')",backgroundPosition:"center center"}} className='lg:max-w-[1360px] m-auto bg-no-repeat bg-cover'>
            <div className='max-w-screen-xl lg:px-10 md:py-20 sm:px-24 px-4 py-9 m-auto text-left' >
                
                    <h1 className='font-bold md:text-5xl text-4xl text-white'>Unlock the Power of Doofdi</h1>
                    <p className='md:font-medium font-extralight md:text-2xl text-lg pt-7 pb-10 text-white'>Sign up now and experience the ultimate content creation and promotion platform.</p>
                    <ButtonOrange href='#' text={"Learn More"} className='bg-white text-black md:py-3 md:px-7 text-xs md:rounded-[40px] px-5 py-2'></ButtonOrange>
               
            </div>
        </div>
    </section>
  )
}

export default Unlock