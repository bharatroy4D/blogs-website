import React from 'react';
import useFetch from '../../Components/CustomHooks/useFetch';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Technology = () => {
    const { data, loading, error } = useFetch({ url: '/blogs.json' });

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
    if (error) return <p>Error: {error}</p>;

    const technologyBlogs = data?.filter(blog =>
        blog.category?.toLowerCase() === 'technology'
    );

    return (
        <div className="container px-5 lg:px-10 py-10 mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Technology Blogs</h2>

            {
                technologyBlogs?.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologyBlogs.map(blog => (
                            <Link key={blog.id} to={`/blogsView/${blog.id}`}>
                                <div
                                    key={blog.id}
                                    className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group bg-white"
                                >
                                    <div className="overflow-hidden h-32 sm:h-56 lg:h-64">
                                        <img
                                            src={blog.img}
                                            alt={blog.title || 'Blog Image'}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                                                {blog.category}
                                            </span>
                                            <span className="hidden lg:inline-flex items-center text-sm text-gray-500 gap-1">
                                                <CiCalendarDate className="text-lg" /> {blog.date}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-semibold hidden lg:block text-gray-800 mb-2">
                                            {blog.title.slice(0, 32)}...
                                        </h3>
                                        {/* Mobile (default) truncated description */}
                                        <p className="text-gray-600 text-sm leading-relaxed block lg:hidden">
                                            {blog.description.slice(0, 30)}{blog.description.length > 30 ? '...' : ''}
                                        </p>

                                        {/* Desktop and larger: full description */}
                                        <p className="text-gray-600 text-sm leading-relaxed hidden lg:block">
                                            {blog.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No technology blogs found.</p>
                )
            }
        </div>
    );
};

export default Technology;
