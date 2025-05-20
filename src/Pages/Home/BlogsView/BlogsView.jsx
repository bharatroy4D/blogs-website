import React from 'react';
import BlogsViewLeft from './BlogsViewLeft';
import BlogsViewRight from './BlogsViewRight';

const BlogsView = () => {
    return (
        <div className='flex gap-5 max-w-7xl px-5 pt-5 pb-8 lg:px-10'>
            <BlogsViewLeft/>
            <BlogsViewRight/>
        </div>
    );
};

export default BlogsView;