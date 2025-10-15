import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header'
import TopScroll from '../Components/TopScroll/TopScroll';
import TopBar from '../shared/topBar/TopBar';
import Navbar from '../shared/navBar/Navbar';
import Footer from '../shared/footer/Footer';


const Root = () => {
    return (
        <div>
            <TopScroll />
            <TopBar />
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;