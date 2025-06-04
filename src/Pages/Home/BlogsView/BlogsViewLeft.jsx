import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { FaRegCircleCheck, FaRegComment } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Components/CustomHooks/useFetch';

const BlogsViewLeft = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch({ url:'/blogs.json' });

  const blog = data?.find((b) => b.id === Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='text-red-500'>Error: {error}</p>;
  if (!blog) return <p className='text-gray-500'>No blog found with this ID.</p>;

  return (
    <div className='w-full lg:w-[70%]'>
      <div className='flex flex-col gap-4 max-w-4xl'>
        <h3 className='flex items-center text-gray-600 font-semibold mb-7'>
          Home
          <MdOutlineKeyboardArrowRight className='text-xl ml-5' />
          <span className='block lg:hidden roboto ml-5 text-lg text-black'>{blog.description.length > 20 ? blog.description.slice(0, 20) + "..." : blog.description}</span>
          <span className='hidden lg:block ml-5 lato text-lg text-black'>{blog.description}</span>
          
        </h3>

        <img src={blog.img} alt={blog.category} className='rounded-2xl w-full object-cover' />
        <button className='text-left bg-gray-500 w-fit text-white font-semibold rounded py-1 px-3'>
          {blog.category}
        </button>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-2'>{blog.description}</h1>

        <div className='flex flex-wrap items-center gap-5'>
          <div className='flex gap-2 items-center'>
            <img
              src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
              alt=""
              className='rounded-full hover:scale-110 transition-transform duration-300'
            />
            <h2 className='text-sm font-semibold'>Bin McKiney</h2>
          </div>
          <div className='flex items-center gap-2'>
            <CiCalendarDate className='text-xl' />
            <span className='text-sm font-semibold'>{blog.date}</span>
          </div>
          <div className='flex items-center'>
            <FaRegComment />
            <span className='pl-2'>Comment</span>
          </div>
          <div className='flex items-center'>
            <IoEye />
            <span className='pl-2'>Views</span>
          </div>
          <CiBookmark className='text-2xl ml-4 bg-base-200 rounded-full p-1 shadow' />
        </div>
      </div>

      {/* Blog content */}
      <div>
        <p className='text-lg text-gray-500 py-5'>
          To mark the first UK show of artist Herni Brande, developers ThemesCamp and German studio schultzschultz have created the Ledge Wooden at Berlin city.
        </p>
        <p className='text-lg text-gray-500 py-6'>
          Lorem ipsum dolor sit amet. Ut distinctio galisum ea laborum esse sed debitis galisum ea dolore any delectus dolore reprehenderit?{' '}
          <span className='font-semibold text-black'>Qui architecto explicabo est soluta consequatur</span> in eius that nemo architecto quo galisum tempore.
        </p>

        <h2 className='text-2xl font-bold mt-5'>Where can I get some?</h2>
        <p className='text-lg text-gray-500 py-5'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
        </p>

        {/* Content Points */}
        <div>
          <h2 className='text-xl font-bold'>Contents</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg my-4'>
            {Array(6).fill().map((_, i) => (
              <div key={i} className='flex items-center gap-4'>
                <FaRegCircleCheck className='text-lg' />
                Website should be easy to navigate
              </div>
            ))}
          </div>
        </div>

        {/* Blog-related images */}
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <img
            src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/06/Image-4.webp"
            alt=""
            className='w-full sm:w-1/2 rounded'
          />
          <img
            src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/06/Image-1-3.webp"
            alt=""
            className='w-full sm:w-1/2 rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsViewLeft;
