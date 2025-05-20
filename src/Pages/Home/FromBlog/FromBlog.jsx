import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import useFetch from '../../../Components/CustomHooks/useFetch';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const FromBlog = () => {
    const { data, loading, error } = useFetch({ url: 'blogs.json' });

    const colorMap = {
        travel: 'bg-green-400',
        technology: 'bg-blue-400',
        lifestyle: 'bg-pink-400',
        food: 'bg-yellow-400',
        default: 'bg-gray-400',
        sport: 'bg-green-400',
        health: 'bg-purple-400',
    };

    return (
        <div className='max-w-7xl px-5 pt-10 lg:px-10 mx-auto'>
            {/* Section Title */}
            <SectionTitle title={'From The Blog'} view={'View All'} />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-12'>
                {/* Loading State */}
                {loading && <p className='text-center text-lg font-medium'>Loading...</p>}

                {/* Error State */}
                {error && <p className='text-center text-red-500'>Error: {error}</p>}

                {/* Blog Cards */}
                {!loading && !error && data && data.map(blog => (
                    <div key={blog.id} className='bg-white  p-4 flex gap-4  transition'>
                        {/* Blog Image */}
                        <img
                            src={blog.img}
                            alt="Blog Thumbnail"
                            className='w-60 h-44 object-cover rounded transform hover:translate-x-1 duration-1000'
                        />

                        {/* Blog Content */}
                        <div className='flex flex-col justify-between'>
                            {/* Category Button with Dynamic Color */}
                            <button className={`text-sm text-white font-bold w-fit py-1 px-3 rounded 
                                ${colorMap[blog.category?.toLowerCase()] || colorMap.default}`}>
                                {blog.category}
                            </button>

                            {/* Blog Title */}
                            <h1 className='text-xl font-bold mt-2'>{blog.description}</h1>

                            {/* Author & Date */}
                            <div className='flex items-center justify-between mt-4'>
                                {/* Author */}
                                <div className='flex items-center gap-2'>
                                    <img
                                        src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                        alt="Author"
                                        className='rounded-full w-6 h-6 hover:scale-110 transition-transform duration-300'
                                    />
                                    <span className='text-sm font-semibold'>Bin McKiney</span>
                                </div>

                                {/* Date */}
                                <div className='flex items-center gap-2'>
                                    <CiCalendarDate className='text-xl' />
                                    <span className='text-sm font-semibold'>{blog.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FromBlog;
