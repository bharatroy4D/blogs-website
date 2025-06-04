import React, { useEffect, useState } from 'react';
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., API call delay)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[60vh]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    <p className="mt-4 text-blue-600 font-semibold text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Top />
            <BlogContent />
            <div className="bg-base-100">
                <Blogs />
                <Preview />
            </div>
            <PostBlog />
            <MostBlogs />
            <Discover />
            <FromBlog />
        </div>
    );
};

export default Home;
