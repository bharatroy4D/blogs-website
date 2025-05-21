import React from 'react';
import useFetch from '../../../Components/CustomHooks/useFetch';
import { BsCalendarDate } from 'react-icons/bs';

const BlogsViewRight = () => {
    const { data } = useFetch({ url: '/blogs.json' })
    console.log(data)
    return (
        <div className='w-[30%] mt-17  rounded-2xl bg-base-100'>
            <img src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/10/Advertisement-2.webp" alt="" />

            {/* // Recent post */}
            <div className='flex flex-col gap-5 rounded shadow py-6 px-2 mt-10 '>
                <h1 className='text-2xl font-bold border-b border-gray-400 pb-5'>Recent Post</h1>
                <div className='space-y-3'>
                    {
                        data && data.map(blog => (
                            <div key={blog.id}>
                                <div className='flex gap-4'>
                                    <img src={blog.img} alt="" className='w-30 rounded-md' />
                                    <div className='font-medium space-y-3'>

                                        <p>{blog.description.length> 40 ? `${blog.description.slice(0, 40)}...`: blog.description}</p>

                                        <p className='flex items-center gap-2 text-sm font-semibold'><BsCalendarDate />
                                            {blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default BlogsViewRight;