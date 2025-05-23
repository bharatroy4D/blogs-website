import React from 'react';
import BlogsViewLeft from './BlogsViewLeft';
import BlogsViewRight from './BlogsViewRight';

const BlogsView = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 max-w-7xl px-5 pt-5 pb-8 lg:px-10 mx-auto'>
      <BlogsViewLeft />
      <BlogsViewRight />
    </div>
  );
};

export default BlogsView;
