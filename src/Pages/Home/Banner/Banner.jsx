import React from 'react';
import banner from '../../../assets/banner.jpg';
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className=''>
            <div className='w-full max-w-4xl mx-auto relative rounded-2xl overflow-hidden'>
                {/* Banner Image */}
                <img src={banner} alt="Banner" className='w-full h-auto object-cover' />

                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0'></div>

                {/* Text Content */}
                <div className='absolute inset-x-0 bottom-5 px-5 sm:px-10 z-10 text-white flex flex-col gap-3'>
                    <button className='text-xs sm:text-sm font-bold py-1 px-3 rounded bg-blue-400 w-max'>
                        Technology
                    </button>
                    <h1 className='text-lg sm:text-2xl md:text-3xl font-bold leading-snug'>
                        Winter Dressing Tips When It's Really Cold Out
                    </h1>
                    <p className='text-sm sm:text-base font-medium'>
                        To mark the first UK show of artist Herni Brande, developers ThemesCamp and German Studio
                    </p>

                    <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 text-sm sm:text-base'>
                        <div className='flex gap-2 items-center'>
                            <img
                                src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g"
                                alt="Author"
                                className='w-6 h-6 sm:w-8 sm:h-8 rounded-full'
                            />
                            <h2 className='font-bold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-lg' />
                            <span className='font-semibold'>Jul 11, 2025</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegComment className='text-lg' />
                            <span className='font-semibold'>0 comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
