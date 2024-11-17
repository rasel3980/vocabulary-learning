import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            Welcome , i am Mainlayout
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;