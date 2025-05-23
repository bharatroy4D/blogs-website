import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header'
import Footer from '../Components/Shared/Footer/Footer';
import TopScroll from '../Components/TopScroll/TopScroll';


const Root = () => {
    return (
        <div>         
            <TopScroll/>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;