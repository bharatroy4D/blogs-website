import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useFetch from '../../../Components/CustomHooks/useFetch';
import { Link } from 'react-router-dom';

// Category color mapping
const categoryColors = {
    Health: 'bg-green-400',
    Technology: 'bg-blue-400',
    Lifestyle: 'bg-pink-400',
    Business: 'bg-yellow-400',
    Travel: 'bg-purple-400',
    Education: 'bg-red-400',
    Default: 'bg-gray-400',
};

const PostBlog = () => {
    const { data, loading, error } = useFetch({ url: 'blogs.json' });

    return (
        <div className='bg-blue-50'>
            <div className='max-w-7xl px-5 py-8 mt-6 lg:px-10 mx-auto'>
                <SectionTitle title={'Most Post Discussed'} view={'View All'} />

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {data?.slice(4, 10).map((post) => {
                        const bgClass = categoryColors[post.category] || categoryColors.Default;

                        return (
                            <div>
                                <Link key={post.id} to={`/blogsView/${post.id}`}>
                                    <div key={post.id} className=''>
                                        <div className=' relative gap-3 rounded shadow bg-white overflow-hidden'>
                                            <img
                                                src={post.img}
                                                alt={post.category}
                                                className='w-full h-54 rounded-t object-cover transform hover:scale-105 transition duration-1000'
                                            />

                                            <div className='flex flex-col gap-3 p-5'>
                                                <button className={`text-sm text-white font-bold w-fit py-2 px-4 rounded ${bgClass}`}>
                                                    {post.category}
                                                </button>
                                                <h1 className='text-xl font-bold'>{post.description}</h1>

                                                <div className='flex justify-between items-center mt-3'>
                                                    <div className='flex items-center gap-2'>
                                                        <CiCalendarDate className='text-xl' />
                                                        <span className='text-sm text-gray-600 font-semibold'>{post.date}</span>
                                                    </div>
                                                    <CiBookmark className='text-3xl shadow bg-gray-100 p-2 rounded-full' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PostBlog;
