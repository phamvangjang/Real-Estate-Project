import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputRadio = ({
    style = 'form-radio',
    containerClassname,
    id,
    register,
    errors = {},
    inputClassname,
    validate,
    placeholder,
    options = [],
    label
}) => {
    return (
        <div className={twMerge(
            clsx('flex flex-col gap-2 w-full', containerClassname)
        )}> 
        {label && (<label className='font-medium text-main-700' htmlFor={id}>{label}</label>)}
            {
                options.map((el) => (
                    <div className='flex items-center gap-2 cursor-pointer' key={el.value}>
                        <input
                            type='radio'
                            name={id}
                            id={el.value}
                            value={el.value}
                            className={twMerge(
                                clsx(style, inputClassname, 'placeholder:text-sm')
                            )}
                            {...register(id, validate)}
                            placeholder={placeholder}
                        />
                        <label className='cursor-pointer' htmlFor={el.value}>{el.label}</label>
                    </div>
                ))}

            {errors[id] && <small className='text-red-500 italic'>{errors[id]?.message}</small>}
        </div>
    )
}

export default InputRadio
