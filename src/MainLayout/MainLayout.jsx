import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto mt-4'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;