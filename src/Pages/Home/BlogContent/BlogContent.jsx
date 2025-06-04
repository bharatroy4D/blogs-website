import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';
import useFetch from '../../../Components/CustomHooks/useFetch';
import { Link } from 'react-router-dom';

const BlogContent = () => {
    const { data, error } = useFetch({ url: 'blogs.json' });
    const blogs = data?.slice(10, 13); // 3 blog card

    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
    if (!blogs || blogs.length < 3) return <p className="text-center py-10">Not enough blog data</p>;

    return (
        <div className="max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto my-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">

                {/* Left Side: Large Card */}
                <Link to={`/blogsView/${blogs[0]?.id}`}>
                    <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[350px] lg:h-full">
                        <img src={blogs[0]?.img} alt="Banner" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>

                        {/* Text Content */}
                        <div className="absolute inset-x-0 bottom-4 px-4 sm:px-6 lg:px-10 z-10 text-white flex flex-col gap-2 sm:gap-3">
                            <button className="text-xs sm:text-sm font-bold py-1 px-3 rounded bg-blue-400 w-max">
                                {blogs[0]?.category}
                            </button>
                            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                                {blogs[0]?.title}
                            </h1>
                            <p className="text-xs sm:text-sm font-medium line-clamp-2">
                                {blogs[0]?.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={blogs[0]?.authorImg}
                                        alt="Author"
                                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full"
                                    />
                                    <h2 className="font-bold">{blogs[0]?.author}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CiCalendarDate className="text-lg" />
                                    <span className="font-semibold">{blogs[0]?.date}</span>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <FaRegComment className="text-lg" />
                                    <span className="font-semibold">{blogs[0]?.comments || 0} comments</span>
                                </div>
                                <CiBookmark className="bg-base-100/45 text-2xl p-1.5 rounded-full ml-auto" />
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Right Side: Two small cards */}
                <div className="flex flex-col gap-5">
                    {blogs.slice(1).map((item, index) => (
                        <Link key={item.id} to={`/blogsView/${item.id}`}>
                            <div
                                className="flex flex-col sm:flex-row gap-4 rounded-xl p-2 sm:p-3 hover:shadow-lg transition-all duration-300"
                                style={{
                                    boxShadow: '0 0 10px rgba(191, 219, 254, 0.7)' // Tailwind's blue-100 in rgba
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full sm:w-40 md:w-60 h-48 sm:h-auto rounded object-cover transform hover:translate-x-1 duration-700"
                                />
                                <div className="flex flex-col justify-center gap-2 sm:gap-3">
                                    <button
                                        className={`text-xs sm:text-sm text-white font-bold w-fit py-1 px-3 rounded ${
                                            index === 0 ? 'bg-green-400' : 'bg-pink-400'
                                        }`}
                                    >
                                        {item.category}
                                    </button>
                                    <h1 className="text-base md:text-lg font-bold line-clamp-2">
                                        {item.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={item.authorImg}
                                                alt={item.author}
                                                className="w-6 h-6 rounded-full transition-transform duration-500 hover:scale-110"
                                            />
                                            <h2 className="font-semibold">{item.author}</h2>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CiCalendarDate className="text-lg" />
                                            <span className="font-semibold">{item.date}</span>
                                        </div>
                                        <CiBookmark className="bg-gray-100 text-2xl p-1 ml-auto rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogContent;
