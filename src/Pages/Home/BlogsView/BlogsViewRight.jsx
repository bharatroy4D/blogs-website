import React from 'react';
import useFetch from '../../../Components/CustomHooks/useFetch';
import { BsCalendarDate } from 'react-icons/bs';

const BlogsViewRight = () => {
  const { data } = useFetch({ url: '/blogs.json' });

  return (
    <div className='w-full lg:w-[30%] mt-10 lg:mt-16 rounded-2xl bg-base-100'>
      <img
        src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/10/Advertisement-2.webp"
        alt="Advertisement"
        className='w-full rounded'
      />

      <div className='flex flex-col gap-5 shadow py-6 px-2 mt-10'>
        <h1 className='text-2xl font-bold border-b border-gray-400 pb-5'>Recent Post</h1>
        <div className='space-y-3'>
          {data?.map((blog) => (
            <div key={blog.id} className='flex gap-4'>
              <img src={blog.img} alt="" className='w-24 h-24 rounded-md object-cover' />
              <div className='font-medium space-y-2'>
                <p className='text-sm'>
                  {blog.description.length > 40 ? `${blog.description.slice(0, 40)}...` : blog.description}
                </p>
                <p className='flex items-center gap-2 text-xs font-semibold text-gray-500'>
                  <BsCalendarDate />
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsViewRight;
