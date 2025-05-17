import React from 'react';
import { FaRegComment } from 'react-icons/fa6';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useFetch from '../../../Components/CustomHooks/useFetch';

const PostBlog = () => {
    const { data, loading, error } = useFetch({ url: 'blogs.json' }); // ✅ replace with real URL

    return (
        <div className='max-w-7xl px-5 py-10 lg:px-10 mx-auto bg-blue-50'>
            <SectionTitle title={'Most Post Discussed'} view={'View All'} />

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {data?.slice(4, 10).map((post) => (
                    <div key={post.id}>
                        <div className='relative  gap-3 rounded-xl shadow '>
                            <img src={post.img} alt="" className='w-full h-54 rounded transform hover:translate-x-1 duration-1000' />
                            {/* Gradient overlay */}
                            <div className=' rounded-2xl z-0'></div>
                            {/* Text Content */}
                            <div className='flex flex-col gap-3 p-5'>
                                <button className='text-sm text-white font-bold w-fit py-1 px-3 rounded bg-green-400'>{post.category}</button>
                                <h1 className='text-xl font-bold'>{post.description}</h1>
                                <div className='flex items-center gap-7'>
                                    <div className='flex justify-between items-center w-full '>
                                        <div className='flex items-center gap-2 '>
                                            <CiCalendarDate className='text-xl' />
                                            <span className='text-sm text-gray-600 font-semibold '>{post.date}</span>
                                        </div>
                                        <CiBookmark className=' text-3xl shadow bg-gray-100 p-2 rounded-full' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default PostBlog;
