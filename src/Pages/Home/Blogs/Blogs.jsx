import React, { useEffect, useState } from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (

        <div className='max-w-7xl px-5 py-6 lg:px-10 mx-auto'>
            <div className='flex items-center justify-between gap-6'>
                {
                    blogs.slice(0, 4).map(blog => (
                        <div className='relative flex flex-col gap-2 shadow rounded'>
                            <img src={blog.img} alt="" className='w-72 h-40 rounded transform hover:scale-105 duration-1000 overflow-hidden' />
                            <p className='absolute top-28 left-3 z-10 text-sm font-bold text-white bg-gray-500 rounded w-fit py-1 px-2'>{blog.category}</p>
                            <p className=' text-gray-700  font-medium py-1 px-4'>{blog.description}</p>
                            <div className='flex justify-between items-center px-4 pb-4'>
                                <div className='flex items-center gap-2 '>
                                    <CiCalendarDate className='text-xl' />
                                    <span className='text-sm text-gray-600 font-semibold '>{blog.date}</span>
                                </div>
                                <CiBookmark className=' text-3xl shadow bg-gray-100 p-2 rounded-full'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;