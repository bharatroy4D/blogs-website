import React from "react";
import { CiBookmark, CiCalendarDate } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import man from '../../../assets/man.jpeg'
import blogImg from '../../../assets/front-view-photographer-with-camera_1257223-84498.avif'

const BlogContent = () => {
  const { data, error } = useFetch({ url: "blogs.json" });
  const blogs = data?.slice(10, 13);

  if (error)
    return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!blogs || blogs.length < 3)
    return <p className="text-center py-10">Not enough blog data</p>;

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-10 my-10">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">

        {/*Left: Large Highlight Blog  */}
        <Link
          to={`/blogsView/${blogs[0]?.id}`}
          className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
        >
          <img
            src={blogImg}
            alt={blogs[0]?.title}
            loading="lazy"
            className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
            <button className="text-xs sm:text-sm font-semibold py-1 px-3 rounded-md bg-blue-500/80 backdrop-blur-md">
              {blogs[0]?.category}
            </button>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold leading-snug line-clamp-2">
              {blogs[0]?.title}
            </h1>
            <p className="hidden sm:block text-sm text-gray-200 line-clamp-2">
              {blogs[0]?.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm mt-2">
              <div className="flex gap-2 items-center">
                <img
                  src={man}
                  alt={blogs[0]?.author}
                  loading="lazy"
                  className="w-8 h-8 rounded-full border border-white/40"
                />
                <h2 className="font-semibold">{blogs[0]?.author}</h2>
              </div>
              <div className="flex items-center gap-1">
                <CiCalendarDate className="text-lg" />
                <span>{blogs[0]?.date}</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <FaRegComment className="text-lg" />
                <span>{blogs[0]?.comments || 0} comments</span>
              </div>
              <CiBookmark className="ml-auto text-2xl hover:text-blue-400 transition" />
            </div>
          </div>
        </Link>

        {/* Right: Two Smaller Blogs*/}
        <div className="flex flex-col gap-6 justify-between">
          {blogs.slice(1).map((item, index) => (
            <Link
              key={item.id}
              to={`/blogsView/${item.id}`}
              className="flex flex-col sm:flex-row gap-4  rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-500"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full md:w-48 lg:w-72 md:h-48 h-36 object-cover rounded-lg transform hover:scale-105 duration-700"
                />
                <span
                  className={`absolute top-2 left-2 text-[11px] font-semibold px-2 py-1 rounded-md text-white ${
                    index === 0 ? "bg-green-500/90" : "bg-pink-500/90"
                  }`}
                >
                  {item.category}
                </span>
              </div>

              <div className="flex flex-col justify-between gap-2 px-2 py-4 sm:gap-3">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2 transition">
                  {item.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex gap-2 items-center">
                    <img
                      src={man}
                      alt={item.author}
                      loading="lazy"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-medium">{item.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CiCalendarDate />
                    <span>{item.date}</span>
                  </div>
                  <CiBookmark className="ml-auto text-xl hover:text-blue-500 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
