import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../Components/TopBar/TopBar';

const Root = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;