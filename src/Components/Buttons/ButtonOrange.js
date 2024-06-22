import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const ButtonOrange = (
    {
        text="Click me",
        className="",
        type="button",
        href="#",
        ...props
    }
) => <Link  className={`  md:text-sm font-normal rounded-[14px]   ${className}`} type={type} to={href} {...props}>{text}</Link>

export default ButtonOrange