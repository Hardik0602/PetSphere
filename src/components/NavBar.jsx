import React, { useState } from 'react'
import Logo from './../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdArrowRoundBack } from 'react-icons/io'
const NavBar = () => {
  const isActive = ({ isActive }) => {
    return (
      isActive
        ? 'border-b-[1.5px] border-gray-700'
        : ''
    )
  }
  const [visible, setVisible] = useState(false)
  return (
    <nav className='flex items-center justify-between py-5 font-medium'>
      <img
        src={Logo} alt="logo_img"
        className='w-36' />
      <ul className='hidden sm:flex gap-5 text-md text-gray-700'>
        <NavLink
          to='/'
          className={isActive}>
          Home
        </NavLink>
        <NavLink
          to='/products'
          className={isActive}>
          Products
        </NavLink>
        <NavLink
          to='/about'
          className={isActive}>
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={isActive}>
          Contact
        </NavLink>
      </ul>
      <div className='flex gap-5'>
        <Link to='/cart'>
          <FiShoppingCart size={20} />
        </Link>
        <button
          onClick={() => { setVisible(true) }}
          className='cursor-pointer sm:hidden'>
          <RxHamburgerMenu size={20} />
        </button>
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div className='p-3'>
            <button
              className='cursor-pointer'
              onClick={() => { setVisible(false) }}>
              <IoMdArrowRoundBack size={20} />
            </button>
          </div>
          <NavLink
            onClick={() => { setVisible(false) }}
            to='/'
            className='py-2 pl-6'>
            Home
          </NavLink>
          <NavLink
            onClick={() => { setVisible(false) }}
            to='/products'
            className='py-2 pl-6'>
            Products
          </NavLink>
          <NavLink
            onClick={() => { setVisible(false) }}
            to='/about'
            className='py-2 pl-6'>
            About
          </NavLink>
          <NavLink
            onClick={() => { setVisible(false) }}
            to='/contact'
            className='py-2 pl-6'>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
export default NavBar