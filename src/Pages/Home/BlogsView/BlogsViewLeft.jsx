import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { FaRegCircleCheck, FaRegComment } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import useFetch from '../../../Components/CustomHooks/useFetch';

const BlogsViewLeft = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch({ url: '/public/blogs.json' });

  //  matched blog
  const blog = data?.find((b) => (b.id) === Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='text-red-500'>Error: {error}</p>;
  if (!blog) return <p className='text-gray-500'>No blog found with this ID.</p>;

  return (
    <div className='w-[70%]'>
      <div className='flex flex-col gap-4 max-w-4xl'>
        <h3 className='flex items-center text-gray-600 font-semibold mb-7 '>
          Home
          <MdOutlineKeyboardArrowRight className='relative top-0.5 text-xl align-middle ml-5' />
          <span className='ml-5 '>{blog.title || 'Blog Detail'}</span>
        </h3>

        <img src={blog.img} alt={blog.category} className='rounded-2xl ' />
        <button className='text-left bg-gray-500 w-fit text-white font-semibold rounded py-1 px-3'>
          {blog.category}
        </button>
        <h1 className='text-4xl font-bold py-2'>{blog.description}</h1>

        <div className='flex items-center gap-7'>
          <div className='flex gap-2 items-center'>
            <img
              src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
              alt=""
              className='rounded-full transition-transform duration-1000 ease-in-out transform hover:scale-110'
            />
            <h2 className='text-sm font-semibold'>Bin McKiney</h2>
          </div>
          <div className='flex items-center gap-2'>
            <CiCalendarDate className='text-xl' />
            <span className='text-sm font-semibold'>{blog.date}</span>
          </div>
          <div className='flex items-center'>
            <FaRegComment />
            <span className='pl-5'>Comment</span>
          </div>
          <div className='flex items-center'>
            <IoEye />
            <span className='pl-5'>Views</span>
          </div>
          <CiBookmark className='text-2xl ml-8 bg-base-200 rounded-full p-1 shadow' />
        </div>
      </div>

      {/* Details content */}
      <div>
        <p className='text-xl text-gray-500 py-5'>
          To mark the first UK show of artist Herni Brande, developers ThemesCamp and German studio schultzschultz have created the Ledge Wooden at Berlin city.
        </p>
        <p className='text-xl text-gray-500 py-6'>
          Lorem ipsum dolor sit amet. Ut distinctio galisum ea laborum esse sed debitis galisum ea dolore any delectus dolore reprehenderit?{' '}
          <span className='font-semibold text-black'>Qui architecto explicabo est soluta consequatur</span> in eius that nemo architecto quo galisum tempore.
        </p>
        <h1 className='text-2xl font-bold mt-5'>Where can I get some?</h1>
        <p className='text-xl text-gray-500 py-5'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, the totam rem aperiam, the eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia any at consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>

        {/* Content Points */}
        <div>
          <h2 className='text-xl font-bold'>Contents</h2>
          <div className='grid grid-cols-2 gap-4 text-lg my-4'>
            {Array(6).fill().map((_, i) => (
              <div key={i} className='flex items-center gap-4'>
                <FaRegCircleCheck className='text-lg' /> Website should be easy to navigate
              </div>
            ))}
          </div>
        </div>

        {/* Blog-related images */}
        <div className='flex gap-4'>
          <img src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/06/Image-4.webp" alt="" />
          <img src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/06/Image-1-3.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogsViewLeft;
