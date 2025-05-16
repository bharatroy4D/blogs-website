import React from 'react';
import Top from './Top/Top';
import Banner from './Banner/Banner';
import BannerContent from './BannerContent/BannerContent';
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Top></Top>
            <div className='flex items-center w-full gap-6 max-w-7xl px-5 lg:px-10 mx-auto'>
            <Banner></Banner>
            <BannerContent></BannerContent>
            </div>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;