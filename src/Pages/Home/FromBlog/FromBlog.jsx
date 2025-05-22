import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import useFetch from '../../../Components/CustomHooks/useFetch';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

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
            <SectionTitle title={'From The Blog'} view={'View All'} />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-12'>
                {loading && <p className='text-center text-lg font-medium'>Loading...</p>}
                {error && <p className='text-center text-red-500'>Error: {error}</p>}

                {!loading && !error && data?.map(blog => (
                    <Link key={blog.id} to={`/blogsView/${blog.id}`}>
                        <div className='bg-white p-4 flex flex-col md:flex-row gap-4 transition rounded-lg shadow-sm hover:shadow-md'>
                            {/* Blog Image */}
                            <img
                                src={blog.img}
                                alt="Blog Thumbnail"
                                className='w-full md:w-60 h-48 object-cover rounded-lg transform hover:scale-[1.02] duration-500'
                            />

                            {/* Blog Content */}
                            <div className='flex flex-col justify-between w-full'>
                                {/* Category Badge */}
                                <button className={`text-sm text-white font-bold w-fit py-1 px-3 rounded 
                                    ${colorMap[blog.category?.toLowerCase()] || colorMap.default}`}>
                                    {blog.category}
                                </button>

                                {/* Title */}
                                <h1 className='text-lg md:text-xl font-bold mt-2'>{blog.description}</h1>

                                {/* Author & Date */}
                                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <img
                                            src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                            alt="Author"
                                            className='rounded-full w-6 h-6 hover:scale-110 transition-transform duration-300'
                                        />
                                        <span className='text-sm font-semibold'>Bin McKiney</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <CiCalendarDate className='text-xl' />
                                        <span className='text-sm font-semibold'>{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FromBlog;
