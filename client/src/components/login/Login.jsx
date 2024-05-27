import clsx from 'clsx'
import React, { useState } from 'react'

const Login = () => {
    const [variant, setVariant] = useState('LOGIN')
    return (
        <div
            onClick={e => e.stopPropagation()}
            className='bg-white rounded-md p-4 flex flex-col gap-6'>
            <h1 className='text-3xl font-semibold tracking-tight font-agbalumo'>Welcom to Real-Estate</h1>
            <div
                className='flex border-b w-full justify-start py-6 gap-6'>
                <span
                onClick={()=> setVariant('LOGIN')}
                    className={clsx(variant === 'LOGIN' && 'border-b-2 border-main-700 ', 'cursor-pointer')}>Login</span>

                <span
                onClick={()=> setVariant('REGISTER')}
                    className={clsx(variant === 'REGISTER' && 'border-b-2 border-main-700 ', 'cursor-pointer')}>New Account</span>
            </div>
        </div>
    )
}

export default Login
