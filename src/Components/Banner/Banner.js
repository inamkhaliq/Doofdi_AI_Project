import React from 'react'
import ButtonOrange from '../Buttons/ButtonOrange'

const Banner = () => {
  return (
    <section className='md:pt-28 pt-10 bg-[#F7F7F7]'>
        <div className='banner max-w-screen-xl md:px-[90px] sm:px-24 px-4 m-auto '>
            <div className='flex flex-col justify-center items-center gap relative'>
                <div className='social-media flex w-full absolute md:top-[-50px] top-8  justify-between'>
                    <div className='facebook md:w-36 w-14'>
                        <img  className='w-full' src="./Facebook.svg" alt="facebook blur icon" />
                    </div>
                    <div className='instahram md:w-36 w-14'>
                        <img className='w-full' src="./Instagram.svg" alt="instahram blur icon" />
                    </div>
                </div>
                <div className='Stars hidden md:w-[720px] md:flex justify-between py-3'>
                    <div>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.494429 28.173C-0.00376182 28.5974 0.518775 29.3823 1.1025 29.0865L5.99907 26.604C12.3219 23.3984 20.0175 24.943 24.6137 30.3401L28.1731 34.5198C28.5975 35.018 29.3824 34.4955 29.0865 33.9117L26.604 29.0151C23.3985 22.6924 24.9431 14.9967 30.3402 10.4006L34.5199 6.84117C35.0181 6.41678 34.4956 5.63181 33.9118 5.92772L29.0152 8.4102C22.6925 11.6157 14.9968 10.0711 10.4006 4.67402L6.84123 0.494337C6.41688 -0.00385229 5.63191 0.518684 5.92777 1.10241L8.41025 5.99898C11.6158 12.3218 10.0712 20.0174 4.67411 24.6136L0.494429 28.173Z" fill="#CB5846"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.494429 28.173C-0.00376182 28.5974 0.518775 29.3823 1.1025 29.0865L5.99907 26.604C12.3219 23.3984 20.0175 24.943 24.6137 30.3401L28.1731 34.5198C28.5975 35.018 29.3824 34.4955 29.0865 33.9117L26.604 29.0151C23.3985 22.6924 24.9431 14.9967 30.3402 10.4006L34.5199 6.84117C35.0181 6.41678 34.4956 5.63181 33.9118 5.92772L29.0152 8.4102C22.6925 11.6157 14.9968 10.0711 10.4006 4.67402L6.84123 0.494337C6.41688 -0.00385229 5.63191 0.518684 5.92777 1.10241L8.41025 5.99898C11.6158 12.3218 10.0712 20.0174 4.67411 24.6136L0.494429 28.173Z" fill="#CB5846"/>
                        </svg>
                    </div>
                </div>
                <div className='Title relative'>
                    <h1 className='font-bold text-3xl  md:text-[64px] md:leading-[77px] md:max-w-[720px] text-center'>Unlock Your Online Potential with <span className='underline text-[#CB5846]'>Doofdi</span></h1>
                </div>
                <div className=' stars lg:w-[935px] w-full flex justify-between md:py-4'>
                    <div>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.494429 28.173C-0.00376182 28.5974 0.518775 29.3823 1.1025 29.0865L5.99907 26.604C12.3219 23.3984 20.0175 24.943 24.6137 30.3401L28.1731 34.5198C28.5975 35.018 29.3824 34.4955 29.0865 33.9117L26.604 29.0151C23.3985 22.6924 24.9431 14.9967 30.3402 10.4006L34.5199 6.84117C35.0181 6.41678 34.4956 5.63181 33.9118 5.92772L29.0152 8.4102C22.6925 11.6157 14.9968 10.0711 10.4006 4.67402L6.84123 0.494337C6.41688 -0.00385229 5.63191 0.518684 5.92777 1.10241L8.41025 5.99898C11.6158 12.3218 10.0712 20.0174 4.67411 24.6136L0.494429 28.173Z" fill="#CB5846"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.494429 28.173C-0.00376182 28.5974 0.518775 29.3823 1.1025 29.0865L5.99907 26.604C12.3219 23.3984 20.0175 24.943 24.6137 30.3401L28.1731 34.5198C28.5975 35.018 29.3824 34.4955 29.0865 33.9117L26.604 29.0151C23.3985 22.6924 24.9431 14.9967 30.3402 10.4006L34.5199 6.84117C35.0181 6.41678 34.4956 5.63181 33.9118 5.92772L29.0152 8.4102C22.6925 11.6157 14.9968 10.0711 10.4006 4.67402L6.84123 0.494337C6.41688 -0.00385229 5.63191 0.518684 5.92777 1.10241L8.41025 5.99898C11.6158 12.3218 10.0712 20.0174 4.67411 24.6136L0.494429 28.173Z" fill="#CB5846"/>
                        </svg>
                    </div>
                </div>
                <div className='descreiption'>
                    <p className='font-normal md:text-xl text-base md:max-w-[720px] text-center'>Discover the power of AI content creation and social media promotion. Boost your online presence effortlessly.</p>
                </div>
                <div className='people flex justify-between md:w-full flex-wrap items-center'>
                    <div className='hidden md:flex lg:w-auto md:w-1/4'>
                        <img src="/istockphoto-1369129481-612x612-removebg-preview 1.png" alt="person chat on tablet" />
                    </div>
                    <ButtonOrange text='Learn More' className='text-white shadow-lg py-3 px-8 bg-[#CB5846] md:my-0 my-6 rounded-[40px]'></ButtonOrange>
                    <div className='hidden md:flex lg:w-auto md:w-1/4'>
                        <img src="/image14.png" alt="couple chating on mobile" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner