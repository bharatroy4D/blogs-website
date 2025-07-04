import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import useFetch from '../../../Components/CustomHooks/useFetch';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const Blogs = () => {
  const { data, loading, error } = useFetch({ url: "blogs.json" });

  const badgeColors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-pink-600'];

  if (loading) return <p className="text-center text-lg py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Error loading blogs.</p>;

  return (
    <div className='max-w-7xl px-5 py-10 lg:px-10 mx-auto'>
      <h2 className='flex items-center justify-between roboto text-2xl lg:text-3xl font-bold mb-6'>Latest Blogs <IoArrowForwardCircleOutline className='text-3xl lg:hidden' />
      </h2>


      {/* Responsive Grid */}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {data.slice(0, 4).map((blog, index) => (
          <Link key={blog.id} to={`/blogsView/${blog.id}`} className='group'>
            <div className='relative flex flex-col gap-2 shadow rounded overflow-hidden bg-white hover:shadow-xl transition duration-300'>
              <img
                src={blog.img}
                alt="Blog Cover"
                className='w-full h-32 lg:h-44 object-cover rounded-t transform group-hover:scale-105 transition duration-500'
              />
              <p className={`absolute top-28 left-3 z-10 text-sm font-bold text-white rounded w-fit py-1 px-2 ${badgeColors[index % badgeColors.length]}`}>
                {blog.category}
              </p>

              {/* Mobile: sliced description */}
              <p className='text-gray-700 text-sm font-medium py-1 px-4 block lg:hidden'>
                {blog.description.slice(0, 20)}...
              </p>

              {/* Large: full description */}
              <p className='text-gray-700 font-medium py-1 px-4 hidden lg:block'>
                {blog.description}
              </p>

              <div className='flex justify-between items-center px-2 pb-2'>
                <div className='flex items-center gap-2 text-gray-600'>
                  <CiCalendarDate className='lg:text-xl' />
                  <span className='text-xs lg:text-sm font-semibold'>{blog.date}</span>
                </div>
                <CiBookmark className='text-3xl hidden lg:block p-2 rounded-full shadow bg-gray-100 text-gray-700' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
