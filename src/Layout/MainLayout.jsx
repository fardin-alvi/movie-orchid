import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div className='bg-base-200'>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;