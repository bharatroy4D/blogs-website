import React from 'react';
import banner from '../../../assets/banner.jpg'
import { CiCalendarDate } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div>
            <div className='w-[600PX] relative'>
                <img src={banner} alt="" className='w-full rounded ' />

                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/25 to-transparent rounded-2xl z-0'></div>

                {/* Text Content */}
                <div className='absolute text-white bottom-7 pl-10 left-1/2 z-10 w-full text-left flex flex-col items-start gap-3 transform -translate-x-1/2'>
                    <button className='text-sm font-bold py-1 px-3 rounded bg-blue-400'>Technology</button>
                    <h1 className='text-4xl font-bold'>Winter Dressing Tips When It's Really Cold Out</h1>
                    <p className='text-lg font-semibold'>To mark the first UK show of artist Herni Brande, developers ThemesCamp and German Studio</p>
                    <div className='flex items-center gap-7'>
                        <div className='flex gap-2 items-center'>
                            <img src="https://secure.gravatar.com/avatar/e395de6d983ff5fd552a36947ee8d60cb937c8078624065edbc305d25a3287f7?s=25&d=mm&r=g" alt="" className='rounded-full' />
                            <h2 className='text-sm font-bold'>Bin McKiney</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <CiCalendarDate className='text-xl' />
                            <span className='font-semibold'>Jul 11, 2025</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegComment className='text-xl' />
                            <span className='font-semibold'>0 comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;