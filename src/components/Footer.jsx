import React from 'react'
import Logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-15 text-sm'>
                <div>
                    <img
                        src={Logo} alt="logo"
                        className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600 text-base'>All Your <span className='font-bold'>Pet Essentials</span> In One Place</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Links</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get in Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 1234567890</li>
                        <li>contact@petsphere.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center font-semibold'>Copyright 2025 petsphere.com - All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer