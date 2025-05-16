import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../Components/TopBar/TopBar';
import Navbar from '../Components/Navbar/Navbar';


const Root = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;