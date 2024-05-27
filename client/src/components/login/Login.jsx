import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Button, InputForm } from '..'
import { useForm } from 'react-hook-form'

const Login = () => {
    const [variant, setVariant] = useState('LOGIN')
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    useEffect(()=>{
        reset()
    },[variant])
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div
            onClick={e => e.stopPropagation()}
            className='bg-white rounded-md p-4 flex flex-col gap-6'>
            <h1 className='text-3xl font-semibold tracking-tight font-agbalumo'>Welcom to Real-Estate</h1>
            <div
                className='flex border-b w-full justify-start py-6 gap-6'>
                <span
                    onClick={() => setVariant('LOGIN')}
                    className={clsx(variant === 'LOGIN' && 'border-b-2 border-main-700 ', 'cursor-pointer')}>Login</span>

                <span
                    onClick={() => setVariant('REGISTER')}
                    className={clsx(variant === 'REGISTER' && 'border-b-2 border-main-700 ', 'cursor-pointer')}>New Account</span>
            </div>
            <div className='flex flex-col gap-4 px-4'>
                <form>
                    {variant === 'REGISTER' && <InputForm
                        label='Fullname'
                        register={register}
                        id='name'
                        inputClassname='rounded-md'
                        placeholder='Enter your full name here'
                        validate={{ require: 'This field must not is empty' }}
                        errors={errors}
                    />}

                    <InputForm
                        label='Phone number'
                        register={register}
                        id='phone'
                        inputClassname='rounded-md'
                        placeholder='Enter your phone number here'
                        validate={{ require: 'This field must not is empty' }}
                        errors={errors}
                    />

                    <InputForm
                        label='Password'
                        register={register}
                        id='password'
                        inputClassname='rounded-md'
                        placeholder='Enter your password here'
                        type='password'
                        validate={{ require: 'This field must not is empty' }}
                        errors={errors}
                    />
                </form>
                <Button
                    handleOnClick={handleSubmit(onSubmit)}
                    className='py-2 my-6'>
                    {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                </Button>
                <span
                    className='cursor-pointer text-main-500 hover:underline text-center'
                >Forgot your password?</span>
            </div>
        </div>
    )
}

export default Login
