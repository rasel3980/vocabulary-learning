import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-288px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;