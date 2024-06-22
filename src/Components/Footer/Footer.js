import React from 'react'

const Footer = () => {
  return (
    <section className=' bg-[#f7f7f7]'>
        <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto'>
            <div className='border-t border-[#747474] md:gap-0 gap-3 pt-7 pb-8 flex-wrap flex justify-between '>
                <p className='font-normal text-base text-black'>© 2024 Relume. All rights reserved.</p>
                <div className='md:text-sm text-xs'>  
                    <a className='underline cursor-pointer ml-2 lg:ml-12' href="#">Privacy Policy</a>
                    <a className='underline cursor-pointer ml-2 lg:ml-12' href="#">Cookies Settings</a>
                    <a className='underline cursor-pointer ml-2 lg:ml-12' href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer