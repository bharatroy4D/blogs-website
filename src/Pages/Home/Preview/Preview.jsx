import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';
import { MdOutlineStar } from 'react-icons/md';

const Preview = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8'>
            <div className='flex flex-col lg:flex-row bg-amber-50 rounded-2xl overflow-hidden shadow'>

                {/* Preview Section 1 */}
                <div className='flex flex-col sm:flex-row gap-5 items-center p-6 lg:p-10 w-full lg:w-1/2'>
                    <img
                        src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/lfs-4.webp"
                        alt="man"
                        className='w-60 h-40 object-cover rounded-full border-r transform hover:translate-x-1 duration-700'
                    />

                    <div className='flex flex-col gap-3 text-center sm:text-left'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-10 gap-3'>
                            <button className='text-sm text-white font-bold py-1 px-3 rounded bg-gray-500 w-fit'>Lifestyle</button>
                            <div className='flex items-center justify-center sm:justify-start'>
                                {[...Array(4)].map((_, i) => (
                                    <MdOutlineStar key={i} className='text-lg text-amber-400' />
                                ))}
                                <MdOutlineStar className='text-lg text-gray-400' />
                              
                            </div>
                        </div>
                        <h1 className='text-xl lg:text-2xl font-bold'>Winter Dressing Tips When It’s Really Cold Out</h1>
                        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-7'>
                            <div className='flex gap-2 items-center'>
                                <img
                                    src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                    alt="author"
                                    className='w-6 h-6 rounded-full transition-transform duration-500 hover:scale-110'
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

                {/* Preview Section 2 */}
                <div className='flex flex-col sm:flex-row gap-5 items-center p-6 lg:p-10 w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-gray-300'>
                    <img
                        src="https://byteflows.net/wp/forcast-main/wp-content/uploads/2024/05/tech-6.webp"
                        alt="tech"
                        className='w-60 h-40 object-cover rounded-full transform hover:translate-x-1 duration-700'
                    />

                    <div className='flex flex-col gap-3 text-center sm:text-left'>
                        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-10 gap-3'>
                            <button className='text-sm text-white font-bold py-1 px-3 rounded bg-blue-400 w-fit'>Technology</button>
                            <div className='flex items-center justify-center sm:justify-start'>
                                {[...Array(4)].map((_, i) => (
                                    <MdOutlineStar key={i} className='text-lg text-amber-400' />
                                ))}
                                <MdOutlineStar className='text-lg text-gray-400' />
                              
                            </div>
                        </div>
                        <h1 className='text-xl lg:text-2xl font-bold'>Winter Dressing Tips When It’s Really Cold Out</h1>
                        <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-7'>
                            <div className='flex gap-2 items-center'>
                                <img
                                    src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                    alt="author"
                                    className='w-6 h-6 rounded-full transition-transform duration-500 hover:scale-110'
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
