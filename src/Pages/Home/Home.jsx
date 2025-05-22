import React from 'react';
import Top from './Top/Top';
import Banner from './Banner/Banner';
import BannerContent from './BannerContent/BannerContent';
import Blogs from './Blogs/Blogs';
import Preview from './Preview/Preview';
import PostBlog from './PostBlog/PostBlog';
import MostBlogs from './MostBlogs/MostBlogs';
import Discover from './Discover/Discover';
import FromBlog from './FromBlog/FromBlog';

const Home = () => {
    return (
        <div>
            <Top></Top>
            <div className='bg-base-100'>
                <div className='flex flex-col lg:flex-row items-center w-full gap-6 max-w-7xl px-5 lg:px-10 mx-auto'>
                    <Banner></Banner>
                    <BannerContent></BannerContent>
                </div>
                <Blogs></Blogs>
                <Preview></Preview>
            </div>
            <PostBlog></PostBlog>
            <MostBlogs></MostBlogs>
            <Discover></Discover>
            <FromBlog></FromBlog>
        </div>
    );
};

export default Home;