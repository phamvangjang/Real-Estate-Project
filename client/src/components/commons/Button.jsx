import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, onClick, type = 'button' }) => {
    return (
        <button
        type={type}
        onClick={onclick}
        className={twMerge(
            clsx('p-3 text-white bg-main-700 rounded-md', className)
        )}>
            {children}
        </button>
    )
}

export default Button
