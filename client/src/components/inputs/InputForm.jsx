import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputForm = ({
    style = 'form-input',
    containerClassname,
    label,
    id,
    type = 'text',
    register,
    errors = {},
    inputClassname,
    validate,
    placeholder
}) => {
    return (
        <div className={twMerge(
            clsx('flex flex-col gap-2')
        )}>
            {label && <label className='font-medium text-main-700' htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                className={twMerge(
                    clsx(style, inputClassname, 'placeholder:text-sm')
                )}
                {...register(id, validate)}
                placeholder={placeholder}
            />
            {errors[id] && <small className='text-red-500 italic'>{errors[id]?.messages}</small>}
        </div>
    )
}

export default InputForm
