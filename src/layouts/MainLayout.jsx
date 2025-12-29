import React from 'react'
import NavBar from './../components/NavBar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <NavBar />
            <Outlet />
        </div>
    )
}
export default MainLayout