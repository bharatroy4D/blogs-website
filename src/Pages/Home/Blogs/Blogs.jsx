import React, { useEffect, useState } from 'react';
import { CiCalendarDate } from 'react-icons/ci';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (

        <div className='max-w-7xl px-5 py-6 lg:px-10 mx-auto'>
            <div className='flex items-center justify-between gap-6'>
                {
                    blogs.slice(0, 4).map(blog=>(
                        <div className='flex flex-col gap-2 shadow-lg rounded-xl'>
                            <img src={blog.img} alt="" className='w-72 h-40 rounded' />
                            <p className='text text-gray-700 text-center font-semibold py-1 px-3'>{blog.description}</p>
                              <div className='flex items-center gap-2 px-4 py-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='font-semibold '>Jul 11, 2025</span>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;