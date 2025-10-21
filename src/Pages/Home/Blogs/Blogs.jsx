import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import useFetch from '../../../hooks/useFetch';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Blogs = () => {
  const { data, loading, error } = useFetch({ url: "blogs.json" });

  const badgeColors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-pink-600'];

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-blue-500 font-semibold text-lg animate-pulse">
          Loading latest blogs...
        </p>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-500 font-semibold py-10">
        Error loading blogs. Please try again later.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 py-12">
      {/* Header */}
      <SectionTitle title={'Latest Blogs'} />

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        {data.slice(0, 4).map((blog, index) => (
          <Link
            key={blog.id}
            to={`/blogsView/${blog.id}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                loading="lazy"
                className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
              <span
                className={`absolute top-3 left-3 text-xs font-semibold text-white uppercase tracking-wide py-1 px-3 rounded-full ${badgeColors[index % badgeColors.length]
                  }`}
              >
                {blog.category}
              </span>
            </div>

            {/* Blog Info */}
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3 my-2">
                {blog.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-gray-500">
                <div className="flex items-center gap-2">
                  <CiCalendarDate className="text-lg" />
                  <span className="text-xs font-medium">{blog.date}</span>
                </div>
                <CiBookmark className="text-2xl hover:text-blue-500 transition" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
