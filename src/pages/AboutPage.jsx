import React from 'react'
import Hero_Img from './../assets/hero.jpg'
const AboutPage = () => {
  return (
    <div>
      <h2 className='text-3xl text-gray-500 mb-3 font-extrabold text-center'>About Us</h2>
      <div className='flex flex-col lg:flex-row gap-16 items-center'>
        <img
          className='w-full lg:w-2/4'
          src={Hero_Img} alt="hero img" />
        <div className='flex flex-col gap-6 lg:w-2/4 text-gray-600 text-justify'>
          <p>
            At PetSphere, we know that pets bring immeasurable joy, comfort, and love into our
            lives. That's why we've made it our mission to gather the best products from trusted
            brands and bring them right to your fingertips. Whether you're searching for healthy
            food, fun toys, cozy bedding, or grooming must-haves, PetSphere offers a thoughtful
            selection designed to keep every pet wagging, purring, and thriving.
          </p>
          <p>
            We're passionate pet lovers first and business second, which means we understand what
            it means to care for a furry family member. PetSphere aims to make pet parenting simpler
            by offering quality products, easy browsing, and reliable service all in one place. From
            new pet parents to seasoned companions, we're here to support every journey, because at
            PetSphere, every pet deserves the best.
          </p>
        </div>
      </div>
    </div>
  )
}
export default AboutPage