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
import BlogContent from './BlogContent/BlogContent';

const Home = () => {
    return (
        <div>
            <Top></Top>
            <BlogContent></BlogContent>
            <div className='bg-base-100'>
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