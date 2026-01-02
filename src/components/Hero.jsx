import React from 'react'
import Hero_Img from './../assets/hero.jpg'
import { FaPaw } from 'react-icons/fa'
const Hero = () => {
    return (
        <section className='flex flex-col sm:flex-row border mb-15 border-gray-400'>
            <div className='flex w-full sm:w-1/2 items-center justify-center my-5'>
                <div className='text-[#414141] flex flex-col gap-1.5 sm:gap-0'>
                    <div className='flex items-center gap-2'>
                        <FaPaw size={20} />
                        <p className='font-bold text-lg sm:text-base'>All Your</p>
                    </div>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl font-extrabold'>Pet Essentials</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-bold text-lg sm:text-base'>In One Place</p>
                        <FaPaw size={20} />
                    </div>
                </div>
            </div>
            <img
                className='w-full sm:w-1/2'
                src={Hero_Img} alt="hero img" />
        </section>
    )
}
export default Hero