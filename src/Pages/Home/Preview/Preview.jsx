import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';
import { MdOutlineStar } from 'react-icons/md';

const Preview = () => {
    return (
        <div className='flex max-w-7xl px-5 lg:px-10 py-8 mx-auto rounded-2xl '>
            <div className='flex bg-amber-50 rounded-2xl'>
                {/* Preview section 1 */}
                <div className='relative flex gap-3 items-center p-10 '>
                    <div>
                        <img src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/lfs-4.webp" alt="man" className='w-64 h-40  transform hover:translate-x-1 duration-1000 rounded-full border-r' />
                    </div>
                    {/* Gradient overlay */}
                    <div className=' rounded-2xl z-0'></div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-10 items-center'>
                            <button className='text-sm text-white font-bold w-fit py-1 px-3 rounded bg-gray-500'>Lifestyle</button>
                            <div className='flex items-center'>
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-gray-400' />
                                <div>
                                    <p className='font-semibold pl-2'>4 (3)<span className='text-gray-500 pl-2'>out of 10</span> </p>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-2xl font-bold'>Winter Dressing Tips When It’s Really Cold Out</h1>
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
                                <span className='text-sm font-semibold'>Jul 11, 2025</span>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Preview section 2 */}
                <div className='relative flex gap-3 items-center p-10  border-l border-gray-300 '>
                    <div>
                        <img src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/tech-6.webp" alt="man" className='w-64 h-40 transform hover:translate-x-1 duration-1000 rounded-full' />
                    </div>
                    {/* Gradient overlay */}
                    <div className=' rounded-2xl z-0'></div>

                    {/* Text Content */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-5 items-center'>
                            <button className='text-sm text-white font-bold w-fit py-1 px-3 rounded bg-blue-400'>Technology</button>
                            <div className='flex items-center'>
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-amber-400' />
                                <MdOutlineStar className='text-lg text-gray-400' />
                                <div>
                                    <p className='font-semibold pl-2'>4 (3)<span className='text-gray-500 pl-2'>out of 10</span> </p>
                                </div>

                            </div>
                        </div>
                        <h1 className='text-2xl font-bold'>Winter Dressing Tips When It’s Really Cold Out</h1>
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
                                <span className='text-sm font-semibold'>Jul 11, 2025</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;