import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { CgSpinner } from "react-icons/cg";

const Button = ({ children, className, handleOnClick, type = 'button', disabled }) => {
    return (
        <button
            type={type}
            onClick={handleOnClick}
            className={twMerge(
                clsx('p-3 text-white bg-main-700 rounded-md flex justify-center items-center', className, disabled && 'opacity-50')
            )}
            disabled={disabled}>
            {disabled && <span className='animate-spin'>
                <CgSpinner />
            </span>}
            {children}
        </button>
    )
}

export default Button
