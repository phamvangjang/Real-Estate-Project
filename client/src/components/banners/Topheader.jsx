import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa";
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import withRouter from '~/hocs/withRouter';

const Topheader = ({location}) => {
    return (
        <div
            className={
                twMerge(
                    clsx(
                        'border-b border-main-400 h-[85px] bg-transparent w-full fixed top-0 z-50 flex items-center justify-between px-[100px] py-[26px] text-white',
                        location.pathname !== '/' && 'bg-main-700'))}>
            <span className='flex items-center gap-2'>
                <MdOutlineMail />
                <span>
                    <span>Email us at:</span>
                    <span className='text-gray-300'> example@gmail.com</span>
                </span>
            </span>

            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-6 text-gray-300 text-xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                </div>

                <div className='flex items-center pl-8 border-l border-main-400'>
                    <span className='flex items-center gap-2'>
                        <FaPhone />
                        <span className='text-gray-300'>123-456-7890</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Topheader)
