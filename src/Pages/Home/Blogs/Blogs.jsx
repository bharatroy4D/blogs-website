// import React, { useEffect, useState } from 'react';
// import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
// import useFetch from '../../../Components/CustomHooks/useFetch';

// const Blogs = () => {
//     // const [blogs, setBlogs] = useState([]);
//     const {data, loading, error} = useFetch({url:"blogs.json"});

//     const badgeColors = [
//         'bg-blue-600',
//         'bg-green-600',
//         'bg-purple-600',
//         'bg-pink-600',
//     ];


//     return (
//         <div className='max-w-7xl px-5 py-6 lg:px-10 mx-auto'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//                 {
//                     data.slice(0, 4).map((blog) => (
//                         <Link key={blog.id} to={`/blogsView/${blog.id}`}>
//                             <div key={blog.id} className='relative flex flex-col gap-2 shadow rounded overflow-hidden'>
//                                 <img
//                                     src={blog.img}
//                                     alt=""
//                                     className='w-full h-40 object-cover rounded-t transform hover:scale-105 duration-1000'
//                                 />
//                                 <p className={`absolute top-28 left-3 z-10 text-sm font-bold text-white rounded w-fit py-1 px-2 ${badgeColors[index % badgeColors.length]}`}>
//                                     {blog.category}
//                                 </p>
//                                 <p className='text-gray-700 font-medium py-1 px-4'>
//                                     {blog.description}
//                                 </p>
//                                 <div className='flex justify-between items-center px-4 pb-4'>
//                                     <div className='flex items-center gap-2'>
//                                         <CiCalendarDate className='text-xl' />
//                                         <span className='text-sm text-gray-600 font-semibold'>{blog.date}</span>
//                                     </div>
//                                     <CiBookmark className='text-3xl p-2 rounded-full shadow bg-gray-100' />
//                                 </div>
//                             </div>
//                         </Link>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Blogs;
import React from 'react';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import useFetch from '../../../Components/CustomHooks/useFetch';

const Blogs = () => {
  const { data, loading, error } = useFetch({ url: "blogs.json" });

  const badgeColors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-pink-600'];

  // ✅ Handle loading & error
  if (loading) return <p className="text-center text-lg py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">Error loading blogs.</p>;

  return (
    <div className='max-w-7xl px-5 py-6 lg:px-10 mx-auto'>
      <h2 className='text-3xl font-bold mb-6'>Latest Blogs</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {data.slice(0, 4).map((blog, index) => (
          <Link key={blog.id} to={`/blogsView/${blog.id}`} className='group'>
            <div className='relative flex flex-col gap-2 shadow rounded overflow-hidden bg-white hover:shadow-xl transition duration-300'>
              <img
                src={blog.img}
                alt="Blog Cover"
                className='w-full h-44 object-cover rounded-t transform group-hover:scale-105 transition duration-500'
              />
              <p className={`absolute top-28 left-3 z-10 text-sm font-bold text-white rounded w-fit py-1 px-2 ${badgeColors[index % badgeColors.length]}`}>
                {blog.category}
              </p>
              <p className='text-gray-700 font-medium py-1 px-4'>
                {blog.description.split(' ').slice(0, 20).join(' ')}...
              </p>
              <div className='flex justify-between items-center px-4 pb-4'>
                <div className='flex items-center gap-2 text-gray-600'>
                  <CiCalendarDate className='text-xl' />
                  <span className='text-sm font-semibold'>{blog.date}</span>
                </div>
                <CiBookmark className='text-3xl p-2 rounded-full shadow bg-gray-100 text-gray-700' />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

