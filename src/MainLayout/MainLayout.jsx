import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Footer/Footer';
import Logout from '../Components/Logout';

const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-50 backdrop-blur-lg bg-white/30 shadow-lg '>
            <Header></Header>
            </div>
            <div className='min-h-[calc(100vh-288px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;