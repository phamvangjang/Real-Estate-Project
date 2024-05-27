import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '..'
import { navigations } from '~/utils/constants'
import clsx from 'clsx'
import withRouter from '~/hocs/withRouter'
import { twMerge } from 'tailwind-merge'

const Navigation = ({ location }) => {
  return (
    <div
      className={twMerge(clsx('flex items-center justify-between bg-transparent w-full fixed top-[85px] z-50 px-[100px] py-[26px]',
        location.pathname !== '/' && 'bg-white'
      ))}>
      <Link
        to='/'>
        <img
          src='/logo-real-estate.jpg'
          alt='logo'
          className='w-[80px] object-contain'
        />
      </Link>

      <div
        className={clsx(
          'flex items-center gap-6 text-main-100',
          location === '/' ? 'text-main-100' : 'text-gray-700')}>
        {navigations.map(el => (
          <NavLink
            className={({ isActive }) =>
              clsx(isActive
                && 'font-medium',
                location.pathname === '/'
                  ? 'text-white text-lg'
                  : 'text-gray-900'
              )}
            to={el.path}
            key={el.id}>
            {el.text}
          </NavLink>
        ))}
        <Button
          className={twMerge(clsx(location.pathname === '/' && 'bg-transparent border border-main-100'))}
        >Add listing</Button>
      </div>
    </div>
  )
}

export default withRouter(Navigation)
