import React from 'react';
import useFetch from '../../hooks/useFetch';

const Lifestyle = () => {
    const { data, loading, error } = useFetch({ url: 'blogs.json' });

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
    if (error) return <p className="text-center text-red-500 mt-8">Error: {error}</p>;

    const lifestyleBlogs = data?.filter(blog => blog.category === 'Lifestyle');

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Lifestyle Blogs</h2>

            {lifestyleBlogs && lifestyleBlogs.length > 0 ? (
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {lifestyleBlogs.map(blog => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                                />
                                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-4 text-white">
                                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{blog.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={blog.authorImg}
                                            alt={blog.author}
                                            className="w-9 h-9 rounded-full border-2 border-gray-200"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">{blog.author}</p>
                                            <p className="text-xs text-gray-400">{blog.date}</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No lifestyle blogs found.</p>
            )}
        </div>
    );
};

export default Lifestyle;
