import React from 'react'

const Home = () => {
    return (
        <div className='bg-gray-500 w-full'>
            <div className='w-full h-fit relative'>
                <img
                    className='w-full h-[750px] object-cover'
                    alt='banner'
                    src="/banner.png"
                />
                <div className='absolute inset-0 flex items-center justify-center flex-col gap-6 pt-12'>
                    <h1 className='text-5xl text-white uppercase'>find your dream home</h1>
                    <span className='text-white flex flex-col items-center text-lg'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat corporis cum aspernatur temporibus!</span>
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </span>
                </div>
            </div>
            <div className='w-main mx-auto'>
                content
            </div>
        </div>
    )
}

export default Home
