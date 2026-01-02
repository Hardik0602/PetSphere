import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaExchangeAlt } from 'react-icons/fa'
import { TbTruckReturn } from 'react-icons/tb'
const Policy = () => {
    return (
        <section className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center my-15 text-base text-gray-700'>
            <div>
                <FaExchangeAlt size={25} className='m-auto mb-3' />
                <p className='font-semibold mb-1'>Easy Exchange</p>
                <p className='text-gray-400 text-sm'>T&C Apply</p>
            </div>
            <div>
                <TbTruckReturn size={25} className='m-auto mb-3' />
                <p className='font-semibold mb-1'>Easy Return</p>
                <p className='text-gray-400 text-sm'>T&C Apply</p>
            </div>
            <div>
                <BiSupport size={25} className='m-auto mb-3' />
                <p className='font-semibold mb-1'>24x7 Customer Support</p>
            </div>
        </section>
    )
}
export default Policy