import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const categoryColors = {
  Health: 'bg-green-500',
  Technology: 'bg-blue-500',
  Lifestyle: 'bg-pink-500',
  Business: 'bg-yellow-500',
  Travel: 'bg-purple-500',
  Education: 'bg-red-500',
  Default: 'bg-gray-500',
};

const PostBlog = () => {
  const { data, loading, error } = useFetch({ url: 'blogs.json' });

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionTitle title="Most Discussed Posts" view="View All" />

        {loading && <p className="text-center text-gray-600 py-10 text-lg">Loading...</p>}
        {error && <p className="text-center text-red-500 py-10 text-lg">Error: {error}</p>}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {data?.slice(4, 10).map((post) => {
            const bgClass = categoryColors[post.category] || categoryColors.Default;

            return (
              <Link
                key={post.id}
                to={`/blogsView/${post.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title || post.category}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full ${bgClass}`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between gap-3">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {post.title || post.description.split(' ').slice(0, 8).join(' ')}...
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center mt-3 text-gray-500">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <CiCalendarDate className="text-lg text-gray-400" />
                      <span>{post.date}</span>
                    </div>
                    <CiBookmark className="text-2xl hover:text-indigo-600 transition duration-300 cursor-pointer" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostBlog;
