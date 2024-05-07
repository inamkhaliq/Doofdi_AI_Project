import React from 'react'

const Subscribe = () => {
  return (
    <section className='w-full md:py-24 py-5 bg-[#f7f7f7]'>
        <div className='max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto'>
            <div className='flex flex-wrap justify-between md:gap-0 gap-5 items-center'>
                <div className='md:w-[47%] w-full'>
                    <h1 className='text-[#CB5846] text-left font-semibold text-4xl '>Doofdi Ai</h1>
                    <p className='font-normal text-left text-base py-5'>Stay up to date on features and releases by joining our newsletter.</p>
                    <form className='text-left'>
                        <input type="email"  className='border border-[#888888] lg:w-[358px] w-full  text-base outline-none h-11'/>
                        <button type='submit' className='w-full lg:w-auto py-3 xl:mt-0 mt-3 xl:ml-5 px-7 bg-[#CB5846] text-white font-normal text-base '>Subscribe</button>
                    </form>
                    <p className='md:pt-16 pt-3 font-normal text-base text-left'>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                </div>
                <div className='md:w-[21%] w-full'>
                    <h2 className='md:font-normal md:text-base font-bold text-left'>Follow us</h2>
                    <div className='text-left my-4'>
                        <a href="#" className='font-normal text-xs text-black inline-block h-6 '>
                            <svg className='inline-block' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.83325C5.93729 1.83325 1.83337 5.93717 1.83337 10.9999C1.83337 15.5952 5.21862 19.3902 9.62962 20.0529V13.4291H7.36179V11.0192H9.62962V9.41592C9.62962 6.76125 10.923 5.59617 13.1295 5.59617C14.1864 5.59617 14.7446 5.67408 15.0095 5.70984V7.81267H13.5044C12.5675 7.81267 12.2403 8.70092 12.2403 9.70192V11.0192H14.9857L14.6135 13.4291H12.2412V20.0722C16.7155 19.4662 20.1667 15.6401 20.1667 10.9999C20.1667 5.93717 16.0628 1.83325 11 1.83325Z" fill="black"/>
                            </svg>
                            <span className='ml-6 font-normal text-xs text-black'>Facebook</span>
                        </a>
                    </div>
                    <div className='text-left my-4'>
                        <a href="#" className='font-normal text-xs text-black inline-block h-6 '>
                            <svg className='inline-block' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 2.5C4.36583 2.5 2.5 4.36583 2.5 6.66667V13.3333C2.5 15.6342 4.36583 17.5 6.66667 17.5H13.3333C15.6342 17.5 17.5 15.6342 17.5 13.3333V6.66667C17.5 4.36583 15.6342 2.5 13.3333 2.5H6.66667ZM15 4.16667C15.46 4.16667 15.8333 4.54 15.8333 5C15.8333 5.46 15.46 5.83333 15 5.83333C14.54 5.83333 14.1667 5.46 14.1667 5C14.1667 4.54 14.54 4.16667 15 4.16667ZM10 5.83333C12.3008 5.83333 14.1667 7.69917 14.1667 10C14.1667 12.3008 12.3008 14.1667 10 14.1667C7.69917 14.1667 5.83333 12.3008 5.83333 10C5.83333 7.69917 7.69917 5.83333 10 5.83333ZM10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5Z" fill="black"/>
                            </svg>
                            <span className='ml-6 font-normal text-xs text-black'>Instagram</span>
                        </a>
                    </div>
                    <div className='text-left my-4'>
                        <a href="#" className='font-normal text-xs text-black inline-block h-6 '>
                            <svg className='inline-block' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.15039 2.25L7.30225 9.61377L2.05078 15.75H4.03564L8.18994 10.8823L11.5957 15.75H16.0283L10.6304 8.02295L15.5581 2.25H13.604L9.74707 6.75732L6.59912 2.25H2.15039Z" fill="black"/>
                            </svg>
                            <span className='ml-6 font-normal text-xs text-black'>x.com</span>
                        </a>
                    </div>
                    <div className='text-left my-4'>
                        <a href="#" className='font-normal text-xs text-black inline-block h-6 '>
                            <svg className='inline-block' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0858 4.89733C16.9037 4.2165 16.367 3.67975 15.6861 3.49766C14.4511 3.16675 9.50004 3.16675 9.50004 3.16675C9.50004 3.16675 4.54896 3.16675 3.31396 3.49766C2.63312 3.67975 2.09637 4.2165 1.91429 4.89733C1.58337 6.13233 1.58337 9.50008 1.58337 9.50008C1.58337 9.50008 1.58337 12.8678 1.91429 14.1028C2.09637 14.7837 2.63312 15.3204 3.31396 15.5025C4.54896 15.8334 9.50004 15.8334 9.50004 15.8334C9.50004 15.8334 14.4511 15.8334 15.6861 15.5025C16.3677 15.3204 16.9037 14.7837 17.0858 14.1028C17.4167 12.8678 17.4167 9.50008 17.4167 9.50008C17.4167 9.50008 17.4167 6.13233 17.0858 4.89733ZM7.91671 12.2424V6.75775L12.6667 9.50008L7.91671 12.2424Z" fill="black"/>
                            </svg>
                            <span className='ml-6 font-normal text-xs text-black'>Youtube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe