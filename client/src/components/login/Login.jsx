import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Button, InputForm, InputRadio } from '..'
import { set, useForm } from 'react-hook-form'
import { apiRegister, apiSignIn } from '~/apis/auth'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useAppStore } from '~/store/useAppStore'
import { useUserStore } from '~/store/useUserStore'

const Login = () => {
    const [variant, setVariant] = useState('LOGIN')
    const [isLoading, setIsLoading] = useState(false)
    const { setModal } = useAppStore()
    const { token, setToken } = useUserStore()
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    useEffect(() => {
        reset()
    }, [variant])
    const onSubmit = async (data) => {
        if (variant === 'REGISTER') {
            setIsLoading(true)
            const response = await apiRegister(data)
            setIsLoading(false)
            if (response.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: response.mes,
                    showConfirmButton: true,
                    confirmButtonText: 'Go sign in',
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) setVariant('LOGIN')
                })
            } else {
                toast.error(response.mes)
            }
        }
        if (variant === 'LOGIN') {
            const { name, role, ...payload } = data
            const response = await apiSignIn(payload)
            if (response.success) {
                toast.success(response.mes)
                setToken(response.accessToken)
                setModal(false, null)
            } else toast.error(response.mes)
        }
    }
    console.log(token)
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
            <div className='flex flex-col gap-2 px-4'>
                <form>
                    {variant === 'REGISTER' && <InputForm
                        label='Fullname'
                        register={register}
                        id='name'
                        inputClassname='rounded-md'
                        placeholder='Enter your full name here'
                        errors={errors}
                        validate={{ required: 'This field must not is empty' }}
                    />}

                    <InputForm
                        label='Phone number'
                        register={register}
                        id='phone'
                        inputClassname='rounded-md'
                        placeholder='Enter your phone number here'
                        validate={{
                            required: 'This field must not is empty',
                            pattern: {
                                value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                                message: 'Phone number invalid'
                            },
                        }}
                        errors={errors}
                    />

                    <InputForm
                        label='Password'
                        register={register}
                        id='password'
                        inputClassname='rounded-md'
                        placeholder='Enter your password here'
                        type='password'
                        errors={errors}
                        validate={{ required: 'This field must not is empty' }}
                    />
                    {variant === 'REGISTER' && <InputRadio
                        label='Type account'
                        register={register}
                        id='role'
                        inputClassname='rounded-md'
                        errors={errors}
                        validate={{ required: 'This field must not is empty' }}
                        options={[
                            { label: 'User', value: 'USER' },
                            { label: 'Agent', value: 'AGENT' },
                        ]}
                    />}
                </form>
                <Button
                    handleOnClick={handleSubmit(onSubmit)}
                    className='py-2 my-6'>
                    {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                </Button>
                <span
                    className='cursor-pointer text-main-500 hover:underline text-center'>
                    Forgot your password?
                </span>
            </div>
        </div>
    )
}

export default Login
