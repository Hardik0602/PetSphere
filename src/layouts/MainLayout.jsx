import React from 'react'
import NavBar from './../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from '../components/ScrollToTop'
const MainLayout = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <ScrollToTop />
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    )
}
export default MainLayout