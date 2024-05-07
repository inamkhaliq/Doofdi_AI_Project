import React, { Children } from 'react'

const ButtonOrange = (
    {
        text="Click me",
        className="",
        type="button",
        href="#",
    }
) => <a  className={` bg-[#CB5846] md:text-sm font-normal rounded-[14px]   ${className}`} type={type} href={href}>{text}</a>

export default ButtonOrange